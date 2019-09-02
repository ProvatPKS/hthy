Ext.define('JobBot.controller.JbLoginController', {
    extend: 'Ext.app.Controller',
    id: 'jbLoginControllerId',

    model: [],
    views: ['JobBot.view.JbLogin'],

    init: function(application) {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            },
            'jblogin button[action=login]': {
                click:this.onLoginRequest
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    },

    onLoginRequest: function(button, e, opts){

        var form = button.up('window').down('form');
        var username = form.down('textfield[name=username]').getValue();
        var password = form.down('textfield[name=password]').getValue();

        console.log(username + ' ' + password);


        Ext.Ajax.request({
            url: '/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            waitTitle: 'Connecting',
            waitMsg: 'Sending data...',
            params: {
                username: username,
                password: password
            },
            jsonData: true,
            useDefaultXhrHeader : false,
            withCredentials: true,
            scope: this,
            success: this.onLoginSuccess,
            failure: this.onLoginFailure
        });
    },

    onLoginSuccess: function(conn, response, options, eOpts){
        console.log('success');
    },

    onLoginFailure: function(conn, response, options, eOpts){
        console.log(conn.responseText, response);
    }

});
