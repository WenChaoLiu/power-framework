package com.power.core.security.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.TableGenerator;


/**
 * @Description 用户实体类
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年9月10日
 */
@Entity
@Table(name="t_user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE, generator="USER_SEQUENCE")
	@TableGenerator(name = "USER_SEQUENCE",
	    table="sys_sequence",
	    pkColumnName="seqName",
	    valueColumnName="seqValue",
	    pkColumnValue="USER_SEQUENCE",
	    allocationSize=1
	)
	@Column(length = 32)
	private Long id;
	@Column(length = 32)
	private String userName;
	@Column(length = 32)
	private String userAge;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserAge() {
		return userAge;
	}
	public void setUserAge(String userAge) {
		this.userAge = userAge;
	}

}
