Ext.define('power.view.main.Header', {
	extend : 'Ext.panel.Panel',
	alias: 'widget.Header',
	height : 30,
	html : '基础权限管理平台',
	region : 'north',
	split : true,
	layout:'fit',
	border : false,
	bodyStyle : 'background-color:#D6E3F3;line-height :30px;padding-left:50px;' +
			'font-size:16px;color:#000000;font-family:黑体;font-weight:bolder;',
	initComponent : function(){
		this.callParent();
	}
});

