package com.power.core.security.controller;

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
import com.power.core.security.entity.SysOrg;
import com.power.core.security.service.IOrgManager;

@Controller
public class OrgController extends BaseAction {
	
	@Resource(name = "orgManager")
	private IOrgManager orgManager;

	/** 
	* @Title: getAllOrgById 
	* @Description: <b>根据组织机构父节点获取下级组织结构</b>
	* @param @param Request
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/getAllOrgById")
	public @ResponseBody
	String getAllOrgById(HttpServletRequest Request) {
		String jsonOrg = "";
		// 节点
		String parentNo = Request.getParameter("node");

		List<SysOrg> list = null;
		list = orgManager.getOrgByParentNo(parentNo);
		List<Map<String, Object>> sysOrgs = new ArrayList<Map<String, Object>>();

		for (SysOrg sysOrg : list) {
			Map<String, Object> org = new HashMap<String, Object>();
			
			org.put("orgId", sysOrg.getOrgId());
			org.put("orgCode", sysOrg.getOrgCode());
			org.put("orgNum", sysOrg.getOrgNum());
			org.put("orgName", sysOrg.getOrgName());
			org.put("orgRemark", sysOrg.getOrgRemark());
			org.put("parentNo", sysOrg.getParentNo());
			org.put("orgOrder", sysOrg.getOrgOrder());
			org.put("isLeaf", sysOrg.getIsLeaf());
			
			sysOrgs.add(org);
			org = null;
		}
		jsonOrg = JsonUtil.toJson(sysOrgs);
		return "{\"success\":\"" + true + "\",\"children\":" + jsonOrg + "}";
	}
	
	/** 
	* @Title: getAllOrgByParentNo 
	* @Description: <b>根据组织结构父节点Id  分页方式获取所有的组织结构</b>
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/getAllOrgByParentNo")
	public @ResponseBody
	String getAllOrgByParentNo(HttpServletRequest Request) {
		String jsonOrg = "";
		// 每页显示数
		int pageSize = Integer.parseInt(Request.getParameter("limit"));
		// 当前第几页，从1开始
		int page = Integer.parseInt(Request.getParameter("page"));
		// 节点
		String parentNo = Request.getParameter("node");
		
		List<SysOrg> list = null;
		list = orgManager.getOrgByParentNo(parentNo, pageSize, page);
		
		List<Map<String, Object>> sysOrgs = new ArrayList<Map<String, Object>>();
		
		for (SysOrg sysOrg : list) {
			Map<String, Object> org = new HashMap<String, Object>();
			
			org.put("orgId", sysOrg.getOrgId());
			org.put("orgCode", sysOrg.getOrgCode());
			org.put("orgNum", sysOrg.getOrgNum());
			org.put("orgName", sysOrg.getOrgName());
			org.put("orgRemark", sysOrg.getOrgRemark());
			org.put("parentNo", sysOrg.getParentNo());
			org.put("orgOrder", sysOrg.getOrgOrder());
			org.put("isLeaf", sysOrg.getIsLeaf());
			
			sysOrgs.add(org);
			org = null;
		}
		jsonOrg = JsonUtil.toJson(sysOrgs);
		return "{\"success\":\"" + true + "\",\"children\":" + jsonOrg + "}";
	}
	
	/** 
	* @Title: AddOrg 
	* @Description: <b>新增组织结构</b>
	* @param @param sysOrg
	* @param @param Request
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/addOrg")
	public @ResponseBody String addOrg(SysOrg sysOrg,HttpServletRequest Request){
		boolean b  = orgManager.addOrg(sysOrg);
		return "{\"success\":" + b + "}";
	};
	
	/** 
	* @Title: AddOrg 
	* @Description: <b>新增组织结构</b>
	* @param @param sysOrg
	* @param @param Request
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/modifyOrg")
	public @ResponseBody String modifyOrg(SysOrg sysOrg,HttpServletRequest Request){
		boolean b  = orgManager.modifyOrg(sysOrg);
		return "{\"success\":" + b + "}";
	};
	
	/** 
	* @Title: AddOrg 
	* @Description: <b>新增组织结构</b>
	* @param @param sysOrg
	* @param @param Request
	* @param @return    设定文件 
	* @return String  返回类型 
	* @throws 
	*/
	@RequestMapping("/deleteOrg")
	public @ResponseBody String deleteOrg(HttpServletRequest request){
		String ids = request.getParameter("ids");
		boolean b = orgManager.deleteOrg(ids);
		return "{\"success\":" + b + "}";
	}
}

