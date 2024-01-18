package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {
	
	//Entity : Making Product Class as a Product Table under Database
	//Id     : Making prodId Column as a Primary Key Column
	//Column : Providing our own column name instead of variable name as the column name
	//GeneratedValue: Auto_Increment
	
	@Id@GeneratedValue
	private int prodId;			
	
	@Column(name="pname")
	private String prodName;	
	private double price;
		
	public Product() {
		super();
	}

	public Product(int prodId, String prodName, double price) {
		super();
		this.prodId = prodId;
		this.prodName = prodName;
		this.price = price;
	}

	public int getProdId() {
		return prodId;
	}
	
	public void setProdId(int prodId) {
		this.prodId = prodId;
	}

	public String getProdName() {
		return prodName;
	}
	
	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public double getPrice() {
		return price;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Product [prodId=" + prodId + ", prodName=" + prodName + ", price=" + price + "]";
	}

}