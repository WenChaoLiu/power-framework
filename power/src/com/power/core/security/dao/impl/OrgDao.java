package com.power.core.security.dao.impl;

import java.util.List;

import com.power.common.db.BaseDAOImpl;
import com.power.common.util.StringUtil;
import com.power.core.security.dao.IOrgDao;
import com.power.core.security.entity.SysOrg;

public class OrgDao implements IOrgDao{
	
	private BaseDAOImpl baseDao;

	public BaseDAOImpl getBaseDao() {
		return baseDao;
	}

	public void setBaseDao(BaseDAOImpl baseDao) {
		this.baseDao = baseDao;
	}
	
	@Override
	public boolean addOrg(SysOrg org) {
		return baseDao.save(org);
	}

	@Override
	public boolean modifyOrg(SysOrg org) {
		// TODO Auto-generated method stub
		return baseDao.modify(org);
	}
	
	
	@Override
	public boolean deleteOrg(String ids) {
			StringBuffer sql = new StringBuffer("delete from SysOrg where 1=1 and");
		
		String[] id = ids.split(",");
		for (int i = 0; i < id.length; i++) {
			sql.append(" orgid=").append(id[i]).append(" or ");
		}
		
	    
		return baseDao.deleteBySql(sql.toString().trim().subSequence(0, sql.toString().length()-3).toString());
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
		List<SysOrg> list = null;
		StringBuffer sql = new StringBuffer(
				"select orgId,orgCode,orgNum,orgName,orgRemark, parentNo,orgOrder,isLeaf from sys_org where 1=1");
		String[] param = null;

		if (!StringUtil.isEmpty(parentNo)) {
			sql.append(" and parentNo = ?");
			param = new String[] { parentNo };
		}

		sql = sql.append(" order by orgOrder");
		list = baseDao.queryBySql(sql.toString(), param, SysOrg.class);
		
		return list;
	}

	@Override
	public List<SysOrg> getOrgByParentNo(String parentNo, int pageSize, int page) {
		List<SysOrg> list = null;
		StringBuffer sql = new StringBuffer(
				"select * from (select orgId,orgCode,orgNum,orgName,orgRemark, parentNo,orgOrder,isLeaf from sys_org where 1=1");
		String[] param = null;

		if (!StringUtil.isEmpty(parentNo)) {
			sql.append(" and (parentNo = ?");
			sql.append(" or orgCode = ?)");
			param = new String[] { parentNo, parentNo};
		}

		sql = sql.append(" order by orgOrder) sysOrg");
		list = baseDao.queryByPage(sql.toString(), param, SysOrg.class, page,
				pageSize);

		return list;
	}

	

}
