//组织机构列表模型
Ext.define('power.model.security.OrgModel',{
	extend : 'Ext.data.Model',
	fields: [
        {name: 'orgCode',  type: 'string',mapping: 'orgCode'},
        {name: 'orgId',  type: 'string',mapping: 'orgId'},
        {name: 'orgName',  type: 'string',mapping: 'orgName'},
        {name: 'orgNum',  type: 'string',mapping: 'orgNum'},
        {name: 'orgOrder',  type: 'string',mapping: 'orgOrder'},
        {name: 'orgRemark',  type: 'string',mapping: 'orgRemark'},
        {name: 'parentNo',  type: 'string',mapping: 'parentNo'},
        {name: 'isLeaf',  type: 'string',mapping: 'isLeaf'}
    ]
});