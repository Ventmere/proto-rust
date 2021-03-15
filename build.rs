use std::path::Path;
use std::path::PathBuf;
use walkdir::WalkDir;

#[derive(Debug)]
struct Package {
    path: PathBuf,
    name: String,
    components: Vec<String>,
}

impl Package {
    fn from_path(base: &Path, path: PathBuf) -> Package {
        let components: Vec<String> = path
            .strip_prefix(base)
            .unwrap()
            .components()
            .filter_map(|component| match component {
                std::path::Component::Normal(path) => path.to_str().map(ToOwned::to_owned),
                _ => None,
            })
            .collect();
        Package {
            path,
            name: components
                .iter()
                .last()
                .and_then(|v| Path::new(v).file_stem())
                .and_then(|v| v.to_str().map(ToOwned::to_owned))
                .unwrap(),
            components,
        }
    }
}

fn main() {
    let base = Path::new("./proto");

    let dir = WalkDir::new("./proto");
    let entries = dir.into_iter().collect::<Result<Vec<_>, _>>().unwrap();
    let packages: Vec<_> = entries
        .into_iter()
        .filter_map(|entry| {
            if entry.file_type().is_file()
                && !entry
                    .path()
                    .file_name()
                    .and_then(|name| name.to_str().map(|name| name.starts_with(".")))
                    .unwrap_or(false)
            {
                Some(Package::from_path(base, entry.into_path()))
            } else {
                None
            }
        })
        .collect();
    let mut builder = tonic_build::configure();

    builder = builder.build_client(false).build_server(false);

    #[cfg(feature = "client")]
    {
        builder = builder.build_client(true);
    }

    #[cfg(feature = "server")]
    {
        builder = builder.build_server(true);
    }

    let paths: Vec<_> = packages.iter().map(|p| p.path.as_ref()).collect();
    builder.compile(&paths, &[Path::new("./proto")]).unwrap();
}
