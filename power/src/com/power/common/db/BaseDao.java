package com.power.common.db;

import java.util.List;

/**
 * @Description TODO
 * @author liuchao WenChao_Liu@163.com
 * @date 2013年10月26日
 */
public interface BaseDao {

	/**
	 * @
	 * @Title: save
	 * @Description: <b>保存单个对象</b>
	 * @param @param object
	 * @param @return 设定文件
	 * @return boolean 返回类型
	 * @throws
	 */
	public boolean save(Object object);

	/**
	 * @
	 * 
	 * @Title: modefi
	 * @Description: <b>修改单个对象</b>
	 * @param @param object
	 * @param @return 设定文件
	 * @return boolean 返回类型
	 * @throws
	 */
	public boolean modify(Object object);

	/**
	 * @
	 * 
	 * @Title: delete
	 * @Description: <b>修改单个数据</b>
	 * @param @param object
	 * @param @return 设定文件
	 * @return boolean 返回类型
	 * @throws
	 */
	public boolean delete(Object object);

	/**
	 * @Title: get
	 * @Description: <b>根据对象Id获取单个对象<b>
	 * @param @param c
	 * @param @param id
	 * @param @return 设定文件
	 * @return Object 返回类型
	 * @throws
	 */
	public Object get(Class<?> c, String id);

	/**
	 * @Title: query
	 * @Description: <b>根据sql语句 获取数据列表</b>
	 * @param @param sql
	 * @param @param param 参数列表
	 * @param @return 设定文件
	 * @return List<T> 返回类型
	 * @throws
	 */
	public <T> List<T> queryBySql(String sql, String[] param);

	/**
	 * @Title: queryBySql
	 * @Description: <b>根据sql语句 获取数据列表 同时返回对象集合</b>
	 * @param @param sql
	 * @param @param param
	 * @param @param Object
	 * @param @return 设定文件
	 * @return List<T> 返回类型
	 * @throws
	 */
	public <T> List<T> queryBySql(String sql, String[] param, Class<T> cla);

	/**
	 * @
	 * 
	 * @Title: queryByPage
	 * @Description: <b>分页查询的实现<b>
	 * @param @param sql
	 * @param @param param 参数
	 * @param @param page 当前页码
	 * @param @param pageSize 每页显示条数
	 * @param @return 设定文件
	 * @return List<T> 返回类型
	 * @throws
	 */
	public <T> List<T> queryByPage(String sql, String[] param, int page,
			int pageSize);

	/**
	 * @
	 * 
	 * @Title: queryByPage
	 * @Description: TODO
	 * @param @param sql
	 * @param @param param
	 * @param @param cla
	 * @param @param page
	 * @param @param pageSize
	 * @param @return 设定文件
	 * @return List<T> 返回类型
	 * @throws
	 */
	public <T> List<T> queryByPage(String sql, String[] param, Class<T> cla,
			int page, int pageSize);

}
