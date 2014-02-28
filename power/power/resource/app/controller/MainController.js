Ext.define('power.controller.MainController',{ 
    extend: 'Ext.app.Controller', 
     //加载模型
    models:[
    	'security.MenuModel',
    	'security.MenuTreeModel',
    	'security.IconModel'
    ],
    stores:
	[
		'security.MenuTreeStore',
		'security.MenuListStore'
	],
    //加载视图
	views:[
		'main.Header',
		'main.Navigation',
		'main.Main',
		'main.South',
		'common.TreePicker',  //树形下拉框
		'security.AddMenu',  //菜单编辑
		'security.AddMenuWin',
		'security.MenuList'//菜单管理
	],
    refs:[ 
        {ref: 'systemMenu',selector: 'systemMenu'}, 
        {ref: 'mainPanel',selector:'mainPanel'} 
    ], 
    init:function(){ 
        this.control({ 
            'Navigation': { 
                itemmousedown: this.loadMenu 
            } 
        }) 
    }, 
    loadMenu:function(selModel, record){ 
        if (record.get('leaf')) {  
            var panel = Ext.getCmp(record.get('id'));  
            if(!panel){  
                panel ={
                	icon:record.get('icon'),
                    title: record.get('text'), 
                    layout:'fit',
                    iconCls: 'tabs',  
                    collapsible: true,
                    closable : true,
					split: true,
                    items: [{
				        xtype:record.get('url')
				    }]
                } 
                this.openTab(panel,record.get('id')); 
            }else{ 
                var main = Ext.getCmp("mainPanel"); 
                main.setActiveTab(panel);  
            } 
        }  
    }, 
    openTab : function (panel,id){  
        var o = (typeof panel == "string" ? panel : id || panel.id); 
        var main = Ext.getCmp("mainPanel"); 
        var tab = main.getComponent(o);       
        if (tab) { 
            main.setActiveTab(tab);  
        } else if(typeof panel!="string"){  
            panel.id = o;  
            var p = main.add(panel);  
            main.setActiveTab(p);  
        }  
    } 

}) 

