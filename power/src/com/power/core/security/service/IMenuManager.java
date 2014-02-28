package com.power.core.security.service;

import java.util.List;

import com.power.core.security.entity.SysMenu;

/**
 * @Description <b>菜单服务管理借口</b>
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年10月30日
 */
public interface IMenuManager {

	/** 
	* @Title: addMenu 
	* @Description: 新增菜单
	* @param @param menu
	* @param @return    设定文件 
	* @return boolean  返回类型 
	* @throws 
	*/
	public boolean addMenu(SysMenu menu);
	
	/** 
	* @Title: modefiMenu 
	* @Description: 修改菜单信息
	* @param @param menu
	* @param @return    设定文件 
	* @return boolean  返回类型 
	* @throws 
	*/
	public boolean modifyMenu(SysMenu menu);
	
	public boolean deleteMenu(String ids);
	
	/** 
	* @Title: getAllMenu 
	* @Description: 获取所有的菜单
	* @param @return    设定文件 
	* @return List<SysMenu>  返回类型 
	* @throws 
	*/
	public List<SysMenu> getAllMenu();
	
	/** 
	* @Title: getAllMenu 
	* @Description: 分页获取菜单
	* @param @return    设定文件 
	* @return List<SysMenu>  返回类型 
	* @throws 
	*/
	public List<SysMenu> getAllMenu(int pageSize,int page);
	
	/** 
	* @Title: getMenuByParentNo 
	* @Description: 根据当前菜单节点，获取菜单一下的子菜单
	* @param @param menuNo
	* @param @return    设定文件 
	* @return List<SysMenu>  返回类型 
	* @throws 
	*/
	public List<SysMenu> getMenuByParentNo(String parentNo);
	
	
	/** 
	* @Title: getMenuByParentNo 
	* @Description: 根据当前菜单节点，获取菜单一下的子菜单 分页方式
	* @param @param parentNo
	* @param @param pageSize
	* @param @param page
	* @param @return    设定文件 
	* @return List<SysMenu>  返回类型 
	* @throws 
	*/
	public List<SysMenu> getMenuByParentNo(String parentNo,int pageSize,int page);

}
