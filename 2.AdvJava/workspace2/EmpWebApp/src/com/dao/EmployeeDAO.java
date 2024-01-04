package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.db.DbConnection;
import com.dto.Employee;

public class EmployeeDAO {
public Employee empLogin(String email, String password) {
		
		Connection con = DbConnection.getConnection();
		PreparedStatement pst = null;
		ResultSet rs = null;
		
		String loginQuery = "Select * from employee1 where email=? and password=?";
		
		
		try {
			pst = con.prepareStatement(loginQuery);
			pst.setString(1, email);
			pst.setString(2, password);
			rs = pst.executeQuery();
			
			if (rs.next()) {
				Employee emp = new Employee();
				emp.setEmpno(rs.getInt(1));
				emp.setEname(rs.getString(2));
				emp.setSal(rs.getDouble(3));
				emp.setGender(rs.getString(4));
				emp.setEmail(rs.getString(5));
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
