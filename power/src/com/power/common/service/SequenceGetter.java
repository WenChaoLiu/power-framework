package com.power.common.service;

import java.io.Serializable;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.IdentifierGenerator;

/**
 * @Description TODO
 * 获取与数据库无关的序列号
 * @author liuchao WenChao_Liu@163.com
 * @date 2013-9-10
 */
public class SequenceGetter implements IdentifierGenerator {

	@Override
	public Serializable generate(SessionImplementor arg0, Object arg1)
			throws HibernateException {
		
		return "";
	}
	
}
