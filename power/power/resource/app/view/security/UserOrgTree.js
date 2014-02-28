
var treegrid =Ext.create("power.util.treegrid");
//组织机构数
Ext.define("power.view.security.UserOrgTree", {
        extend: "Ext.tree.Panel",
        alias : 'widget.UserOrgTree',
        id: 'UserOrgTree', 
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
						                text: '新增用户',
						                handler :function(){
						                	  var parentNo = record.data.orgCode;
						                	  //var parentName = record.data.orgName;
									    	  var url = '/power/addUser';
											  treegrid.doAdd('power.view.security.AddUserWin', url,parentNo,'orgId');  
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

