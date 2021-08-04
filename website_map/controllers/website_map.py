from odoo import http
from odoo.http import request


class WebsiteMap(http.Controller):

    @http.route(['/store_finder'], auth="public", website="True")
    def store_finder(self):
        partners = request.env['res.partner'].search([('show_on_map', '=', True)])
        countries = partners.mapped('country_id')
        return request.render('website_map.store_finder_template', {
            'countries': countries
        })
