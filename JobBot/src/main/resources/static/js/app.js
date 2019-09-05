Ext.require([
	'Ext.window.Window',
	'Ext.form.*',
	'Ext.app.Controller'
]);

Ext.application({
	name: 'JobBot',
	appFolder: Ext.Loader.getPath('JobBot'),
	autoCreateViewport: false,
    controllers: [
        'JobBot.controller.JbLoginController'
    ],
	views: [
		'JobBot.view.JbViewport',
		'JobBot.view.JbJobSuitesGrid',
		'JobBot.view.JbLogin',
		'JobBot.view.JbHeader',
        'JobBot.view.JbHome',
        'JobBot.view.JbCurrentStatus',
        'JobBot.view.JbJobActivitySummary',
        'JobBot.view.JbActionRequired'
	],

	splashscreen: {},
	init: function() {
	        // Start the mask on the body and get a reference to the mask
    		splashscreen = Ext.getBody().mask('Loading JobBot application', 'splashscreen');

    		// Add a new class to this mask as we want it to look different from the
    		// default.
    		splashscreen.addCls('splashscreen');

    		// Insert a new div before the loading icon where we can place our logo.
    		Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
    			cls: 'x-splash-icon'
    		});
	},
	launch: function() {
		JobBotApp = this;
		if (!loginSuccess) {
            var task = new Ext.util.DelayedTask(function() {
                // Fade out the body mask
                splashscreen.fadeOut({
                    duration: 100,
                    remove: true
                });

                // Fade out the icon and message
                splashscreen.next().fadeOut({
                    duration: 1000,
                    remove: true,
                    listeners: {
                        afteranimate: function(el, startTime, eOpts) {
                            Ext.widget('jblogin');
                        }
                    }
                });
            });
            task.delay(200);
        }
	},


    updateStatusBar: function() {
        var copyright = '<span> &copy; 2019 - 2021 XXX. All rights reserved.</span> ';
        var footerStatusBar = Ext.create('Ext.ux.statusbar.StatusBar', {
            id: 'basic-statusbar',
            cls: 'x-statusbar',
            // defaults to use when the status is cleared:
            defaultText: 'Initial State',
            defaultIconCls: 'x-status-valid',
            text: 'Initial State',
            iconCls: 'x-status-valid',
            height: 20,
            dock: 'top',
            items: [ '-', copyright ]
        });
        Ext.getCmp('statusbarPaneId').addDocked(footerStatusBar);
    }
});
