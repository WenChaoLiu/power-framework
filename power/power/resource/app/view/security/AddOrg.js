//新增组织机构，修改组织机构表单
var leaf = Ext.create('Ext.data.Store', {
    fields: ['field', 'valuefield'],
    data : [
        {"field":"是", "valuefield":"1"},
        {"field":"否", "valuefield":"0"}
        //...
    ]
});
Ext.define('power.view.security.AddOrg',{
	extend : 'Ext.form.Panel',
	alias : 'widget.AddOrg',
	id : 'addOrgForm',
	border : true,
	layout : 'form',
    method : 'POST',  
	bodyStyle:'text-align:right;',
	bodyPadding:'0 40 0 0',
	initComponent:function(){
		var me = this;
			Ext.applyIf(me,{
				items:[
					{ 
						xtype: 'hiddenfield', 
						name: 'orgId'
					},
					{ 
						xtype: 'textfield',
						name:'orgName', 
						id:'orgName',
						fieldLabel: '机构名称' 
					},
					{ 
						xtype: 'treepicker',
						fieldLabel:'上级机构',
						margin : '100 0 0 150',
						name:'parentNo',
						id:'parentNo',
						valueField: 'parent',
						displayField : 'text',
						rootVisible : false,
						forceSelection : true,
						minPickerHeight : 200,
						store : 
							Ext.create('Ext.data.TreeStore', {
								model : 'power.model.security.OrgTreeModel',
								queryMode: 'remote',
								nodeParam:'parentNo',
								root : {
									text : '组织机构',
									expanded : true
								},
								proxy : {
									type : 'ajax',
									url : '/power/getAllOrgById',
									reader : {
										type : 'json'
									}
								}
							})
						
					},
					{ 
						xtype: 'textfield',
						name:'orgCode',
						fieldLabel:'机构代码'
					},
					{ 
						xtype: 'textfield',
						name:'orgNum', 
						fieldLabel:'机构编号'
					},
					{ 
						xtype: 'combobox',
						name:'isLeaf', 
						fieldLabel:'是否叶子机构',
						store:leaf,
						displayField: 'field',
						valueField: 'valuefield'
					},
					{ 
						xtype: 'textfield',
						name:'orgRemark',
						fieldLabel:'备注'
					},
					{ 
						xtype: 'textfield',
						name:'orgOrder',
						fieldLabel:'排序规则'
					}
				],
				buttons: [
					{
						text : '重置',
						iconCls : 'reset',
						name:'reset',
						handler : function() {
							this.up('form').getForm().reset();
						}
					},
					{
						text : '保存',
						iconCls : 'save',
						formBind : true, // only enabled once the
											// form is valid
					    name:'save',
						disabled : true
					}
				 ]
			});
			me.callParent(arguments);
	
	}
})