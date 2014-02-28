Ext.define('power.controller.security.MenuController', {
    extend: 'Ext.app.Controller',
    treegrid : Ext.create("power.util.datagrid"),
    views:
	[
		'security.MenuList',
		'security.AddMenu'  //菜单编辑
	],
	stores:
	[
		'security.MenuTreeStore',
		'security.MenuListStore'
	],
	 refs :
	 [
	 	{ref: 'MenuList', selector: 'MenuList'},
	 	{ref: 'AddMenuWin', selector: 'AddMenuWin'}
     ],
    init: function() {
    	this.getTreeObj = function(buttion) {
			return buttion.ownerCt.ownerCt;
		};
        this.control({
        	//新增菜单
        	'MenuList button[text=新增]' : {
				click : function(b) {
					var url = '/power/addMenu';
					this.treegrid.doAdd('power.view.security.AddMenuWin', url);
				}
			},
			//修改菜单信息
			'MenuList button[text=修改]' : {
				click : function(b) {
					var grid = Ext.getCmp('MenuList');
					// 数据加载
					var url = '/power/modifyMenu';
					this.treegrid.doEdit('power.view.security.AddMenuWin', grid, url);
				}
			},
			//删除菜单
			'MenuList button[text=删除]' : {
				click : function(b) {
					var grid = Ext.getCmp('MenuList');
					var treegrid2 = Ext.getCmp('SystemMenu');
					// 数据加载
					var url = '/power/deleteMenu';
					var id = "menuId";
					this.treegrid.doDelete(grid,treegrid2, url, id);
				}
			},
            'AddMenu button[id=save]': {
            	click : function(b) {
					var form = Ext.getCmp('addMenuForm').getForm();
					var treegrid1 = Ext.getCmp('MenuList');
					var treegrid2 = Ext.getCmp('SystemMenu');
					var win = Ext.getCmp('AddMenuWin');
					
					this.treegrid.doSave2(treegrid1,treegrid2, form, win);
				}
            }
            
            
        });
    }
});
