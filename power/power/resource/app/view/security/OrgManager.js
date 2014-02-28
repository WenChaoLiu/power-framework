//菜单管理
Ext.define('power.view.security.OrgManager', {
	id:'OrgManager',
    extend: 'Ext.panel.Panel',
    alias : 'widget.OrgManager',
    requires: [
        'power.view.security.OrgTree',
        'power.view.security.OrgList'
    ],
    layout : 'border',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                	Ext.create('power.view.security.OrgTree'), 
                    Ext.create('power.view.security.OrgList')
            ]
        });
        me.callParent(arguments);
    }

});