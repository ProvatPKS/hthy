
var strLogout = '<li><a href="#">SignOut</a></li>';
var subLine = '/*<li class="user">*/<a id="usertxtId" href="#">Welcome <b>Guest</b> </a></li>' + strLogout;

var newHeader = '<div class="header3">' + '<h1></h1>' + '<ul>' + subLine + '</ul>' + '</div>';

Ext.define('JobBot.view.JbHeader', {
	extend: 'Ext.Container',
	alias: 'widget.jbHeader',
	style: {
		"background-color": "#000;"
	},
	bodyBorder: false,
	html: newHeader,
	initComponent: function() {
		this.callParent(arguments);
	},
	listeners: {
		afterrender: function(container, eopts) {
		    console.log("new header");
			Ext.fly('usertxtId').dom.innerHTML = 'Welcome <b> Guest </b>';
			var parentObj = Ext.get('loading-parent');
		}
	}
});
