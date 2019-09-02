Ext.require([ 'Ext.container.Viewport', 'Ext.panel.Panel', 'Ext.tab.Panel', 'Ext.container.Container', 'Ext.grid.*' ]);

Ext.define('JobBot.view.JbViewport', {
	extend: 'Ext.container.Viewport',
	id: 'jbViewportId',
	alias: 'widget.jbViewport',

	layout: {
		type: 'border',
		splitter: false
	},
	defaults: {},
	initComponent: function() {
		var me = this;
		var config = {
			items: [ {
				region: 'north',
				height: 56,
				hidden: true
				//xtype: 'fxHeader'

			}, {
				region: 'center',
				xtype: 'jblogin'
			}, {
				xtype: 'panel',
				height: 20,
				border: 0,
                hidden: true,
				region: 'south'
			} ]
		};
		Ext.applyIf(me, config);
		me.callParent(arguments);
	},
	listeners: {
		afterrender: function(viewport, eopts) {
			console.log('view port ->after render :');
		}
	}

});
