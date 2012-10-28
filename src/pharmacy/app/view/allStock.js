Ext.define('RaxaEmr.Pharmacy.view.allStock', {
    extend: 'Ext.container.Container',
    alias: 'widget.allStock',
    items: [{
        xtype: 'allStockForm'
    }, {
        xtype: 'allStockPanel'
    }, {
        layout: 'card',
        border: false,
        activeItem: 0,
        id: 'stocklayoutarea',
        //one stock grid here, then use filter to change it
        items: [{
            xtype: 'allStockGrid',
            id: 'allStockGrid'
        }, {
            xtype: 'stockIssueGrid'
        }]
    }]
});