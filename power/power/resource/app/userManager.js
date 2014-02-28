Ext.require([
    'Ext.form.*',
    'Ext.layout.container.Absolute',
    'Ext.window.Window'
]);

Ext.onReady(function() {
    var form = Ext.create('Ext.form.Panel', {
        layout: 'absolute',
        url: '/addUser',
        defaultType: 'textfield',
        border: false,
        id:'loginForm',

        items: [{
            fieldLabel: '用户名',
            fieldWidth: 60,
            msgTarget: 'side',
            allowBlank: false,
            x: 5,
            y: 5,
            name: 'UserName',
            blankText : '帐号不能为空,请输入!',
			maxLength : 30,
			maxLengthText : '账号的最大长度为30个字符',
			allowBlank : false,
            anchor: '-5'  // anchor width by percentage
        }, {
            fieldLabel: '用户年龄',
            fieldWidth: 60,
            x: 5,
            y: 35,
            name: 'UserAge',
            anchor: '-5'  // anchor width by percentage
        }]
    });

    var win = Ext.create('Ext.window.Window', {
        autoShow: true,
        title: '用户注册',
        width: 500,
        height: 300,
        minWidth: 300,
        minHeight: 200,
        layout: 'fit',
        plain:true,
        items: form,
        buttons: [{
            text: '添加',
            handler:function(){
            	addUser();
            }
        },{
            text: '取消'
        }]
    });
    
    function addUser(){
    	if (Ext.getCmp('loginForm').form.isValid()) {
			Ext.getCmp('loginForm').form.submit({
				url : '/power/security/addUser',
				waitTitle : '提示',
				method : 'POST',
				waitMsg : '正在验证您的身份,请稍候.....',
				success : function(form, action) {
				},
				failure : function(form, action) {
				}
			});
    	}
    }
});