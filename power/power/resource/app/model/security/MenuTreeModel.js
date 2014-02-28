//菜单树模型
Ext.define('power.model.security.MenuTreeModel',{
	extend : 'Ext.data.TreeModel',
	fields: [
		{name: 'menuNo',   type: 'string',mapping: 'menuNo'},
        {name: 'text',  type: 'string',mapping: 'text'},
        {name: 'id',   type: 'string',mapping: 'id'},
        {name: 'parent', type: 'string',mapping: 'parent'},
        {name: 'icon', type: 'string',mapping: 'icon'},
        {name: 'leaf', type: 'boolean',mapping: 'leaf'},
        {name: 'menuOrder', type: 'string',mapping: 'menuOrder'},
        {name: 'url', type: 'string',mapping: 'url'},
        {name: 'isVisible', type: 'string',mapping: 'isVisible'}
    ]
});