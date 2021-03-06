package com.rahulvivek.hostel.db;

import java.io.IOException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedList;
import java.util.List;

public class StudentData {

	public static List<Student> getAllStudent() {
		List<Student> studentList = new LinkedList<Student>();

		Connection con = null;
		try {
			con = Connector.getConnection();

			Statement smt = con.createStatement();
			ResultSet rs = smt.executeQuery("select * from student");

			while (rs.next()) {
				Student emp = new Student(rs.getInt("sid"), rs.getString("name"), rs.getString("dob"), rs.getInt("age"),
						rs.getString("college"), rs.getString("address"), rs.getLong("mobile_num"), rs.getString("email"),
						rs.getString("password"), rs.getString("doj"), rs.getString("dol"), rs.getInt("rid"),
						rs.getInt("roomno"), rs.getDouble("fees"), rs.getString("photo"), rs.getBoolean("stu_access"));

				studentList.add(emp);
			}
			return studentList;
		} catch (ClassNotFoundException | IOException | SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}
	
	public static Student getStudent_lite(int sid) {
		Student student = new Student();

		Connection con = null;
		try {
			con = Connector.getConnection();

			Statement smt = con.createStatement();
			ResultSet rs = smt.executeQuery("select * from student_lite where sid="+sid);

			while (rs.next()) {	
				boolean stu_access;
				if(rs.getString("stu_access").equals("n")) {
					stu_access=false;
				}else
					stu_access=true;
				student = new Student(rs.getInt("sid"), rs.getString("name"), rs.getString("dob"), rs.getInt("age"),
						rs.getString("college"), rs.getString("address"), rs.getLong("mobile_num"), rs.getString("email"),
						rs.getString("password"), rs.getString("doj"),  stu_access, rs.getString("photo"));

			}
			return student;
		} catch (ClassNotFoundException | IOException | SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}
	
	public static Student getStudent(int sid) {
		Student student = new Student();

		Connection con = null;
		try {
			con = Connector.getConnection();

			Statement smt = con.createStatement();
			ResultSet rs = smt.executeQuery("select * from student_lite where sid="+sid);

			while (rs.next()) {	
				student = new Student(rs.getInt("sid"), rs.getString("name"), rs.getString("dob"), rs.getInt("age"),
						rs.getString("college"), rs.getString("address"), rs.getLong("mobile_num"), rs.getString("email"),
						rs.getString("password"), rs.getString("doj"), rs.getString("dol"), rs.getInt("rid"),
						rs.getInt("roomno"), rs.getDouble("fees"), rs.getString("photo"), rs.getBoolean("stu_access"));

			}
			return student;
		} catch (ClassNotFoundException | IOException | SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}
	
	public static int saveStudent(int sid,String name, Date dob, int age, String collage, String address, long phoneNo,
			String email, String password, Date dateOfJoin, Date dateOfLeave, String photo,int rid,int roomNo,
	double fees) {
	
		int status=0;
		
		String sqlqry="insert into student_info(sid,name,age,dob,doj,address,college,mobile_num,email,password,photo,dol,rid,roomno,fees,stu_access) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		try {
			Connection con=Connector.getConnection();
			Statement stm = con.createStatement();
			ResultSet rs = stm.executeQuery("select Max(sid) sid from student_info");
			while (rs.next()) {
				sid = rs.getInt("sid");
			}
			
			PreparedStatement ps=con.prepareStatement(sqlqry);
			ps.setInt(1, sid);
			ps.setString(2, name);
			ps.setInt(3, age);
			ps.setDate(4, dob);
			ps.setDate(5, dateOfJoin);
			ps.setString(6, address);
			ps.setString(7, collage);
			ps.setLong(8, phoneNo);
			ps.setString(9, email);
			ps.setString(10, password);
			ps.setString(11, photo);
			ps.setDate(12, dateOfLeave);
			ps.setInt(13, rid);
			ps.setInt(14, roomNo);
			ps.setDouble(15, fees);
			ps.setString(16, "y");
			
			status=ps.executeUpdate();
		} catch (ClassNotFoundException | IOException | SQLException e) {
			e.printStackTrace();
		}
		
		
		return status;
	}
	
	public static int saveStudent_lite(int sid,String name, int age, String dob, String collage, String address, long phoneNo,
			String email, String password, String dateOfJoin, String photo) {
	
		int status=0;
		
		
		String sqlqry="insert into student_lite(sid,name,age,dob,doj,address,college,mobile_num,email,password,photo,stu_access) values(?,?,?,?,?,?,?,?,?,?,?,?)";
		try {
			Connection con=Connector.getConnection();
			Statement stm = con.createStatement();
			ResultSet rs = stm.executeQuery("select Max(sid) sid from student_lite");
			while (rs.next()) {
				sid = rs.getInt("sid");
			}
			sid++;
			PreparedStatement ps=con.prepareStatement(sqlqry);
			ps.setInt(1, sid);
			ps.setString(2, name);
			ps.setInt(3, age);
			ps.setString(4, dob);
			ps.setString(5, dateOfJoin);
			ps.setString(6, address);
			ps.setString(7, collage);
			ps.setLong(8, phoneNo);
			ps.setString(9, email);
			ps.setString(10, password);
			ps.setString(11, photo);
			ps.setString(12, "n");
			
			status=ps.executeUpdate();
		} catch (ClassNotFoundException | IOException | SQLException e) {
			e.printStackTrace();
		}
		
		
		return status;
	}
}
