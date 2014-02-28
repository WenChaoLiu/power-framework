Ext.define("power.util.treegrid", {
	// 初始化窗口
	doAdd : function(win, url) {
		var w = Ext.create(win);
		w.url = url;
		if (w) {
			w.show();
		}
	},
	//parameterValue控件初始值
	//parameter控件名称
	doAdd : function(win, url,parameterValue,parameter) {
		//var twoStore  = Ext.getCmp(parameter).getStore();
		var w = Ext.create(win);
		w.down('form').getForm().url = url;
		if (w) {
			var twoStore = w.down('form').getComponent(parameter).getStore();
			twoStore .on('load', function (){
			    w.down('form').getComponent(parameter).setValue(parameterValue);    
			});
			w.show();
		}
	},
	// 表单加载数据
	doEdit : function(win, treegrid, url) {
		if (!treegrid) {
			alert("非treegrid，不能执行操作!");
			return;
		}
		var records = treegrid.getSelectionModel().getSelection();
		if (records.length > 1) {
			alert('只能选择一条数据!');
			return;
		}
		if (records.length < 1) {
			alert('只能选择一条数据!');
			return;
		}
		var w = Ext.create(win);
		w.down('form').getForm().loadRecord(records[0]);
		w.down('form').getForm().url = url;
		w.show();

	},
	// 数据查询
	doSearch : function(treegrid, form) {
		if (!treegrid) {
			alert("非treegrid，不能执行操作!");
			return;
		}
		treegrid.getStore().addListener({
			beforeload : function(store, records, options) {
				Ext.apply(store.proxy.extraParams, form.getValues());
			}
		});
		treegrid.getStore().load();

	},
	doClearSearch : function(treegrid, form) {
		if (!treegrid) {
			alert("非treegrid，不能执行操作!");
			return;
		}
		form.reset();
		treegrid.getStore().addListener({
			beforeload : function(store, records, options) {
				Ext.apply(store.proxy.extraParams, form.getValues());
			}
		});
		treegrid.getStore().load();
	},
	// 数据保存
	doSave : function(treegrid, form, win) {
		if (!treegrid) {
			alert("非treegrid，不能执行操作!");
			return;
		}
		if (form.isValid()) {
			form.submit({
				url : form.url,
				waitMsg : '请稍后',
				waitTitle : '正在验证输入',
				success : function(form, action) {
					win.close();
					treegrid.getStore().load();
					Ext.MessageBox.alert("提示", "数据操作成功!");
				},
				failure : function(form, action) {
					win.close();
					treegrid.getStore().load();
					Ext.MessageBox.alert("提示", "数据操作失败!");
				}
			});
		}
	},
	// 数据删除
	doDelete : function(treegrid, url, id) {
		if (!treegrid) {
			alert("非treegrid，不能执行操作!");
			return;
		}
		// 得到数据集合
		var store = treegrid.getStore();
		var records = treegrid.getSelectionModel().getSelection();
		var data = [];
		Ext.Array.each(records, function(model) {
			data.push(model.get(id));
		});
		if (data.length > 0) {
			var el = treegrid.getEl();
			el.mask("正在公布中……");
			Ext.Ajax.request({
				url : url,
				params : {
					ids : data.join(",")
				},
				method : 'POST',
				timeout : 4000,
				success : function(form, action) {
					treegrid.getStore().load();
					Ext.MessageBox.alert("提示", "数据操作成功!");
					el.unmask();
				},
				failure : function(form, action) {
					treegrid.getStore().loadPage(1);
					Ext.MessageBox.alert("提示", "数据操作失败!");
					el.unmask();
				}
			})
		}

	},
	// 数据删除
	doDelete : function(treegrid1,treegrid2, url, id) {
		if (!treegrid1) {
			alert("非treegrid，不能执行操作!");
			return;
		}
		// 得到数据集合
		var store = treegrid1.getStore();
		var records = treegrid1.getSelectionModel().getSelection();
		var data = [];
		Ext.Array.each(records, function(model) {
			data.push(model.get(id));
		});
		if (data.length > 0) {
			var el = treegrid1.getEl();
			el.mask("正在公布中……");
			Ext.Ajax.request({
				url : url,
				params : {
					ids : data.join(",")
				},
				method : 'POST',
				timeout : 4000,
				success : function(form, action) {
					treegrid1.getStore().load();
					treegrid2.getStore().load();
					Ext.MessageBox.alert("提示", "数据操作成功!");
					el.unmask();
				},
				failure : function(form, action) {
					treegrid1.getStore().load();
					treegrid2.getStore().load();
					Ext.MessageBox.alert("提示", "数据操作失败!");
					el.unmask();
				}
			})
		}

	}
});
