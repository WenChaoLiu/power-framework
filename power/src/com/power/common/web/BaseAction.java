package com.power.common.web;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

/**
 * @Description TODO
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年11月4日
 */
public class BaseAction {
	
	/** 
	* @Title: writeJson 
	* @Description: TODO
	* @param @param Response
	* @param @param json
	* @param @throws IOException    设定文件 
	* @return void  返回类型 
	* @throws 
	*/
	public void writeJson(HttpServletResponse Response,String json) throws IOException{
		Response.flushBuffer();
		Response.setContentType("json");
		Response.getWriter().write(json); 
		Response.getWriter().flush();     
		Response.getWriter().close();     
	}   
}
