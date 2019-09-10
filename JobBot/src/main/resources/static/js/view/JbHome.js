Ext.define('JobBot.view.JbHome', {
    extend: 'Ext.window.Window',
    id : 'jbHomeId',
    alias: 'widget.jbHome',

    autoShow: true,
    height: 700,
    width: 800,
    title: "Home",
    closeAction: 'close',
    closable: false,
    draggable: false,
    border: false,
    /*layout: {
        type: 'vbox',
        align : 'center',
        pack  : 'start'
    },*/
    items: [{
        xtype: 'jbCurrentStatus',
        border: false,
        //bodyStyle:'padding:5px 5px 5px',
        height: 200
    },{

    },{
        xtype: 'jbJobActivitySummary',
        border: false,
        //bodyStyle:'padding:5px 5px 5px',
        height: 200
    },{
        xtype: 'jbActionRequired',
        border: false,
        height: 200
    }]
});
