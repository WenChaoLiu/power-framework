//新增菜单，修改菜单窗口
Ext.define("power.view.security.AddMenuWin", {
        extend: "Ext.window.Window",
        alias : 'widget.AddMenuWin',
        id:'AddMenuWin',
        title:'添加菜单',
		labelAlign:'text-align:right',
		icon:'resource/images/add.png',
		height: 280,
		width: 380,
		modal:true,
        initComponent: function () {
            var me = this;
            Ext.apply(me, {
            	items:[
            			{xtype:'AddMenu'}
            		  ]
            });
            this.callParent(arguments);
        }
    });
