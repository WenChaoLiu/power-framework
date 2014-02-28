
//新增用户，修改用户表单
var status = Ext.create('Ext.data.Store', {
    fields: ['field', 'valuefield'],
    data : [
        {"field":"是", "valuefield":"1"},
        {"field":"否", "valuefield":"0"}
    ]
});

Ext.define('power.view.security.AddUser',{
	extend : 'Ext.form.Panel',
	alias : 'widget.AddUser',
	id : 'addUserForm',
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
						name: 'userId'
					},
					{ 
						xtype: 'textfield',
						name:'userName', 
						fieldLabel: '用户名' 
					},
					{ 
						xtype: 'treepicker',
						fieldLabel:'部门',
						margin : '100 0 0 150',
						name:'orgId',
						id:'orgId',
						valueField: 'parent',
						displayField : 'text',
						rootVisible : false,
						forceSelection : true,
						minPickerHeight : 150,
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
						inputType: 'password',
						name:'password',
						id:'password',
						fieldLabel:'密码:',
						regex:/^\d{6,16}$/,
		                hideTrigger:true,
		                xtype:'numberfield',
		                regexText:"密码6-16位之间,且只能为数字!"
					},
					{ 
						xtype: 'textfield',
						inputType: 'password',
						name:'confirm_password',
						fieldLabel:'确认密码:',
						regex:/^\d{6,16}$/,
		                hideTrigger:true,
		                xtype:'numberfield',
		                regexText:"密码6-16位之间,且只能为数字!",
		                vtype: 'repetition',  //指定repetition验证类型   
		                repetition: { targetCmpId: 'password' }  //配置repetition验证，提供目标组
					},
					{ 
						xtype: 'textfield',
						name:'userBirthDay', 
						id:'userBirthDay',
						fieldLabel: '出生日期' 
					},
					{ 
						xtype: 'textfield',
						name:'userPhone', 
						id:'userPhone',
						fieldLabel: '电话' 
					},
						{ 
						xtype: 'textfield',
						name:'userEmail', 
						id:'userEmail',
						fieldLabel: '邮箱' 
					},
					{ 
						xtype: 'combobox',
						name:'status', 
						fieldLabel:'是否启用',
						store:status,
						displayField: 'field',
						valueField: 'valuefield'
					},
					{ 
						height: 50,
						xtype: 'textareafield',
						name:'remark', 
						fieldLabel:'备注'
					},
					{ 
						xtype: 'textfield',
						name:'userOrder',
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