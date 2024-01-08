
package com.dao;

import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.db.DbConnection;
import com.dto.Employee;

public class EmployeeDAO {
	public Employee empLogin(String emailId, String password) {

		Connection con = DbConnection.getConnection();
		PreparedStatement pst = null;
		ResultSet rs = null;

		String loginQuery = "Select * from employ where emailId=? and password=?";

		try {
			pst = con.prepareStatement(loginQuery);
			pst.setString(1, emailId);
			pst.setString(2, password);
			rs = pst.executeQuery();

			if (rs.next()) {
				Employee emp = new Employee();
				emp.setEmpId(rs.getInt(1));
				emp.setEmpName(rs.getString(2));
				emp.setSalary(rs.getDouble(3));
				emp.setGender(rs.getString(4));
				emp.setEmailId(rs.getString(5));
				emp.setPassword(rs.getString(6));
				return emp;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		finally {
			if (con != null) {
				try {
					rs.close();
					pst.close();
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		return null;
	}

	public List getAllEmployees() {

		Connection con = DbConnection.getConnection();
		PreparedStatement pst = null;
		ResultSet rs = null;
		List empList = null;

		String selectQuery = "Select * from employ";

		try {
			pst = con.prepareStatement(selectQuery);
			rs = pst.executeQuery();

			empList = new ArrayList<Employee>();

			while (rs.next()) {
				Employee emp = new Employee();

				emp.setEmpId(rs.getInt(1));
				emp.setEmpName(rs.getString(2));
				emp.setSalary(rs.getDouble(3));
				emp.setGender(rs.getString(4));
				emp.setEmailId(rs.getString(5));
				emp.setPassword(rs.getString(6));

				empList.add(emp);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		finally {
			if (con != null) {
				try {
					rs.close();
					pst.close();
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		return empList;
	}

	public int registerEmployee(Employee emp) {
		Connection con = DbConnection.getConnection();
		PreparedStatement pst = null;

		String insertQuery = "insert into employ "
				+ "(empName, salary, gender, emailId, password) values (?, ?, ?, ?, ?)";

		try {
			pst = con.prepareStatement(insertQuery);

			pst.setString(1, emp.getEmpName());
			pst.setDouble(2, emp.getSalary());
			pst.setString(3, emp.getGender());
			pst.setString(4, emp.getEmailId());
			pst.setString(5, emp.getPassword());

			return pst.executeUpdate();

		} catch (SQLException e) {
			e.printStackTrace();
		}

		finally {
			if (con != null) {
				try {
					pst.close();
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		return 0;
	}

	public Employee getEmployeeById(int empId) {	

		Connection con = DbConnection.getConnection();
		PreparedStatement pst = null;
		ResultSet rs = null;

		String selectQuery = "Select * from employ where empId=?";


		try {
			pst = con.prepareStatement(selectQuery);
			pst.setInt(1, empId);
			rs = pst.executeQuery();

			if (rs.next()) {

				Employee emp = new Employee();

				emp.setEmpId(rs.getInt(1));
				emp.setEmpName(rs.getString(2));
				emp.setSalary(rs.getDouble(3));
				emp.setGender(rs.getString(4));
				emp.setEmailId(rs.getString(5));
				emp.setPassword(rs.getString(6));

				return emp;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		finally {
			if (con != null) {
				try {
					rs.close();
					pst.close();
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		return null;
	}

}

