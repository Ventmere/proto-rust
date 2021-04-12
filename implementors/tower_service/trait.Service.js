(function() {var implementors = {};
implementors["ventmere_proto_rust"] = [{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.4/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"ventmere_proto_rust/ventmere/s2/core/inbound_shipment/s2_inbound_shipment_server/struct.S2InboundShipmentServer.html\" title=\"struct ventmere_proto_rust::ventmere::s2::core::inbound_shipment::s2_inbound_shipment_server::S2InboundShipmentServer\">S2InboundShipmentServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ventmere_proto_rust/ventmere/s2/core/inbound_shipment/s2_inbound_shipment_server/trait.S2InboundShipment.html\" title=\"trait ventmere_proto_rust::ventmere::s2::core::inbound_shipment::s2_inbound_shipment_server::S2InboundShipment\">S2InboundShipment</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ventmere_proto_rust::ventmere::s2::core::inbound_shipment::s2_inbound_shipment_server::S2InboundShipmentServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.4/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"ventmere_proto_rust/ventmere/s2/core/inventory/s2_inventory_server/struct.S2InventoryServer.html\" title=\"struct ventmere_proto_rust::ventmere::s2::core::inventory::s2_inventory_server::S2InventoryServer\">S2InventoryServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ventmere_proto_rust/ventmere/s2/core/inventory/s2_inventory_server/trait.S2Inventory.html\" title=\"trait ventmere_proto_rust::ventmere::s2::core::inventory::s2_inventory_server::S2Inventory\">S2Inventory</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ventmere_proto_rust::ventmere::s2::core::inventory::s2_inventory_server::S2InventoryServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.4/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"ventmere_proto_rust/ventmere/s2/core/product/s2_product_server/struct.S2ProductServer.html\" title=\"struct ventmere_proto_rust::ventmere::s2::core::product::s2_product_server::S2ProductServer\">S2ProductServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ventmere_proto_rust/ventmere/s2/core/product/s2_product_server/trait.S2Product.html\" title=\"trait ventmere_proto_rust::ventmere::s2::core::product::s2_product_server::S2Product\">S2Product</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ventmere_proto_rust::ventmere::s2::core::product::s2_product_server::S2ProductServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.4/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"ventmere_proto_rust/ventmere/s2/core/order/s2_order_server/struct.S2OrderServer.html\" title=\"struct ventmere_proto_rust::ventmere::s2::core::order::s2_order_server::S2OrderServer\">S2OrderServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ventmere_proto_rust/ventmere/s2/core/order/s2_order_server/trait.S2Order.html\" title=\"trait ventmere_proto_rust::ventmere::s2::core::order::s2_order_server::S2Order\">S2Order</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ventmere_proto_rust::ventmere::s2::core::order::s2_order_server::S2OrderServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.4/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"ventmere_proto_rust/ventmere/s2/sync/product_link/s2_sync_product_link_server/struct.S2SyncProductLinkServer.html\" title=\"struct ventmere_proto_rust::ventmere::s2::sync::product_link::s2_sync_product_link_server::S2SyncProductLinkServer\">S2SyncProductLinkServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ventmere_proto_rust/ventmere/s2/sync/product_link/s2_sync_product_link_server/trait.S2SyncProductLink.html\" title=\"trait ventmere_proto_rust::ventmere::s2::sync::product_link::s2_sync_product_link_server::S2SyncProductLink\">S2SyncProductLink</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ventmere_proto_rust::ventmere::s2::sync::product_link::s2_sync_product_link_server::S2SyncProductLinkServer"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.4/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"ventmere_proto_rust/ventmere/s2/sync/amazon/s2_sync_amazon_server/struct.S2SyncAmazonServer.html\" title=\"struct ventmere_proto_rust::ventmere::s2::sync::amazon::s2_sync_amazon_server::S2SyncAmazonServer\">S2SyncAmazonServer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"ventmere_proto_rust/ventmere/s2/sync/amazon/s2_sync_amazon_server/trait.S2SyncAmazon.html\" title=\"trait ventmere_proto_rust::ventmere::s2::sync::amazon::s2_sync_amazon_server::S2SyncAmazon\">S2SyncAmazon</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html\" title=\"trait http_body::Body\">HttpBody</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"https://docs.rs/http-body/0.4.1/http_body/trait.Body.html#associatedtype.Error\" title=\"type http_body::Body::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;StdError&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["ventmere_proto_rust::ventmere::s2::sync::amazon::s2_sync_amazon_server::S2SyncAmazonServer"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()