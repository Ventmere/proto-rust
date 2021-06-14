pub use anyhow::{Error, Result};
pub use tonic::transport::{Channel, Endpoint};

pub mod ventmere {
    pub mod s2 {
        pub mod core {
            use anyhow::Result;
            use tonic::transport::{Channel, Endpoint};

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

            #[cfg(feature = "client")]
            pub mod client {
                use super::*;
                #[derive(Clone)]
                pub struct S2CoreGrpcClient {
                    pub product: product::s2_product_client::S2ProductClient<Channel>,
                    pub inbound_shipment:
                        inbound_shipment::s2_inbound_shipment_client::S2InboundShipmentClient<
                            Channel,
                        >,
                    pub inventory: inventory::s2_inventory_client::S2InventoryClient<Channel>,
                }

                impl S2CoreGrpcClient {
                    pub async fn connect(uri: &str) -> Result<Self> {
                        let channel = Endpoint::from_shared(uri.to_string())?.connect().await?;
                        Ok(S2CoreGrpcClient {
                            product: product::s2_product_client::S2ProductClient::new(channel.clone()),
                            inbound_shipment: inbound_shipment::s2_inbound_shipment_client::S2InboundShipmentClient::new(
                                channel.clone(),
                            ),
                            inventory: inventory::s2_inventory_client::S2InventoryClient::new(channel.clone()),
                        })
                    }
                    pub fn connect_lazy(uri: &str) -> Result<Self> {
                        let channel = Endpoint::from_shared(uri.to_string())?.connect_lazy()?;
                        Ok(S2CoreGrpcClient {
                            product: product::s2_product_client::S2ProductClient::new(channel.clone()),
                            inbound_shipment: inbound_shipment::s2_inbound_shipment_client::S2InboundShipmentClient::new(
                                channel.clone(),
                            ),
                            inventory: inventory::s2_inventory_client::S2InventoryClient::new(channel.clone()),
                        })
                    }
                }
            }
        }

        pub mod sync {
            use anyhow::Result;
            use tonic::transport::{Channel, Endpoint};
            pub mod product_link {
                tonic::include_proto!("ventmere.s2.sync.product_link");
            }

            pub mod amazon {
                tonic::include_proto!("ventmere.s2.sync.amazon");
            }

            pub mod shopify {
                tonic::include_proto!("ventmere.s2.sync.shopify");
            }

            #[cfg(feature = "client")]
            pub mod client {
                use super::*;

                #[derive(Clone)]
                pub struct S2SyncGrpcClient {
                    pub amazon: amazon::s2_sync_amazon_client::S2SyncAmazonClient<Channel>,
                    pub product_link:
                        product_link::s2_sync_product_link_client::S2SyncProductLinkClient<Channel>,
                    pub shopify: shopify::s2_sync_shopify_client::S2SyncShopifyClient<Channel>,
                }

                impl S2SyncGrpcClient {
                    pub async fn connect(uri: &str) -> Result<Self> {
                        let channel = Endpoint::from_shared(uri.to_string())?.connect().await?;
                        Ok(S2SyncGrpcClient {
                            amazon: amazon::s2_sync_amazon_client::S2SyncAmazonClient::new(channel.clone()),
                            product_link:
                                product_link::s2_sync_product_link_client::S2SyncProductLinkClient::new(
                                    channel.clone(),
                                ),
                            shopify: shopify::s2_sync_shopify_client::S2SyncShopifyClient::new(channel.clone()),
                        })
                    }

                    pub fn connect_lazy(uri: &str) -> Result<Self> {
                        let channel = Endpoint::from_shared(uri.to_string())?.connect_lazy()?;
                        Ok(S2SyncGrpcClient {
                            amazon: amazon::s2_sync_amazon_client::S2SyncAmazonClient::new(channel.clone()),
                            product_link:
                            product_link::s2_sync_product_link_client::S2SyncProductLinkClient::new(
                                    channel.clone(),
                                ),
                            shopify: shopify::s2_sync_shopify_client::S2SyncShopifyClient::new(channel.clone()),
                        })
                    }
                }
            }
        }
    }
}
