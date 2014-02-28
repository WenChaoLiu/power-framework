package com.power.core.security.entity;

// Generated 2014-1-2 10:44:18 by Hibernate Tools 4.0.0

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * SysRuleDefine generated by hbm2java
 */
@Entity
@Table(name = "sys_rule_define", catalog = "powersh")
public class SysRuleDefine implements java.io.Serializable {

	private String id;
	private SysRule sysRule;
	private String objId;

	public SysRuleDefine() {
	}

	public SysRuleDefine(String id) {
		this.id = id;
	}

	public SysRuleDefine(String id, SysRule sysRule, String objId) {
		this.id = id;
		this.sysRule = sysRule;
		this.objId = objId;
	}

	@Id
	@Column(name = "id", unique = true, nullable = false, length = 30)
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "rule_id")
	public SysRule getSysRule() {
		return this.sysRule;
	}

	public void setSysRule(SysRule sysRule) {
		this.sysRule = sysRule;
	}

	@Column(name = "obj_id", length = 30)
	public String getObjId() {
		return this.objId;
	}

	public void setObjId(String objId) {
		this.objId = objId;
	}

}