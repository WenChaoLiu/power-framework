Ext.define("power.view.main.Main", {
	extend: 'Ext.tab.Panel',
	alias : 'widget.main',
	border: false,
	initComponent: function () {
	    var me = this;
	    Ext.apply(me, {
	        id: "mainPanel",
	        region: 'center',
       		defaults: { 
               autoScroll:true,
               bodyPadding:1
            }, 
	        activeTab: 0,
	        items: [{
	        			icon:'resource/images/house.png',
						iconCls : 'icon-activity',
						title : '平台首页',
						layout : 'column',
						border : false,
						items : [{
									columnWidth : 0.5,
									items : [{
												border : false,
												title : '新闻动态',
												height : 150,
												iconCls : 'icon-news'
											}, {
												border : false,
												title : '最新通知',
												height : 150,
												iconCls : 'icon-notice'
											}, {
												border : false,
												title : '业绩报表',
												height : 150,
												iconCls : 'icon-chart'
											}, {
												border : false,
												title : '邮件列表',
												height : 150,
												iconCls : 'icon-email-list'
											}]
								}, {
									columnWidth : 0.5,
									items : [{
												border : false,
												title : '功能链接',
												height : 150,
												iconCls : 'icon-link'
											}, {
												border : false,
												title : '待办事项',
												height : 150,
												iconCls : 'icon-note'
											}, {
												border : false,
												title : '邮件列表',
												height : 150,
												iconCls : 'icon-email-list'
											}, {
												border : false,
												title : '邮件列表',
												height : 150,
												iconCls : 'icon-email-list'
											}]
								}]
					}]
	        });
	        me.callParent(arguments);
	    }
});
