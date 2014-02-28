Ext.define('power.util.combogrid', {
	extend : 'Ext.form.field.Picker',
	xtype : 'treecombox',
	triggerCls : Ext.baseCSSPrefix + 'form-arrow-trigger',
	config : {
		displayField : null,
		columns : null,
		rootVisible : true,
		selectOnTab : true,
		firstSelected : false,
		maxPickerWidth : 300,
		maxPickerHeight : 360,
		minPickerHeight : 100
	},
	editable : false,
	initComponent : function() {
		var me = this;
		me.callParent(arguments);
		this.addEvents('select');
		me.store.on('load', me.onLoad, me);

	},
	createPicker : function() {
		var me = this, picker = Ext.create('Ext.grid.Panel', {
			store : me.store,
			floating : true,
			hidden : true,
			multiSelect:me.multiSelect,
			width : me.maxPickerWidth,
			valueField:me.valueField,
			displayField : me.displayField,
			columns : me.columns,
			maxHeight : me.maxTreeHeight,
			shadow : false,
			rootVisible : me.rootVisible,
			manageHeight : false,
			listeners : {
				itemclick : Ext.bind(me.onItemClick, me)
			},
			viewConfig : {
				listeners : {
					render : function(view) {
						view.getEl().on('keypress', me.onPickerKeypress, me);
					}
				}
			}
		}), view = picker.getView();

		view.on('render', me.setPickerViewStyles, me);
		if (Ext.isIE9 && Ext.isStrict) {
			view.on('highlightitem', me.repaintPickerView, me);
			view.on('unhighlightitem', me.repaintPickerView, me);
			view.on('afteritemexpand', me.repaintPickerView, me);
			view.on('afteritemcollapse', me.repaintPickerView, me);
		}
		/*picker.on({
			checkchange : function() {
				var records = picker.getView().getChecked(), names = [], values = [];
				Ext.Array.each(records, function(rec) {
					console.info(rec);
					names.push(rec.get(me.displayField));
					values.push(rec.get(me.valueField));
				});
				me.setRawValue(names.join(';'));// 隐藏值
				me.setValue(values.join(';'));// 显示值
			}
		});*/
		return picker;
	},
	setPickerViewStyles : function(view) {
		view.getEl().setStyle({
			'min-height' : this.minPickerHeight + 'px',
			'max-height' : this.maxPickerHeight + 'px'
		});
	},
	repaintPickerView : function() {
		var style = this.picker.getView().getEl().dom.style;
		style.display = style.display;
	},
	alignPicker : function() {
		var me = this, picker;

		if (me.isExpanded) {
			picker = me.getPicker();
			if (me.matchFieldWidth) {
				picker.setWidth(this.picker.getWidth());
			}
			if (picker.isFloating()) {
				me.doAlign();
			}
		}
	},
	onItemClick : function(view, record, node, rowIndex, e) {
		this.selectItem(record);
	},
	onPickerKeypress : function(e, el) {
		var key = e.getKey();

		if (key === e.ENTER || (key === e.TAB && this.selectOnTab)) {
			this.selectItem(this.picker.getSelectionModel().getSelection()[0]);
		}
	},
	selectItem : function(record) {
		var me = this, picker;
		var records = me.picker.getSelectionModel().getSelection(), names = [], values = [];
		if (me.multiSelect) {
		    Ext.Array.each(records, function(rec) {
		       names.push(rec.get(me.displayField));
		       values.push(rec.get(me.valueField));
		      });
		    me.setRawValue(names.join(','));
		    me.setValue(values.join(','));
		} else {
			me.setValue(record.get(this.valueField));
			me.setRawValue(record.get(this.displayField));
			me.picker.hide();
		}
		me.inputEl.focus();
		me.fireEvent('select', me, record);
	},
	setValue : function(value) {
		var me = this;
		me.value = value;
		return me;
	},
	getValue : function() {
		return this.value;
	},
	onLoad : function(store, node, records) {
		var value = this.value;
		if (value) {
			this.setValue(value);
		} else {
			if (this.firstSelected) {
				if (records && records.length > 0) {
					var record = records[0];
					this.setValue(record.get(this.valueField));
				}
			}
		}
	},
	onTriggerClick : function() {
		var me = this;
		me.store.load(); 
		if (!me.readOnly && !me.disabled) {
			if (me.isExpanded) {
				me.collapse();
			} else {
				me.expand();
			}
			me.inputEl.focus();
		}
	}
});
