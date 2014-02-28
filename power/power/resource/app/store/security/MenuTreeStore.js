Ext.define('power.store.security.MenuTreeStore', {
			extend : 'Ext.data.TreeStore',
			model : 'power.model.security.MenuTreeModel',
			proxy : {
				type : 'ajax',
				url : '/power/getAllMenuById',
				reader : {
					type : 'json',
					root : 'children',
					successProperty : 'success'
				}
			},
			autoLoad : true
		})