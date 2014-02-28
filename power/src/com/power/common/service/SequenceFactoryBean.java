package com.power.common.service;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.FactoryBean;

/**
 * @Description <b>自定义主键生成</b>
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年10月19日
 */
public class SequenceFactoryBean implements FactoryBean<String> {
	private static long counter  = 0;

	@Override
	public String getObject() throws Exception {
		String date = new SimpleDateFormat("yyyy-MM-dd").format(new Date())
				+ " + ";
		String sequ = new DecimalFormat("00000000").format(counter++);
		return date + sequ;
	}

	@Override
	public Class<?> getObjectType() {
		// TODO Auto-generated method stub
		return String.class;
	}

	@Override
	public boolean isSingleton() {
		// TODO Auto-generated method stub
		return false;
	}
	
    public static void reset() {
        SequenceFactoryBean.counter = 0;
    }
    
}
