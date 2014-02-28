package com.power.core.security.dao.impl;

import java.util.List;

import com.power.common.db.BaseDAOImpl;
import com.power.common.util.StringUtil;
import com.power.core.security.dao.IMenuDao;
import com.power.core.security.entity.SysMenu;

public class MenuDao implements IMenuDao {

	private BaseDAOImpl baseDao;

	public BaseDAOImpl getBaseDao() {
		return baseDao;
	}

	public void setBaseDao(BaseDAOImpl baseDao) {
		this.baseDao = baseDao;
	}

	@Override
	public boolean addMenu(SysMenu menu) {
		return baseDao.save(menu);
	}

	@Override
	public boolean modifyMenu(SysMenu menu) {
		return baseDao.modify(menu);
	}
	
	@Override
	public boolean deleteMenu(String ids) {
		// TODO Auto-generated method stub
		StringBuffer sql = new StringBuffer("delete from SysMenu where 1=1 and");
		
		String[] id = ids.split(",");
		for (int i = 0; i < id.length; i++) {
			sql.append(" id=").append(id[i]).append(" or ");
		}
		return baseDao.deleteBySql(sql.toString().trim().subSequence(0, sql.toString().length()-3).toString());
	}
	
	@Override
	public List<SysMenu> getAllMenu() {
		List<SysMenu> list = null;
		
		StringBuffer sql =new StringBuffer("select menuId,MenuNo,MenuParentNo,MenuOrder,MenuName,MenuUrl,MenuIcon,IsVisible,IsLeaf from sys_menu");
		sql = sql.append(" order by MenuOrder");
		
		list = baseDao.queryBySql(sql.toString(), null, SysMenu.class);
		return list;
	}

	@Override
	public List<SysMenu> getMenuByParentNo(String parentNo) {
		List<SysMenu> list = null;
		
		StringBuffer sql = new StringBuffer(
				"select menuId,MenuNo,MenuParentNo,MenuOrder,MenuName,MenuUrl,MenuIcon,IsVisible,IsLeaf from sys_menu where 1=1 ");
		String[] param = null;
		
		if (!StringUtil.isEmpty(parentNo)) {
			sql.append(" and MenuParentNo = ?");
			param = new String[] { parentNo };
		}
		sql = sql.append(" order by MenuOrder");
		
		list = baseDao.queryBySql(sql.toString(), param, SysMenu.class);
		return list;
	}

	@Override
	public List<SysMenu> getMenuByParentNo(String parentNo, int pageSize,
			int page) {
		List<SysMenu> list = null;
		
		StringBuffer sql =new StringBuffer("select * from (select menuId,MenuNo,MenuParentNo,MenuOrder,MenuName,MenuUrl,MenuIcon,IsVisible,IsLeaf from sys_menu");
		sql = sql.append(" order by MenuOrder) SysMenu");
		
		list = baseDao.queryByPage(sql.toString(), null, SysMenu.class, page, pageSize);
		return list;
	}

	@Override
	public List<SysMenu> getAllMenu(int pageSize, int page) {
		List<SysMenu> list = null;
		
		StringBuffer sql =new StringBuffer("select * from (select menuId,MenuNo,MenuParentNo,MenuOrder,MenuName,MenuUrl,MenuIcon,IsVisible,IsLeaf from sys_menu");
		sql = sql.append(" order by MenuOrder asc) SysMenu ");
		
		list = baseDao.queryByPage(sql.toString(), null, SysMenu.class, page, pageSize);
		return list;
	}

}
