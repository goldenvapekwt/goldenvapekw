# -*- coding: utf-8 -*-
{
    'name': "golden_vape_pos_auto_gen_invoice",

    'summary': """
        Automatically makes all POS orders in a session generate invoices once validated
        """,

    'description': """
        Automatically makes all POS orders in a session generate invoices once validated
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/14.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['point_of_sale'],

    # always loaded
    'data': [
        'views/assets.xml'
    ],
}
