//组织机构树模型
Ext.define('power.model.security.OrgTreeModel',{
	extend : 'Ext.data.TreeModel',
	fields: [
        {name: 'id',   type: 'string',mapping: 'orgCode'},
        {name: 'parent', type: 'string',mapping: 'parentNo'},
        {name: 'orgCode',   type: 'string',mapping: 'orgCode'},
        {name: 'orgNum',   type: 'string',mapping: 'orgNum'},
        {name: 'text',  type: 'string',mapping: 'orgName'},
        {name: 'orgRemark',  type: 'string',mapping: 'orgRemark'},
        {name: 'orgOrder', type: 'string',mapping: 'orgOrder'},
        {name: 'leaf', type: 'boolean',mapping: 'isLeaf'},
        
        {name: 'orgId',  type: 'string',mapping: 'orgId'},
        {name: 'orgName',  type: 'string',mapping: 'orgName'},
        {name: 'parentNo',  type: 'string',mapping: 'parentNo'},
        {name: 'isLeaf',  type: 'string',mapping: 'isLeaf'}
    ]
});
