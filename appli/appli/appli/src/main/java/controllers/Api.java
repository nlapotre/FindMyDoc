package controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import models.Appointment;
import models.Patient;

public class Api {
	
	final String url = "http://localhost:3001/api";
	Client client = Client.create();
	
	public static void main(String[] args) throws ParseException{
		Api api = new Api();
		api.getPatients(1);
	}
	public int login(String login, String password) throws ParseException{
		WebResource webResource = this.client.resource(this.url + "/doctor/login");
 
        String input = "{\"login\":\""+login+"\",\"password\":\""+password+"\"}";
        
        ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);

        if (response.getStatus() != 200) {
            System.out.println("Failed : HTTP error code : " + response.getStatus());
            Alert alert = new Alert(AlertType.ERROR);
            //String error= response.getEntity(String.class);
       	 	alert.setTitle("Erreur de connexion");
	        alert.setHeaderText("Connexion impossible");
	        alert.setContentText("Login ou mot de passe incorrect");
	        alert.showAndWait();
            
            return 0;
        }
 
       // System.out.println("Output from Server .... \n");
        
        String output = response.getEntity(String.class);
        
        //System.out.println(output);
        JSONParser parser = new JSONParser();
		Object obj = parser.parse(output);
		JSONObject jsObj = (JSONObject) obj;
		int id = ((Long) jsObj.get("ID")).intValue();
        //String token = (String) jsObj.get("token");
        return id;
		
	}
	
	public boolean register(String firstName, String lastName, String login, String password, String specialty, String postalCode, String mail, String tel ){
		WebResource webResource = this.client.resource(this.url + "/doctor/register");
 
		//Parameters
        String input = "{\"firstName\":\""+firstName+"\",\"lastName\":\""+lastName+"\",\"login\":\""+login+"\",\"password\":\""+password+"\",\"specialty\":\""+specialty+"\",\"postalCode\":\""+postalCode+"\",\"mail\":\""+mail+"\",\"tel\":\""+tel+"\"}";
        
        ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);

        if (response.getStatus() != 201) {
            System.out.println("Failed : HTTP error code : " + response.getStatus());
            
            Alert alert = new Alert(AlertType.ERROR);
            //String error= response.getEntity(String.class);
       	 	alert.setTitle("Erreur");
	        alert.setHeaderText("Inscription impossible");
	        alert.setContentText("L'utilisateur existe déjà");
	        alert.showAndWait();
            return false;
        }
 
        //System.out.println("Output from Server .... \n");
        //String output = response.getEntity(String.class);
        //System.out.println(output);
        return true;
		
	}
	
	public List<Appointment> getAppointmentsForTheDay(String date, int doctorId) throws ParseException{
		
		
		WebResource webResource = this.client.resource(this.url + "/appointment/getDoctorAppForTheDay?doctorId="+doctorId+"&appDate="+date+"");
        ClientResponse response = webResource.type("application/json").get(ClientResponse.class);
        
        if (response.getStatus() != 201) {
            System.out.println("Failed with HTTP Error code: " + response.getStatus());
           String error= response.getEntity(String.class);
           System.out.println("Error: "+error);
            return null;
        }
        String output = response.getEntity(String.class);
        
        //System.out.println("Output from Server .... \n");
        //System.out.println(output);
        ArrayList<Appointment> list = models.Appointment.getAppointmentsFromJson(output);
       
		return list;
		
	}
	
	
public Patient getPatientInfos(int patientId) throws ParseException{
		
		
		WebResource webResource = this.client.resource(this.url + "/patient/infosFromId?id="+patientId);
		ClientResponse response = webResource.type("application/json").get(ClientResponse.class);
        
        if (response.getStatus() != 201) {
            System.out.println("Failed with HTTP Error code: " + response.getStatus());
           String error= response.getEntity(String.class);
           System.out.println("Error: "+error);
            return null;
        }
        String output = response.getEntity(String.class);
        JSONParser parser = new JSONParser();
        Object obj = parser.parse(output);
        JSONObject jsonObject = (JSONObject) obj;
        
        //System.out.println("Output from Server .... \n");
        //System.out.println(jsonObject);
       
       
		return Patient.createPatientFromJSon(jsonObject);
		
	}
public boolean modifyComment(Appointment appointment) {
	
	return false;
}
public List<Patient> getPatients(int doctorId) throws ParseException {
	WebResource webResource = this.client.resource(this.url + "/doctorPatient/getPatients?id="+doctorId);
    ClientResponse response = webResource.type("application/json").get(ClientResponse.class);
    
    if (response.getStatus() != 201) {
        System.out.println("Failed with HTTP Error code: " + response.getStatus());
       String error= response.getEntity(String.class);
       System.out.println("Error: "+error);
        return null;
    }
    String output = response.getEntity(String.class);
    
    JSONParser parser = new JSONParser();
	Object obj = parser.parse(output);
	ArrayList<Patient> list = new ArrayList<Patient>();
	JSONArray array = (JSONArray) obj;
    @SuppressWarnings("unchecked")
	Iterator<JSONObject> iterator = array.iterator();
    while (iterator.hasNext()) {
    	JSONObject res = iterator.next();
    	Patient patient = getPatientInfos(((Long) res.get("patientId")).intValue());
    	list.add(patient);
    }
	
    //System.out.println("Output from Server .... \n");
    //System.out.println(output);
    
   
	return list;
}
public List<Appointment> getPatientApp(int doctorId, int patientId) throws ParseException {
	
	WebResource webResource = this.client.resource(this.url + "/appointment/getPatientFromDoctorApp?doctorId="+doctorId+"&patientId="+patientId);
    ClientResponse response = webResource.type("application/json").get(ClientResponse.class);
    
    if (response.getStatus() != 201) {
        System.out.println("Failed with HTTP Error code: " + response.getStatus());
       String error= response.getEntity(String.class);
       System.out.println("Error: "+error);
        return null;
    }
    String output = response.getEntity(String.class);
    
    //System.out.println("Output from Server .... \n");
    //System.out.println(output);
    ArrayList<Appointment> list = models.Appointment.getAppointmentsFromJson(output);
   
	return list;
}
}
