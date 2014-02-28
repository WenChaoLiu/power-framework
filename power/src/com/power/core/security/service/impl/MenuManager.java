package com.power.core.security.service.impl;

import java.util.List;

import com.power.core.security.dao.IMenuDao;
import com.power.core.security.entity.SysMenu;
import com.power.core.security.service.IMenuManager;

public class MenuManager implements IMenuManager {
	private IMenuDao menuDao;


	public IMenuDao getMenuDao() {
		return menuDao;
	}


	public void setMenuDao(IMenuDao menuDao) {
		this.menuDao = menuDao;
	}


	@Override
	public boolean addMenu(SysMenu menu) {
		return menuDao.addMenu(menu);
	}
	
	
	@Override
	public boolean modifyMenu(SysMenu menu) {
		return menuDao.modifyMenu(menu);
	}
	
	@Override
	public boolean deleteMenu(String ids) {
		return menuDao.deleteMenu(ids);
	}
	
	@Override
	public List<SysMenu> getAllMenu() {
		List<SysMenu> list = menuDao.getAllMenu();
		return list;
	}
	
	@Override
	public List<SysMenu> getAllMenu(int pageSize,int page) {
		List<SysMenu> list = menuDao.getAllMenu(pageSize, page);
		return list;
	}


	@Override
	public List<SysMenu> getMenuByParentNo(String parentNo) {
		List<SysMenu> list = menuDao.getMenuByParentNo(parentNo);
		return list;
	}
	
	
	@Override
	public List<SysMenu> getMenuByParentNo(String parentNo,int pageSize,int page) {
		List<SysMenu> list = menuDao.getMenuByParentNo(parentNo, pageSize, page);
		return list;
	}

}
