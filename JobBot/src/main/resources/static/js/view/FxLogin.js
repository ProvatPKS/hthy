Ext.require([ 'Ext.window.Window' ]);

Ext.define('FxAdmin.view.FxLogin', {
	extend: 'Ext.window.Window',
	alias: 'widget.fxlogin',
	id: 'fxloginId',
	autoShow: true, // #4
	height: 170, // #5
	width: 360, // #6
	layout: {
		type: 'fit' // #7
	},
	title: "Login", // #9
	closeAction: 'close', // #10
	closable: false,
	items: [ {
		xtype: 'form', // #12
		frame: false, // #13
		bodyPadding: 15, // #14
		defaults: { // #15
			xtype: 'textfield', // #16
			anchor: '100%', // #17
			labelWidth: 60
		},
		items: [ {
			name: 'user',
			fieldLabel: "User",
			value: 'admin'
		}, {
			inputType: 'password', // #19
			name: 'password',
			fieldLabel: "Password",
			value: 'admin'
		} ]
	} ],
	bbar: [ {
		xtype: 'tbfill' // #24
	}, {
		xtype: 'button', // #25
		itemId: 'cancel',
		text: 'Cancel',
		handler: function() {
			this.up('window').down('form').getForm().reset();
		}
	}, {
		xtype: 'button', // #26
		itemId: 'submit',
		formBind: true, // #27
		text: "Submit",
		action: 'login'
	} ]

});
