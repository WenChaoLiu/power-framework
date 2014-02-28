
var treegrid =Ext.create("power.util.treegrid");
//组织机构数
Ext.define("power.view.security.OrgTree", {
        extend: "Ext.tree.Panel",
        alias : 'widget.OrgTree',
        id: 'OrgTree', 
        initComponent: function () {
            var me = this;
            Ext.apply(me, {
					margins : '1 0 -1 1',
					region:'west',
					title:'组织结构树',
					enableDD : false,
					split: true,
					width : 200,
					rootVisible: false,
					containerScroll : true,
					collapsible : true,
					autoScroll: false,
                    store: 'security.OrgTreeStore',
                    listeners: {
						    itemcontextmenu: function(view, record, item, index, e, options) {
						    	e.stopEvent();
						        Ext.create('Ext.menu.Menu', {
						        	plain:true,
						            margin: '0 0 10 0',
						            items: [{
						            	iconCls:'add',
						                text: '新增机构',
						                handler :function(){
						                	  var parentNo = record.data.orgCode;
						                	  //var parentName = record.data.orgName;
									    	  var url = '/power/addOrg';
											  treegrid.doAdd('power.view.security.AddOrgWin', url,parentNo,'parentNo');  
						                }
						            },{
						            	iconCls:'edit',
						                text: '修改机构',
						                handler:function(){
						                	var orgTree = Ext.getCmp('OrgTree');
											// 数据加载
											var url = '/power/modifyOrg';
											treegrid.doEdit('power.view.security.AddOrgWin', orgTree, url);
						                }
						                
						            },{
						            	iconCls:'del',
						                text: '删除机构',
						                handler:function(){
						                	var OrgTree = Ext.getCmp('OrgTree');
											var OrgList = Ext.getCmp('OrgList');
											// 数据加载
											var url = '/power/deleteOrg';
											var id = "orgId";
											treegrid.doDelete(OrgTree,OrgList, url, id);
						                }
						            }
						            ]
						        }).showAt(e.getXY());
						    }
						}
            });
            this.callParent(arguments);
        }
    });

