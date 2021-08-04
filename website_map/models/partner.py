from odoo import models, fields


class Partner(models.Model):
    _inherit = 'res.partner'

    show_on_map = fields.Boolean()
