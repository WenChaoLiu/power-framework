package com.power.common.db;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.jsp.tagext.TryCatchFinally;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;

public class BaseDAOImpl implements BaseDao {

	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public boolean save(Object object){
		Session session = null;
		boolean result = false;
		try {
			session = sessionFactory.getCurrentSession();
			session.save(object);
			result = true;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
		}
		return result;
		
		
	}
	
	@Override
	public boolean modify(Object object){
		Session session = null;
		boolean result = false;
		
		try {
			session = sessionFactory.getCurrentSession();
			session.saveOrUpdate(object);
			result = true;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		}
		
		return result;
	}

	@Override
	public boolean delete(Object object){
		Session session = null;
		boolean result = false;
		try {
			session = sessionFactory.getCurrentSession();
			// 开启hibernate事物
			session.delete(object);
			result = true;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// 回收session对象
			if (session != null) {
				session.close();
			}
		}
		return result;
	}
	
	public boolean deleteBySql(String sql){
		Session session = null;
		int result = 0;
		try {
			session = sessionFactory.getCurrentSession();
			result = session.createQuery(sql).executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result >= 1 ? true : false;
	}

	@Override
	public Object get(Class<?> c, String id) {
		Session session = null;
		Object object = null;
		try {
			session = sessionFactory.getCurrentSession();
			object = session.get(c, id);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return object;
	}

	@SuppressWarnings({ "unchecked" })
	@Override
	public <T> List<T> queryBySql(String sql, String[] param) {
		Session session = null;
		List<T> list = new ArrayList<T>();
		session = sessionFactory.getCurrentSession();
		Query query = session.createSQLQuery(sql);
		query.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);  
		if (param != null) {
			for (int i = 0; i < param.length; i++) {
				query.setParameter(i, param[i]);
			}
		}
		list = query.list();

		return list;
	}
	
	
	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> queryBySql(String sql, String[] param, Class<T> cla) {
		Session session = null;
		List<T> list = new ArrayList<T>();
		session = sessionFactory.getCurrentSession();
		Query query = session.createSQLQuery(sql).addEntity(cla);
		if (param != null && param.length > 0) {
			for (int i = 0; i < param.length; i++) {
				query.setParameter(i, param[i]);
			}
		}
		list = query.list();

		return list;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> queryByPage(String sql, String[] param, int page,
			int pageSize){
		Session session = null;
		List<T> list = new ArrayList<T>();
		try {
			session = sessionFactory.getCurrentSession();
			Query query = session.createSQLQuery(sql);
			if (param != null) {
				for (int i = 0; i < param.length; i++) {
					query.setParameter(i, param[i]);
				}
			}
			// 设置筛选条件
			query.setFirstResult((page - 1) * pageSize);
			query.setMaxResults(pageSize);
			list = query.list();

		} catch (Exception e) {
		} finally {
		}
		return list;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public <T> List<T> queryByPage(String sql, String[] param,Class<T> cla, int page,
			int pageSize){
		Session session = null;
		List<T> list = new ArrayList<T>();
		try {
			session = sessionFactory.getCurrentSession();
			Query query = session.createSQLQuery(sql).addEntity(cla);
			if (param != null) {
				for (int i = 0; i < param.length; i++) {
					query.setParameter(i, param[i]);
				}
			}
			//设置筛选条件
			query.setFirstResult((page - 1) * pageSize);
			query.setMaxResults(pageSize);
			list = query.list();
		} catch (Exception e) {
		} finally {
			
		}
		return list;
	}

}
