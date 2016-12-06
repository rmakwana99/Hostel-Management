package com.rahulvivek.hostel.db;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.Part;

public class RectorData {

	public static List<Rector> getAllRector() {
		List<Rector> rectorList = new LinkedList<Rector>();

		Connection con = null;
		try {
			con = Connector.getConnection();

			Statement smt = con.createStatement();
			ResultSet rs = smt.executeQuery("select * from rector");

			while (rs.next()) {

				Blob imageBlob = rs.getBlob("photo");
				InputStream rphoto = imageBlob.getBinaryStream(0, imageBlob.length());
				Rector emp = new Rector(rs.getInt("rid"), rs.getString("name"), rs.getString("dob"),
						rs.getString("collage"), rs.getString("address"), rs.getLong("phoneno"), rs.getString("email"),
						rs.getString("password"), rs.getString("daj"), rs.getString("dol"), rphoto);

				rectorList.add(emp);
			}
			return rectorList;
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

	public static int saveRector(int rid, String name, String dob, String address, long phoneNo, String email,
			String password, String dateOfJoin, InputStream photo) {
		int status = 0;

		String sqlqry = "insert into rector(rid,name,dob,collage,address,phoneno,email,password,dojoin,dol,photo) values(?,?,?,?,?,?,?,?,?,?,?)";
		try {
			Connection con = Connector.getConnection();
			Statement stm = con.createStatement();
			ResultSet rs = stm.executeQuery("select Max(rid) rid from rector");
			while (rs.next()) {
				rid = rs.getInt("rid");
			}
			rid++;
			PreparedStatement ps = con.prepareStatement(sqlqry);
			ps.setInt(1, rid);
			ps.setString(2, name);
			ps.setString(3, dob);
			ps.setString(4, "");
			ps.setString(5, address);
			ps.setLong(6, phoneNo);
			ps.setString(7, email);
			ps.setString(8, password);
			ps.setString(9, dateOfJoin);
			if (photo != null) {
				ps.setBlob(10, photo);
			}
			

			// FileInputStream fin=new FileInputStream(photo);
			// ps.setBinaryStream(11, photo.getInputStream(), (int)
			// photo.getSize());
			// ps.setBinaryStream(11,fin,fin.available());

			status = ps.executeUpdate();
		} catch (ClassNotFoundException | IOException | SQLException e) {
			e.printStackTrace();
		}

		return status;
	}

	public static Rector getRector(int rid) {
		Rector rector = new Rector();

		Connection con = null;
		try {
			con = Connector.getConnection();

			Statement smt = con.createStatement();
			ResultSet rs = smt.executeQuery("select * from rector where rid=" + rid);

			InputStream rphoto = null;
			while (rs.next()) {
				if (rs.getBlob("photo") != null) {
					Blob imageBlob = rs.getBlob("photo");
					rphoto = imageBlob.getBinaryStream(0, imageBlob.length());
				} else

					rector = new Rector(rs.getInt("rid"), rs.getString("name"), rs.getString("dob"),
							rs.getString("college"), rs.getString("address"), rs.getLong("mobile_num"),
							rs.getString("email"), rs.getString("password"), rs.getString("doj"), rs.getString("dol"),
							rphoto);

			}
			return rector;
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

}
