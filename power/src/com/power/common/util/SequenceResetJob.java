package com.power.common.util;

import com.power.common.service.SequenceFactoryBean;

/**
 * @Description <b>sequence复位tool</b>
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年10月19日
 */
public class SequenceResetJob {
	public void execute() {
		SequenceFactoryBean.reset();
	}
}
