//用户列表
Ext.define('power.view.security.UserList',{
	id:'UserList',
	extend:'Ext.grid.Panel',
	alias: 'widget.UserList',
    title: '系统用户信息列表',
    frame : true,//面板渲染，使表格更加饱满
    layout:'vbox',
    border:false,
    region: 'center',
    columnLines: true,
    selModel:new Ext.selection.CheckboxModel({checkOnly:true}),
    stripeRows:true, //斑马线效果  
    forceFit:true,//列的自动填充  
    height:document.documentElement.clientHeight-120,
    initComponent:function(){
    	    var me = this;
    	    Ext.apply(me,{
    	    		margins : '1 0 0 1',
    	    		store:'security.UserListStore',
    	    		columns: [
			            { text: 'userId',  dataIndex: 'userId' ,hidden:true},
			            { text: '用户名',  dataIndex: 'userName' ,flex: 1},
			            { text: '出生日期',  dataIndex: 'userBirthDay' ,flex: 1},
			            { text: '联系电话',  dataIndex: 'userPhone' ,flex: 2},
			            { text: '邮箱',  dataIndex: 'userPhone' ,flex: 2},
			            { text: '状态',  dataIndex: 'status' ,flex: 1},
			            { text: '备注',  dataIndex: 'remark' ,flex: 2},
			            { text: '排序规则',  dataIndex: 'userOrder' ,flex: 1}
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
				        { xtype: 'button', text: '删除',iconCls:'del'},
				        { xtype: 'button', text: '分配角色',iconCls:'group_add'},
				        { xtype: 'button', text: '授权',iconCls:'key'}
				    ]
		   		}],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store:'security.UserListStore',
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
	
})
