package com.power.core.security.dao.impl;

import java.util.List;

import com.power.common.db.BaseDAOImpl;
import com.power.common.util.StringUtil;
import com.power.core.security.dao.IUserDao;
import com.power.core.security.entity.SysUser;

public class UserDao implements IUserDao {

	private BaseDAOImpl baseDao;

	public BaseDAOImpl getBaseDao() {
		return baseDao;
	}

	public void setBaseDao(BaseDAOImpl baseDao) {
		this.baseDao = baseDao;
	}

	@Override
	public boolean addUser(SysUser user) {
		return baseDao.save(user);
	}

	@Override
	public boolean deleteUser() {
		return false;
	}

	@Override
	public List<SysUser> getAllUserByOrg(String orgId) {
		List<SysUser> SysUsers = null;
		StringBuffer sql = new StringBuffer(
				"SELECT userId,userName,password,orgId,status,remark,UserOrder FROM sys_user where 1=1");
		String[] param = null;
		if (!StringUtil.isEmpty(orgId)) {
			sql.append(" and orgId = '").append(orgId).append("'");
			param = new String[] { orgId };
		}

		sql = sql.append(" order by userOrder");

		SysUsers = baseDao.queryBySql(sql.toString(), param, SysUser.class);

		return SysUsers;
	}

	@Override
	public List<SysUser> getAllUserByOrg(String orgId, int pageSize, int page) {
		List<SysUser> SysUsers = null;
		StringBuffer sql = new StringBuffer(
				"select * from (SELECT userId,userName,password,orgId,status,remark,UserOrder FROM sys_user where 1=1");
		String[] param = null;
		if (!StringUtil.isEmpty(orgId)) {
			sql.append(" and orgId = '").append(orgId).append("'");
			param = new String[] { orgId };
		}

		sql = sql.append(" order by userOrder) sysUser");

		SysUsers = baseDao.queryByPage(sql.toString(), param, SysUser.class,
				page, pageSize);

		return SysUsers;
	}
}
