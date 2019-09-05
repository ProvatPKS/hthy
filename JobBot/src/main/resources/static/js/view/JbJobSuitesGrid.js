Ext.require([ 'Ext.grid.*' ]);

Ext.define('JobBot.view.JbJobSuitesGrid', {
	extend: 'Ext.grid.Panel',
	id: 'jbJobSuitesGridId',
	alias: 'widget.jbJobSuitesGrid',
	title: 'Job Suites',
    //store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        },{
            text: 'Description',
            dataIndex: 'description',
            flex: 1
        },{
	        text: 'Hold Status',
            dataIndex: 'holdStatus',
            flex: 1
        },{
	        text: 'Schedule Type',
            dataIndex: 'scheduleType',
            flex: 1
        },{
            text: 'Reactive',
            dataIndex: 'reactive',
            flex: 1
        },{
            text: 'Editing Member Jobs?',
            dataIndex: 'editingMemberJobs',
            flex: 1
        },{
            text: 'Next Schedule Run Time',
            dataIndex: 'nextScheduleRunTime',
            flex: 1
        },{
            text: 'Status',
            dataIndex: 'status',
            flex: 1
        }
    ]



});
