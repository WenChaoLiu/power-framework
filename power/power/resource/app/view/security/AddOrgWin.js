//新增组织机构，修改组织机构窗口
Ext.define("power.view.security.AddOrgWin", {
        extend: "Ext.window.Window",
        alias : 'widget.AddOrgWin',
        id:'AddOrgWin',
        title:'添加组织机构',
		labelAlign:'text-align:right',
		icon:'resource/images/add.png',
		height: 245,
		width: 380,
		modal:true,
        initComponent: function () {
            var me = this;
            Ext.apply(me, {
            	items:[
            			{xtype:'AddOrg'}
            		  ]
            });
            this.callParent(arguments);
        }
    });
