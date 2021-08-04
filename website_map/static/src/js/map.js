odoo.define('website_mpa.map', function (require) {
    "use strict";
    const rpc = require('web.rpc');

    const map_container = document.getElementById('mapid');
    if (map_container) {
        rpc.query({
            model: 'ir.config_parameter',
            method: 'get_param',
            args: ['web_map.token_map_box']
        }).then(function (token) {
            let map_box_token = token;
            if (map_box_token) {
                const map = L.map('mapid').setView([51.505, -0.09], 7);
                const layerGroup = L.layerGroup().addTo(map);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: ' <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: map_box_token
                }).addTo(map);

                const countries_select = document.getElementById('countries_select');

                function show_pins(country_id) {
                    rpc.query({
                        model: 'res.partner',
                        method: 'search_read',
                        args: [[["country_id", '=', parseInt(country_id)], ["show_on_map", '=', true]], ['name', 'partner_latitude', 'partner_longitude', 'contact_address']],
                    }).then(function (partners) {
                        layerGroup.clearLayers();
                        for (const partner of partners) {
                            const marker = L.marker([partner['partner_latitude'], partner['partner_longitude']]).addTo(layerGroup);
                            marker.bindPopup(partner['name'] + '\n' + partner['contact_address']);
                        }
                        if (partners) map.flyTo([partners[0]['partner_latitude'], partners[0]['partner_longitude']], 10);
                    })
                }

                countries_select.addEventListener("change", function get_country() {
                    show_pins(countries_select.value);
                }, false);
            }
        });
    }

});