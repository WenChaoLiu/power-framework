Ext.define("power.util.datagrid", {
	// 初始化窗口
	doAdd : function(win, url) {
		var w = Ext.create(win);
		w.down('form').getForm().url = url;
		if (w) {
			w.show();
		}
	},
	// 表单加载数据
	doEdit : function(win, datagrid, url) {
		if (!datagrid) {
			alert("非datagrid，不能执行操作!");
			return;
		}
		// 得到数据集合
		var store = datagrid.getStore();
		var records = datagrid.getSelectionModel().getSelection();
		if (records.length > 1) {
			alert('只能选择一条数据!');
			return;
		}
		if (records.length < 1) {
			alert('请选择数据行!');
			return;
		}
		var w = Ext.create(win);
		w.down('form').getForm().loadRecord(records[0]);
		w.down('form').getForm().url = url;
		w.show();

	},
	// 数据查询
	doSearch : function(datagrid, form) {
		if (!datagrid) {
			alert("非datagrid，不能执行操作!");
			return;
		}
		datagrid.getStore().addListener({
			beforeload : function(store, records, options) {
				Ext.apply(store.proxy.extraParams, form.getValues());
			}
		});
		datagrid.getStore().load();

	},
	doClearSearch : function(datagrid, form) {
		if (!datagrid) {
			alert("非datagrid，不能执行操作!");
			return;
		}
		form.reset();
		datagrid.getStore().addListener({
			beforeload : function(store, records, options) {
				Ext.apply(store.proxy.extraParams, form.getValues());
			}
		});
		datagrid.getStore().load();
	},
	// 数据保存
	
	doSave1 : function(datagrid,form,win) {
		if (!datagrid) {
			alert("非datagrid，不能执行操作!");
			return;
		}
		if (form.isValid()) {
			form.submit({
				url : form.url,
				waitMsg : '请稍后',
				waitTitle : '正在验证登录',
				success : function(form, action) {
					datagrid.getStore().loadPage(1);
					Ext.MessageBox.alert("提示", "数据操作成功!");
					win.close();
				},
				failure : function(form, action) {
					win.close();
					datagrid.getStore().loadPage(1);
				//	Ext.MessageBox.alert("提示", "数据操作失败!");
					if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                        Ext.Msg.alert('Error',
                            'Status:'+action.response.status+': '+
                            action.response.statusText);
                    }
                    if (action.failureType === Ext.form.action.Action.SERVER_INVALID){
                        // server responded with success = false
                        Ext.Msg.alert('Invalid', action.result.errormsg);
                    }
				}
			});
		}
	},
	
	doSave2 : function(datagrid1,datagrid2,form,win) {
		if (!datagrid1) {
			alert("非datagrid，不能执行操作!");
			return;
		}
		if (form.isValid()) {
			form.submit({
				url : form.url,
				waitMsg : '请稍后',
				method : 'POST',
				waitTitle : '正在验证登录',
				success : function(form, action) {
					datagrid1.getStore().loadPage(1);
					datagrid2.getStore().load();
					Ext.MessageBox.alert("提示", "数据操作成功!");
					win.close();
				},
				failure : function(form, action) {
					win.close();
					datagrid1.getStore().loadPage(1);
					Ext.MessageBox.alert("提示", "数据操作失败!");
				}
			});
		}
	},
	
	
	// 数据删除
	doDelete : function(datagrid, url, id) {
		if (!datagrid) {
			alert("非datagrid，不能执行操作!");
			return;
		}
		// 得到数据集合
		var store = datagrid.getStore();
		var records = datagrid.getSelectionModel().getSelection();
		var data = [];
		Ext.Array.each(records, function(model) {
			data.push(model.get(id));
		});
		if (data.length > 0) {
			var el = datagrid.getEl();
			el.mask("正在公布中……");
			Ext.Ajax.request({
				url : url,
				params : {
					ids : data.join(",")
				},
				method : 'POST',
				timeout : 4000,
				success : function(form, action) {
					datagrid.getStore().loadPage(1);
					Ext.MessageBox.alert("提示", "数据操作成功!");
					el.unmask();
				},
				failure : function(form, action) {
					datagrid.getStore().loadPage(1);
					Ext.MessageBox.alert("提示", "数据操作失败!");
					el.unmask();
				}
			});
		}
	},
	// 数据删除
	doDelete : function(datagrid1,datagrid2, url, id) {
		if (!datagrid1) {
			alert("非datagrid，不能执行操作!");
			return;
		}
		// 得到数据集合
		var store = datagrid1.getStore();
		var records = datagrid1.getSelectionModel().getSelection();
		var data = [];
		Ext.Array.each(records, function(model) {
			data.push(model.get(id));
		});
		if (data.length > 0) {
			var el = datagrid1.getEl();
			el.mask("正在公布中……");
			Ext.Ajax.request({
				url : url,
				params : {
					ids : data.join(",")
				},
				method : 'POST',
				timeout : 4000,
				success : function(form, action) {
					datagrid1.getStore().loadPage(1);
					datagrid2.getStore().load();
					Ext.MessageBox.alert("提示", "数据操作成功!");
					el.unmask();
				},
				failure : function(form, action) {
					datagrid1.getStore().loadPage(1);
					Ext.MessageBox.alert("提示", "数据操作失败!");
					el.unmask();
				}
			});
		}
	}
});
