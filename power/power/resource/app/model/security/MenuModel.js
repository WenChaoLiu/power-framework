//菜单列表模型
Ext.define('power.model.security.MenuModel',{
	extend : 'Ext.data.Model',
	fields: [
        {name: 'menuName',  type: 'string',mapping: 'text'},
        {name: 'menuNo',   type: 'string',mapping: 'menuNo'},
        {name: 'menuId',   type: 'string',mapping: 'id'},
        {name: 'menuParentNo', type: 'string',mapping: 'parent'},
        {name: 'menuIcon', type: 'string',mapping: 'icon'},
        {name: 'isLeaf', type: 'string',mapping: 'leaf'},
        {name: 'menuOrder', type: 'string',mapping: 'menuOrder'},
        {name: 'menuUrl', type: 'string',mapping: 'url'},
        {name: 'isVisible', type: 'string',mapping: 'isVisible'}
    ]
});