//组织结构控制器
Ext.define('power.controller.security.OrgController',{
	  extend: 'Ext.app.Controller',
	  treegrid : Ext.create("power.util.datagrid"),
	  id:'OrgController',
	    views:
	[
		'security.OrgList',
		'security.OrgTree',
		'security.OrgManager',
		'security.AddOrg',
		'security.AddOrgWin'
	],
	 models:[
    	'security.OrgTreeModel'
    ],
	stores:
	[
		'security.OrgTreeStore',
		'security.OrgListStore'
	],
	 refs :
	 [
	 	{ref: 'OrgList', selector: 'OrgList'},
	 	{ref: 'OrgTree', selector: 'OrgTree'},
	 	{ref: 'AddOrgWin', selector: 'AddOrgWin'}
     ],
     init:function(){
		this.control({
			'OrgTree':{
				itemmousedown:this.selectTree
			},
			
			//通过列表方式新增组织机构
			'OrgList button[text=新增]':{
				  click:function(){
				  	  var url = '/power/addOrg';
					  this.treegrid.doAdd('power.view.security.AddOrgWin', url);
				  }
			},
			
			//通过列表方式修改组织机构
			'OrgList button[text=修改]':{
				click:function(){
					var grid = Ext.getCmp('OrgList');
					// 数据加载
					var url = '/power/modifyOrg';
					this.treegrid.doEdit('power.view.security.AddOrgWin', grid, url);
				}
			},
			
			//通过列表方式删除组织机构
			'OrgList button[text=删除]':{
				click:function(){
					var OrgList = Ext.getCmp('OrgList');
					var OrgTree = Ext.getCmp('OrgTree');
					// 数据加载
					var url = '/power/deleteOrg';
					var id = "orgId";
					this.treegrid.doDelete(OrgList,OrgTree, url, id);	
				}
			},
			
			//通过右键方式新增组织结构
			'AddOrg button[text=保存]': {
            	click : function(b) {
					var form = Ext.getCmp('addOrgForm').getForm();
					var treegrid1 = Ext.getCmp('OrgList');
					var treegrid2 = Ext.getCmp('OrgTree');
					var win = Ext.getCmp('AddOrgWin');
					this.treegrid.doSave2(treegrid1,treegrid2, form, win);
				}
            }
		})
     },
     selectTree:function(selModel,record){
     	var OrgListStore =  Ext.getCmp('OrgList').getStore();
     	id = record.get('orgCode');
		OrgListStore.load( {
			params : {
				start : 0,
				limit : 15,
				node : id
			}
		});
     }
     
})