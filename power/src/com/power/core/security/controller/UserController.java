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
import com.power.core.security.entity.SysUser;
import com.power.core.security.service.IUserManager;

@Controller
public class UserController extends BaseAction{
	
	@Resource(name="userManager")
	private IUserManager userManager;
	
	@RequestMapping("/addUser")
	public @ResponseBody String addUser(SysUser user, HttpServletRequest Request) {
		boolean b = userManager.addUser(user);
		return "{\"success\":" + b + "}";
	}

	@RequestMapping("/deleteUser")
	public String deleteUser(HttpServletRequest Request) {
		String result = "删除用户";
		Request.setAttribute("result", result);
		return "/annotation";
	}
	
	@RequestMapping("/getAllUserByOrg")
	public @ResponseBody
	String getAllUserByOrg(HttpServletRequest Request) {
		String strUser = "";
		// 每页显示数
		int pageSize = Integer.parseInt(Request.getParameter("limit"));
		// 当前第几页，从1开始
		int page = Integer.parseInt(Request.getParameter("page"));
		// 节点
		String orgId = Request.getParameter("node");

		List<SysUser> list = null;
		list = userManager.getAllUserByOrg(orgId, pageSize, page);
		List<Map<String, Object>> sysUsers = new ArrayList<Map<String, Object>>();
		
		for (SysUser sysUser : list) {
			Map<String, Object> user = new HashMap<String, Object>();
			user.put("userId", sysUser.getUserId());
			user.put("userName", sysUser.getUserName());
			user.put("password", sysUser.getPassword());
			user.put("userBirthDay", sysUser.getUserBirthDay());
			user.put("userPhone", sysUser.getUserPhone());
			user.put("userEmail", sysUser.getUserEmail());
			user.put("orgId", sysUser.getOrgId());
			user.put("status", sysUser.getStatus());
			user.put("remark", sysUser.getRemark());
			user.put("userOrder", sysUser.getUserOrder());
			sysUsers.add(user);
			user = null;
		}
		strUser = JsonUtil.toJson(sysUsers);
		return "{\"success\":\"" + true + "\",\"children\":" + strUser + "}";
	}
}
