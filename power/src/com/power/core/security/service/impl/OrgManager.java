package com.power.core.security.service.impl;

import java.util.List;

import com.power.core.security.dao.IOrgDao;
import com.power.core.security.entity.SysOrg;
import com.power.core.security.service.IOrgManager;

public class OrgManager implements IOrgManager{
	
	private IOrgDao orgDao;

	public IOrgDao getOrgDao() {
		return orgDao;
	}

	public void setOrgDao(IOrgDao orgDao) {
		this.orgDao = orgDao;
	}

	@Override
	public boolean addOrg(SysOrg org) {
		return orgDao.addOrg(org);
	}

	@Override
	public boolean modifyOrg(SysOrg org) {
		// TODO Auto-generated method stub
		return orgDao.modifyOrg(org);
	}
	
	@Override
	public boolean deleteOrg(String ids) {
		return orgDao.deleteOrg(ids);
	}

	@Override
	public List<SysOrg> getAllOrg() {
		return null;
	}

	@Override
	public List<SysOrg> getAllOrg(int pageSize, int page) {
		return null;
	}

	@Override
	public List<SysOrg> getOrgByParentNo(String parentNo) {
		return orgDao.getOrgByParentNo(parentNo);
	}

	@Override
	public List<SysOrg> getOrgByParentNo(String parentNo, int pageSize, int page) {
		return  orgDao.getOrgByParentNo(parentNo, pageSize, page);
	}


}
