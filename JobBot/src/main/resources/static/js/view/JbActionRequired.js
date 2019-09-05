Ext.require([ 'Ext.grid.*' ]);

Ext.define('JobBot.view.JbActionRequired', {
	extend: 'Ext.panel.Panel',
	id: 'jbActionRequiredId',
	alias: 'widget.jbActionRequired',
	title: 'Current Status',
    bodyStyle:'padding:5px 0px 5px 0px',
    //store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        {
            text: 'Job Scheduler',
            dataIndex: 'jobScheduler',
            flex: 1
        },{
            text: 'Job Queues',
            dataIndex: 'jobQueues',
            flex: 1
        },{
	        text: 'SNMP Monitoring',
            dataIndex: 'snmpMonitoring',
            flex: 1
        },{
	        text: 'Auditing',
            dataIndex: 'auditing',
            flex: 1
        },{
            text: 'History Purge',
            dataIndex: 'historyPurge',
            flex: 1
        },{
            text: 'Standby Server',
            dataIndex: 'standbyServer',
            flex: 1
        }
    ]



});
