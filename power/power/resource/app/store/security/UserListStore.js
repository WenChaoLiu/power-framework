//机构用户列表Store
Ext.define('power.store.security.UserListStore',{
	extend : 'Ext.data.Store',
			id:'UserListStore',
			pageSize: 15,
			model : 'power.model.security.UserModel',
			proxy :new Ext.data.HttpProxy( {
				type : 'ajax',
				url : '/power/getAllUserByOrg',
				reader : {
					type : 'json',
					root : 'children'
				}
			}),
			autoLoad : true
})