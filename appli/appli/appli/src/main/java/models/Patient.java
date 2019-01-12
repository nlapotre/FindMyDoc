package models;

import org.json.simple.JSONObject;

public class Patient {
	
	int id; 
	String firstName;
	String lastName;
	String mail;
	String tel; 
	String postalCode;
	public Patient(int id, String firstName, String lastName, String mail, String tel, String postalCode) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mail = mail;
		this.tel = tel;
		this.postalCode = postalCode;
	}
	
	
	public static Patient createPatientFromJSon(JSONObject obj){
		int id = ((Long) obj.get("id")).intValue();
		String firstName = (String) obj.get("firstName");
		String lastName = (String) obj.get("lastName");
		String mail = (String) obj.get("mail");
		String tel = (String) obj.get("tel"); 
		String postalCode= (String) obj.get("postalCode");
		return new Patient(id, firstName, lastName, mail, tel, postalCode);
	}


	public int getId() {
		return id;
	}


	public String getFirstName() {
		return firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public String getMail() {
		return mail;
	}


	public String getTel() {
		return tel;
	}


	public String getPostalCode() {
		return postalCode;
	}
}
