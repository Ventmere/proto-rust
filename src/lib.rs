pub mod ventmere {
    pub mod s2 {
        pub mod core {
            pub mod brand {
                tonic::include_proto!("ventmere.s2.core.brand");
            }

            pub mod inbound_shipment {
                tonic::include_proto!("ventmere.s2.core.inbound_shipment");
            }

            pub mod inventory {
                tonic::include_proto!("ventmere.s2.core.inventory");
            }

            pub mod product {
                tonic::include_proto!("ventmere.s2.core.product");
            }
        }
    }
}
