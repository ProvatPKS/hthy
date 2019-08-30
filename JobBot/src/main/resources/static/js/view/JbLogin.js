Ext.require([ 'Ext.window.Window' ]);

Ext.define('JobBot.view.JbLogin', {
    extend: 'Ext.window.Window',
    alias: 'widget.jblogin',
    id: 'jbloginId',
    autoShow: true,
    height: 170,
    width: 360,
    layout: {
        type: 'fit'
    },
    title: "Login",
    closeAction: 'close',
    closable: false,
    items: [ {
        xtype: 'form',
        frame: false,
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 60
        },
        items: [ {
            name: 'username',
            fieldLabel: "Username",
            value: 'admin'
        }, {
            inputType: 'Password',
            name: 'password',
            fieldLabel: "Password",
            value: 'noface2face'
        } ]
    } ],
    bbar: [ {
        xtype: 'tbfill'
    }, {
        xtype: 'button',
        itemId: 'login',
        formBind: true,
        text: "Log In",
        action: 'login'
    } ]

});
