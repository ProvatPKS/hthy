Ext.require([ 'Ext.grid.*' ]);

Ext.define('JobBot.view.JbJobSuitesGrid', {
	extend: 'Ext.grid.Panel',
	id: 'jbJobSuitesGridId',
	alias: 'widget.jbJobSuitesGrid',
	title: 'Job Suites',
    //store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Description', dataIndex: 'description'},
        { text: 'Hold Status', dataIndex: 'holdStatus' },
        { text: 'Schedule Type', dataIndex: 'scheduleType' },
        { text: 'Reactive', dataIndex: 'reactive' },
        { text: 'Editing Member Jobs?', dataIndex: 'editingMemberJobs' },
        { text: 'Next Schedule Run Time', dataIndex: 'nextScheduleRunTime' },
        { text: 'Status', dataIndex: 'status' }
    ]



});
