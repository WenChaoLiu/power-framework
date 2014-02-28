package com.power.core.security.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.power.common.util.JsonUtil;
import com.power.common.web.BaseAction;
import com.power.core.security.entity.SysMenu;
import com.power.core.security.service.IMenuManager;

/**
 * @Description 菜单控制器
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年11月2日
 */
@Controller
public class MenuController extends BaseAction {
	
	@Resource(name="menuManager")
	private IMenuManager menuManager;
	
	/**
	 * @return 
	 * @throws IOException  
	* @Title: getAllMenu 
	* @Description: 获取所有菜单项
	* @param @param Request
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/getAllMenuById")
	public @ResponseBody String getAllMenuById(HttpServletRequest Request) {
		String jsonMenu = "";
		//节点
		String parentNo =Request.getParameter("node"); 
		
		
		List<SysMenu> list = null;
		list = menuManager.getMenuByParentNo(parentNo);
		
		
		
		List<Map<String, Object>> sysMenues = new ArrayList<Map<String,Object>>();
		
		
		for (SysMenu sysMenu : list) {
			
			Map<String ,Object> menu=new HashMap<String, Object>();
			
			menu.put("text", sysMenu.getMenuName());
			//menu.put("id", sysMenu.getMenuId());
			menu.put("id", sysMenu.getMenuNo());
			menu.put("parent", sysMenu.getMenuParentNo());
			menu.put("icon", "resource/images/"+sysMenu.getMenuIcon());
			menu.put("leaf", sysMenu.getIsLeaf() == 1 ? true : false);
			menu.put("menuOrder", sysMenu.getMenuOrder());
			menu.put("url", sysMenu.getMenuUrl());
			menu.put("isVisible", sysMenu.getIsVisible());

			sysMenues.add(menu);
			
			menu = null;
		}
		
		jsonMenu = JsonUtil.toJson(sysMenues);
		return "{\"success\":\""+true+"\",\"children\":"+jsonMenu+"}";
	}
	
	/** 
	* @Title: getAllMenu 
	* @Description: TODO
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/getAllMenu")
	public @ResponseBody String getAllMenu(HttpServletRequest Request){
		String jsonMenu = "";
		
		//当前第几页，从1开始
		int page = Integer.parseInt(Request.getParameter("page"));
		//每页显示数
		int pageSize = Integer.parseInt(Request.getParameter("limit"));
				
		
		int total = menuManager.getAllMenu().size();
		
		List<SysMenu> list = null;
		list = menuManager.getAllMenu(pageSize, page);
		
		List<Map<String, Object>> sysMenues = new ArrayList<Map<String,Object>>();
		
		
		for (SysMenu sysMenu : list) {
			
			Map<String ,Object> menu=new HashMap<String, Object>();
			
			menu.put("text", sysMenu.getMenuName());
			menu.put("id", sysMenu.getMenuId());
			menu.put("menuNo", sysMenu.getMenuNo());
			menu.put("parent", sysMenu.getMenuParentNo());
			menu.put("icon", sysMenu.getMenuIcon());
			menu.put("leaf", sysMenu.getIsLeaf());
			menu.put("menuOrder", sysMenu.getMenuOrder());
			menu.put("url", sysMenu.getMenuUrl());
			menu.put("isVisible", sysMenu.getIsVisible());

			sysMenues.add(menu);
			menu = null;
		}
		
		jsonMenu = JsonUtil.toJson(sysMenues);
		return "{\"total\":\""+total+"\",\"children\":"+jsonMenu+"}";
	}
	
	
	/** -- 将普通数据结构转换成树结构
	 * @param rows -- 源数据
	 * @param tree -- 树结构
	 * @param childenKey -- 对应子节点的字段名
	 * @param parentKey -- 对应父节点的字段名
	 * @param rootValue -- 根节点值
	 * @return 树
	 */
	public List<Map<String, Object>> toTree(List<Map<String, Object>> rows,String childenKey,String parentKey,String rootValue){
		if(rows.isEmpty()) return null;
		List<Map<String, Object>> tree = new ArrayList<Map<String,Object>>();
		Map<String, Map<String, Object>> mapRows = new HashMap<String, Map<String, Object>>();
		for (Map<String, Object> map : rows) {
			if(!map.containsKey(childenKey))continue;
			//LiuC更改如果map.get(childenKey)为字符串转换异常
			String childenValue = String.valueOf(map.get(childenKey));
			mapRows.put(childenValue, map);
		}
		for (Map<String, Object> item : rows)
        {
            if (!item.containsKey(childenKey)) continue;
            if (item.containsKey(parentKey) && item.get(parentKey).equals(rootValue))
            {
                tree.add(item);
            }
            else
            {
            	/**
            	 Map<String, Object> pitem = mapRows.get(item.get(parentKey).toString());
                if (!pitem.containsKey("children"))
                    pitem.put("children", new ArrayList<Map<String,Object>>());
                @SuppressWarnings("unchecked")
				List<Map<String, Object>> children = (List<Map<String, Object>>) pitem.get("children");
                children.add(item);
                **/
            }
        }
		return tree;
	}
	
	/** 
	* @Title: addMenu 
	* @Description: 新增菜单
	* @param @param sysMenu
	* @param @param Request
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/addMenu")
	public @ResponseBody String addMenu(SysMenu sysMenu, HttpServletRequest Request) {
		boolean b = menuManager.addMenu(sysMenu);
		return "{\"success\":" + b + "}";
	}
	
	/** 
	* @Title: modefiMenu 
	* @Description: 修改菜单信息
	* @param @param sysMenu
	* @param @param Request
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/modifyMenu")
	public @ResponseBody String modifyMenu(SysMenu sysMenu, HttpServletRequest Request){
		boolean b = menuManager.modifyMenu(sysMenu);
		return "{\"success\":" + b + "}";
	}
	
	/** 
	* @Title: deleteMenu 
	* @Description: 删除选择的菜单
	* @param @param sysMenu
	* @param @param Request
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/deleteMenu")
	public @ResponseBody String deleteMenu(HttpServletRequest Request){
		String ids = Request.getParameter("ids");
		
		boolean b = menuManager.deleteMenu(ids);
		
		return "{\"success\":" + b + "}";
	}
}
