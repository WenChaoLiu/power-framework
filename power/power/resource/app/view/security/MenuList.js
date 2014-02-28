var MenuListStore = Ext.create('power.store.security.MenuListStore');
//菜单列表
Ext.define('power.view.security.MenuList',{
	id:'MenuList',
	extend:'Ext.grid.Panel',
	alias : 'widget.MenuList',
	title : '系统菜单资源',//标题
	frame : true,//面板渲染，使表格更加饱满
	requires: ['power.store.security.MenuListStore'], 
	viewConfig: { 
            stripeRows: true 
    },
    layout:'vbox',
    border:false,
    columnLines: true,
    selModel:new Ext.selection.CheckboxModel({checkOnly:true}),
    stripeRows:true, //斑马线效果  
    forceFit:true,//列的自动填充  
    height:document.documentElement.clientHeight-120,
    store:MenuListStore,
    tbar: [{
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
	columns: [
		new Ext.grid.RowNumberer(),
		{ text: 'menuId',  dataIndex: 'menuId',hidden:true},
        { text: '菜单名称',  dataIndex: 'menuName' ,flex: 2},
         { text: '菜单编号',  dataIndex: 'menuNo' ,flex: 1},
        { text: '父节点', dataIndex: 'menuParentNo',flex: 1},
        { text: '菜单图标', dataIndex: 'menuIcon' ,flex: 1,
        	 renderer:function(value){
        	 return "<img src='resource/images/"+value+"'/>";  
        }},
        { text: '是否子节点',  dataIndex: 'isLeaf' ,flex: 1,
        	renderer:function(value){
        		return value==1?"是":"否";
        	}
        },
        { text: '排序规则', dataIndex: 'menuOrder',flex: 1},
        { text: '请求地址', dataIndex: 'menuUrl',flex: 1},
        { text: '是否隐藏',  dataIndex: 'isVisible',flex: 1,
        	renderer:function(value){
        		return value==1?"是":"否";
        	}
        }
    ],
     dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    store: MenuListStore, 
                    dock: 'bottom', //分页 位置
                    emptyMsg: '没有数据',
                    displayInfo: true,
                    displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
                    beforePageText: '第',
                    afterPageText: '页/共{0}页'

                }]
});
MenuListStore.load({ params: { start: 0, limit: 15} });

//按钮处理事件
function doHander(item){
	if(item.id=='add'){
		var addMenu =  Ext.create('Ext.window.Window',{
			title:'添加菜单',
			labelAlign:'text-align:right',
			icon:'resource/images/add.png',
			height: 280,
   			width: 380,
   			modal:true,
	        items:[{
	        	xtype:'AddMenu'
	        }]
		});
		addMenu.show();
	}
}