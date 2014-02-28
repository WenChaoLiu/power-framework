package com.power.core.security.service;

import java.util.List;

import com.power.core.security.entity.SysOrg;

/**
 * @Description <b>组织结构服务接口<b>
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年11月24日
 */
public interface IOrgManager {
	/** 
	* @Title: addOrg 
	* @Description: <b>增加组织机构</b>
	* @param @param org
	* @param @return    设定文件 
	* @return boolean  返回类型 
	* @throws 
	*/
	public boolean addOrg(SysOrg org);
	
	/** 
	* @Title: modifyOrg 
	* @Description: <b>修改组织机构<b>
	* @param @param org
	* @param @return    设定文件 
	* @return boolean  返回类型 
	* @throws 
	*/
	public boolean modifyOrg(SysOrg org);
	
	/** 
	* @Title: deleteOrg 
	* @Description: <b>根据组织结构id删除组织结构</b>
	* @param @param ids
	* @param @return    设定文件 
	* @return boolean  返回类型 
	* @throws 
	*/
	public boolean deleteOrg(String ids);
	
	/** 
	* @Title: getAllOrg 
	* @Description: <b>获取所有的组织结构信息</b>
	* @param @return    设定文件 
	* @return List<SysOrg>  返回类型 
	* @throws 
	*/
	public List<SysOrg> getAllOrg();
	
	/** 
	* @Title: getAllOrg 
	* @Description: <b>分页  获取所有的组织结构信息</b>
	* @param @param pageSize
	* @param @param page
	* @param @return    设定文件 
	* @return List<SysOrg>  返回类型 
	* @throws 
	*/
	public List<SysOrg> getAllOrg(int pageSize,int page);
	
	/** 
	* @Title: getOrgByParentNo 
	* @Description: <b>根据组机构parentNo 获取下级组织结构列表</b>
	* @param @param parentNo
	* @param @return    设定文件 
	* @return List<SysOrg>  返回类型 
	* @throws 
	*/
	public List<SysOrg> getOrgByParentNo(String parentNo);
	
	/** 
	* @Title: getOrgByParentNo 
	* @Description: <b>分页方式  根据组机构parentNo 获取下级组织结构列表</b>
	* @param @param parentNo
	* @param @param pageSize
	* @param @param page
	* @param @return    设定文件 
	* @return List<SysOrg>  返回类型 
	* @throws 
	*/
	public List<SysOrg> getOrgByParentNo(String parentNo,int pageSize,int page);
}
