package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Restaurant {
	@Id
	@GeneratedValue
	private int id;
	private String address;
	private String name;
	private String photograph;
	private String lat;
	private String lng;
	private String tags;
	private String ETA;
	private String rating;
	private Boolean addedFav;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhotograph() {
		return photograph;
	}
	public void setPhotograph(String photograph) {
		this.photograph = photograph;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLng() {
		return lng;
	}
	public void setLng(String lng) {
		this.lng = lng;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public String getETA() {
		return ETA;
	}
	public void setETA(String eTA) {
		ETA = eTA;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	public Boolean getAddedFav() {
		return addedFav;
	}
	public void setAddedFav(Boolean addedFav) {
		this.addedFav = addedFav;
	}
	
	
}
