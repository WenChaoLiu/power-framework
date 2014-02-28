package com.power.core.security.dao;

import java.util.List;

import com.power.core.security.entity.SysUser;

/**
 * @Description TODO
 * 用户管理接口
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年9月10日
 */
public interface IUserDao {
	/** 
	* @Title: addUser 
	* @Description: 添加用户
	* @param     设定文件 
	* @return boolean  返回类型 
	* @throws 
	*/
	public boolean addUser(SysUser user);
	
	/** 
	* @Title: deleteUser 
	* @Description: 删除用户
	* @param @return    设定文件 
	* @return boolean  返回类型 
	* @throws 
	*/
	public boolean deleteUser();
	
	
	/** 
	* @Title: getAllUserByOrg 
	* @Description: 根据组织结构id获取组织机构一下的所有用户
	* @param @param orgId
	* @param @return    设定文件 
	* @return List<SysUser>  返回类型 
	* @throws 
	*/
	public List<SysUser> getAllUserByOrg(String orgId);
	
	/** 
	* @Title: getAllUserByOrg 
	* @Description: 分页方式 根据组织结构id获取组织机构一下的所有用户
	* @param @param orgId
	* @param @param pageSize
	* @param @param page
	* @param @return    设定文件 
	* @return List<SysUser>  返回类型 
	* @throws 
	*/
	public List<SysUser> getAllUserByOrg(String orgId,int pageSize, int page);

}
