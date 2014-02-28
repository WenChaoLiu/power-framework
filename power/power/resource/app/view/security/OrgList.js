//组织机构列表
Ext.define('power.view.security.OrgList', {
	id:'OrgList',
    extend: 'Ext.grid.Panel',
    alias: 'widget.OrgList',
    title: '组织结构信息列表',
    frame : true,//面板渲染，使表格更加饱满
    layout:'vbox',
    border:false,
    region: 'center',
    columnLines: true,
    selModel:new Ext.selection.CheckboxModel({checkOnly:true}),
    stripeRows:true, //斑马线效果  
    forceFit:true,//列的自动填充  
    height:document.documentElement.clientHeight-120,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	margins : '1 0 0 1',
        	store:'security.OrgListStore',
            columns: [
            { text: 'orgId',  dataIndex: 'orgId' ,hidden:true},
            { text: '组织机构名称',  dataIndex: 'orgName' ,flex: 2},
            { text: '组织机构编号',  dataIndex: 'orgNum' ,flex: 1},
            { text: '组织机构代码',  dataIndex: 'orgCode' ,flex: 2},
            { text: '上级组织机构编号',  dataIndex: 'parentNo' ,flex: 2},
            { text: '排序规则',  dataIndex: 'orgOrder' ,flex: 1},
            { text: '备注',  dataIndex: 'orgRemark' ,flex: 2}
            ],
            tbar: [
            	{
				    xtype: 'toolbar',
				    dock: 'bottom',
				    titleAlign:'center',
				    border:false,
				    items: [
				        { xtype: 'button', text: '新增',iconCls:'add'},
				        { xtype: 'button', text: '修改',iconCls:'edit' },
				        { xtype: 'button', text: '删除',iconCls:'del'}
				    ]
		   		}],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store:'security.OrgListStore',
                    dock: 'bottom', //分页 位置
                    emptyMsg: '没有数据',
                    displayInfo: true,
                    displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
                    beforePageText: '第',
                    afterPageText: '页/共{0}页'

                }]
        });
        me.callParent(arguments);
    }
});
