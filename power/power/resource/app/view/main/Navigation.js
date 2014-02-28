Ext.define("power.view.main.Navigation", {
        extend: "Ext.tree.Panel",
        alias : 'widget.Navigation',
        id: 'SystemMenu', 
        requires: ['power.store.security.MenuTreeStore'], 
        initComponent: function () {
            var me = this;
            Ext.apply(me, {
		           	iconCls:'icon-menu',
					margins : '0 0 -1 1',
					region:'west',
					title:'系统管理',
					enableDD : false,
					split: true,
					width : 200,
					rootVisible: false,
					containerScroll : true,
					collapsible : true,
					autoScroll: false,
                    store: Ext.create('power.store.security.MenuTreeStore')
            });
            this.callParent(arguments);
        }
    });
