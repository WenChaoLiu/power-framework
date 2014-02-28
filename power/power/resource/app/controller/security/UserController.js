Ext.define('power.controller.security.UserController',{
	extend:'Ext.app.Controller',
	treegrid : Ext.create("power.util.datagrid"),
	id:'UserController',
    views:
	[
		'security.UserList',
		'security.UserOrgTree',
		'security.UserManager',
		'security.AddUser',
		'security.AddUserWin'
	],
	 models:[
    	'security.OrgTreeModel'
    ],
    stores:
	[
		'security.OrgTreeStore',
		'security.UserListStore'
	],
	 refs :
	 [
	 	{ref: 'UserList', selector: 'UserList'},
	 	{ref: 'UserOrgTree', selector: 'UserOrgTree'},
	 	{ref: 'AddUserWin', selector: 'AddUserWin'}
     ],
    init:function(){
    	this.control({
    		//菜单节点时间
    		'UserOrgTree':{
    			itemmousedown:this.selectTree
    		},
			'UserList button[text=新增]':{
					click:function(){
						  var url = '/power/addUser';
					      this.treegrid.doAdd('power.view.security.AddUserWin', url);
					}			
			},
			'AddUser button[text=保存]': {
            	click : function(b) {
					var form = Ext.getCmp('addUserForm').getForm();
					var treegrid1 = Ext.getCmp('UserList');
					var win = Ext.getCmp('AddUserWin');
					this.treegrid.doSave1(treegrid1,form,win);
				}
            }
            
            
		})
    },
    selectTree:function(selModel,record){
     	var UserListStore =  Ext.getCmp('UserList').getStore();
     	id = record.get('orgCode');
		UserListStore.load( {
			params : {
				start : 0,
				limit : 15,
				node : id
			}
		});
     }
})