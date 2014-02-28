Ext.define('power.view.main.South',{ 
    extend: 'Ext.Toolbar', 
    alias: 'widget.South',
    border:false,
    initComponent : function(){ 
        Ext.apply(this,{ 
            id:"bottom", 
            region:"south", 
            height:23, 
            items:["当前用户：Administrator",'->',"技术支持:<font color='#0000FF'>WenChao_Liu@163.com</font></a>&nbsp;&nbsp;"] 
        }); 
        this.callParent(arguments); 
    } 
}) 
