Ext.define('power.store.security.OrgTreeStore', {
			extend : 'Ext.data.TreeStore',
			model : 'power.model.security.OrgTreeModel',
			proxy : {
				type : 'ajax',
				url : '/power/getAllOrgById',
				reader : {
					type : 'json',
					root : 'children',
					successProperty : 'success'
				}
			},
			autoLoad : true
		})
