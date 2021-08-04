odoo.define('pos_auto_gen_invoice.PaymentScreen',function(require){
    "use strict";
    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const Registries = require('point_of_sale.Registries');

    let PaymentScreenMod = PaymentScreen => class extends PaymentScreen {
        constructor(){
            super(...arguments);

            this.currentOrder.set_to_invoice(true);
        }        

        //override
        toggleIsToInvoice() {
            // click_invoice
            // do nothing to currentOrder.toInvoice
        }
    }
    Registries.Component.extend(PaymentScreen,PaymentScreenMod);
});