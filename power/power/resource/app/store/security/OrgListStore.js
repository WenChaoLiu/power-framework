//组织机构列表Store
Ext.define('power.store.security.OrgListStore',{
	extend : 'Ext.data.Store',
			id:'OrgListStore',
			pageSize: 15,
			model : 'power.model.security.OrgModel',
			proxy :new Ext.data.HttpProxy( {
				type : 'ajax',
				url : '/power/getAllOrgByParentNo',
				reader : {
					type : 'json',
					root : 'children'
				}
			}),
			autoLoad : true
})