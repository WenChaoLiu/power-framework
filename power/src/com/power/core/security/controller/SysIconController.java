/** 
* @author liuchao WenChao_Liu@163.com
* @date 2012-12-4 
* @version 1.0 
*/ 
package com.power.core.security.controller;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.power.common.util.JsonUtil;
/** 
 * <p>Title:@SysIcon.java </p> 
 * <p>Description: </p> 
 * <p>Copyright: WenChao_Liu@163.com</p> 
 * <p>Company: 前沿</p> 
 * @author LiuC
 * @date 2012-12-4 
 * @version 1.0 
 */
@Controller
public class SysIconController {
	
	 public static List<Map<String, Object>> sysIcons = new ArrayList<Map<String,Object>>();
	 /** 
	* @Title: getSysIcon 
	* @Description: <p>获取系统图标</p>
	* @param @param request
	* @param @param response
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	 @RequestMapping("/getSysIcon")
	 public @ResponseBody String getSysIcon(HttpServletRequest request, HttpServletResponse response){
			String[] str = { "jpg", "gif", "png", "jpeg" };
			
	        String filePath = this.getClass().getClassLoader().getResource("/").getPath().toString().replace("WEB-INF/classes/", "")+"resource/images/";
			File dir = new File(filePath);
			File[] files = dir.listFiles();
			for(int i=0;i<files.length;i++){
				Map<String ,Object> sysIcon=new HashMap<String, Object>();
	            //过滤非图片
	             String fileType = files[i].getName().substring(files[i].getName().lastIndexOf('.')+1,files[i].getName().length());
	            // for(int t=0;t<str.length;t++){
	             for(int t=0;t<100;t++){
	                     if (str[t].equals(fileType.toLowerCase())){
	                             sysIcon.put("url",files[i].getName());
	                             break;
	                     }
	             }
	             sysIcons.add(sysIcon);
			}
			return "{\"success\":"+true+",\"children\":"+JsonUtil.toJson(sysIcons)+"}";
	 }
}
