//新增菜单，修改菜单表单
var states = Ext.create('Ext.data.Store', {
    fields: ['field', 'valuefield'],
    data : [
        {"field":"可用", "valuefield":"1"},
        {"field":"不可用", "valuefield":"0"}
        //...
    ]
});

Ext.define('power.view.security.AddMenu', {
	extend : 'Ext.form.Panel',
	alias : 'widget.AddMenu',
	id : 'addMenuForm',
	border : true,
	layout : 'form',
    method : 'POST',  
	bodyStyle:'text-align:right;',
	bodyPadding:'0 40 0 0',
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
					items : [
							{
						        xtype: 'hiddenfield',
						        name: 'menuId'
   							 },
							{
								xtype : 'textfield',
								fieldLabel : '菜单名称:',
								name : 'menuName',
								allowBlank : false,
								blankText : "菜单名称不能为空"
							}, {
								xtype : 'textfield',
								fieldLabel : '菜单编号:',
								name : 'menuNo',
								allowBlank : false,
								blankText : "菜单编号不能为空"
							}, {
								xtype : 'treepicker',
								fieldLabel : '上级菜单',
								margin : '100 0 0 150',
								name:'menuParentNo',
								valueField: 'parent',
								displayField : 'text',
								rootVisible : false,
								forceSelection : true,
								minPickerHeight : 200,
								store : Ext.create('Ext.data.TreeStore', {
											model : 'power.model.security.MenuTreeModel',
											root : {
												text : '系统菜单',
												expanded : true
											},
											proxy : {
												type : 'ajax',
												url : '/power/getAllMenuById',
												reader : {
													type : 'json'
												}
											}
										})
							}, {
								xtype : 'textfield',
								fieldLabel : '菜单排序',
								name : 'menuOrder',
								allowBlank : false,
								blankText : "菜单排序不能为空"
							}, {
								xtype : 'textfield',
								fieldLabel : '请求地址',
								name : 'menuUrl',
								allowBlank : false,
								blankText : "请求地址不能为空"
							}, {
								xtype : 'combobox',
								fieldLabel : '菜单图标:',
								name : 'menuIcon',
								allowBlank : false,
								blankText : "菜单图标:不能为空",
        						queryMode: 'local',
        						displayField: 'url',
        						id:'menuIcon',
								store:new Ext.data.Store(
									{
										autoLoad:true,
										model:'power.model.security.IconModel',
										valueField:'url', 
										proxy:new Ext.data.HttpProxy({
											url:'/power/getSysIcon',
											reader:new Ext.data.reader.Json({
												root:'children'
											})
										})
									}),
									tpl:'<table><tr><tpl for="."><td class="x-combo-list-item"><img style="cursor:hand" onclick=Ext.getCmp("menuIcon").setValue(this.id) width=16 height=16 id="{url}" src="resource/images/{url}" /></td><tpl if="xindex % 10 === 0"></tr><tr></tpl></tpl></tr></table>'
							}, {
								xtype : 'combobox',
								fieldLabel : '是否可用:',
								store: states,
								displayField: 'field',
    							valueField: 'valuefield',
								name : 'isVisible'
							}, {
								xtype : 'combobox',
								fieldLabel : '是否子菜单:',
								store: states,
								displayField: 'field',
    							valueField: 'valuefield',
								name : 'isLeaf'
							}],
					buttons : [{
								text : '重置',
								iconCls : 'reset',
								id:'reset',
								name:'reset',
								handler : function() {
									this.up('form').getForm().reset();
								}
							}, {
								text : '保存',
								iconCls : 'save',
								formBind : true, // only enabled once the
													// form is valid
							    id:'save',
							    name:'save',
								disabled : true
							}]
				});
		me.callParent(arguments);
	}

});
