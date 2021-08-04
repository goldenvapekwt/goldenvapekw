# -*- coding: utf-8 -*-
{
    'name': "website_map",
    'summary': "Map on the Website",
    'description': "Map on the Website",
    'author': "Odoo Middle East DMCC",
    'website': "https://www.odoo.com",
    'version': '1.0',
    'depends': ['website', 'web_map', 'base_geolocalize'],
    'data': [
        'views/partner.xml',
        'views/assets.xml',
        'views/templates.xml',

    ],
}
