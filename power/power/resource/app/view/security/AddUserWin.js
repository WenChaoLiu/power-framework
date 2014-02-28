//新增组织机构，修改组织机构窗口
Ext.define("power.view.security.AddUserWin", {
        extend: "Ext.window.Window",
        alias : 'widget.AddUserWin',
        id:'AddUserWin',
        title:'添加用户',
		labelAlign:'text-align:right',
		icon:'resource/images/add.png',
		height: 320,
		width: 380,
		modal:true,
        initComponent: function () {
            var me = this;
            Ext.apply(me, {
            	items:[
            			{xtype:'AddUser'}
            		  ]
            });
            this.callParent(arguments);
        }
    });
