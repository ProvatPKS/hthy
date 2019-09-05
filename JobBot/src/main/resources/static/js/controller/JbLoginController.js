Ext.define('JobBot.controller.JbLoginController', {
    extend: 'Ext.app.Controller',
    id: 'jbLoginControllerId',

    model: ['JobBot.model.UserToken'],
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
       /* var username = form.down('textfield[name=jbotUserName]').getValue();
        var password = form.down('textfield[name=jbotToken]').getValue();

        console.log(username + ' ' + password);*/

        var values = button.up('window').down('form').getValues();
        console.log(values);

        Ext.Ajax.request({
            url: '/login',
            method: 'POST',
            jsonData: values,
            scope: this,
            success: this.onLoginSuccess,
            failure: this.onLoginFailure
        });
    },

    onLoginSuccess: function(response){

        var returnInfo = Ext.decode(response.responseText);
        console.log(returnInfo);

        if(returnInfo.status.status = 'success'){
            Ext.getCmp('jbloginId').close();
            Ext.create('JobBot.view.JbViewport')
            loginSuccess = true;
            JobBotApp.updateStatusBar();
        }
    },

    onLoginFailure: function(response){
        console.log(conn.responseText, response);
    }

});
