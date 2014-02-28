Ext.define('power.store.security.MenuListStore', {
			extend : 'Ext.data.Store',
			id:'MenuListStore',
			pageSize: 15,
			model : 'power.model.security.MenuModel',
			proxy :new Ext.data.HttpProxy( {
				type : 'ajax',
				url : '/power/getAllMenu',
				reader : {
					type : 'json',
					root : 'children'
				}
			}),
			autoLoad : true
		})
