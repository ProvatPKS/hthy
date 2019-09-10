Ext.require([ 'Ext.grid.*' ]);

Ext.define('JobBot.view.JbJobActivitySummary', {
	extend: 'Ext.grid.Panel',
	id: 'jbJobActivitySummaryId',
	alias: 'widget.jbJobActivitySummary',
	title: 'Job Activity Summary',
    bodyStyle:'padding:5px 5px 5px',
    //store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        {
            text: 'Initiated',
            dataIndex: 'initiated',
            flex: 1
        },{
            text: 'Queued',
            dataIndex: 'queued',
            flex: 1
        },{
	        text: 'Running',
            dataIndex: 'running',
            flex: 1
        },{
	        text: 'Completed',
            dataIndex: 'completed',
            flex: 1
        },{
            text: 'failed',
            dataIndex: 'failed',
            flex: 1
        },{
            text: 'Canceled',
            dataIndex: 'canceled',
            flex: 1
        },{
            text: 'Error',
            dataIndex: 'error',
            flex: 1
        },{
            text: 'Skipped',
            dataIndex: 'skipped',
            flex: 1
        }
    ]



});
