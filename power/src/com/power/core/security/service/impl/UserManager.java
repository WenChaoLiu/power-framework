package com.power.core.security.service.impl;

import java.util.List;

import com.power.core.security.dao.IUserDao;
import com.power.core.security.entity.SysUser;
import com.power.core.security.service.IUserManager;

public class UserManager implements IUserManager{
	private IUserDao userDao;

	public void setUserDao(IUserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public boolean addUser(SysUser user) {
		return userDao.addUser(user);
	}

	@Override
	public boolean deleteUser() {
		return false;
	}

	@Override
	public List<SysUser> getAllUserByOrg(String orgId) {
		return userDao.getAllUserByOrg(orgId);
	}

	@Override
	public List<SysUser> getAllUserByOrg(String orgId, int pageSize, int page) {
		return userDao.getAllUserByOrg(orgId, pageSize, page);
	}
	
}
