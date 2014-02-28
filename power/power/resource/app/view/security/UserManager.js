//用户管理
Ext.define('power.view.security.UserManager',{
	id:'UserManager',
	extend:'Ext.panel.Panel',
	alias:'widget.UserManager',
	requires: [
        'power.view.security.UserOrgTree',
        'power.view.security.UserList'
    ],
	layout : 'border',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
            	Ext.create('power.view.security.UserOrgTree'),
            	Ext.create('power.view.security.UserList')
            ]
        });
        me.callParent(arguments);
    }
	
})