package controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import javax.ws.rs.core.MediaType;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.sun.jersey.api.client.WebResource.Builder;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.GenericType;
import com.sun.jersey.api.client.WebResource;

import models.Appointment;

public class Api {
	
	final String url = "http://localhost:3001/api";
	Client client = Client.create();
	
	public static void main(String[] args) throws ParseException{
		Api api = new Api();
		List<Appointment> list = api.getAppointmentsForTheDay("14/11/2019", 1);
	}
	public int login(String login, String password) throws ParseException{
		WebResource webResource = this.client.resource(this.url + "/doctor/login");
 
		//Parameters
        String input = "{\"login\":\""+login+"\",\"password\":\""+password+"\"}";
        
        ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);

        if (response.getStatus() != 200) {
            System.out.println("Failed : HTTP error code : " + response.getStatus());
            
            String error= response.getEntity(String.class);
            System.out.println("Error: "+error);
            return 0;
        }
 
        System.out.println("Output from Server .... \n");
        
        String output = response.getEntity(String.class);
        
        System.out.println(output);
        JSONParser parser = new JSONParser();
		Object obj = parser.parse(output);
		JSONObject jsObj = (JSONObject) obj;
		int id = ((Long) jsObj.get("ID")).intValue();
        String token = (String) jsObj.get("token");
        return id;
		
	}
	
	public boolean register(String firstName, String lastName, String login, String password, String specialty, String postalCode, String mail, String tel ){
		WebResource webResource = this.client.resource(this.url + "/doctor/register");
 
		//Parameters
        String input = "{\"firstName\":\""+firstName+"\",\"lastName\":\""+lastName+"\",\"login\":\""+login+"\",\"password\":\""+password+"\",\"specialty\":\""+specialty+"\",\"postalCode\":\""+postalCode+"\",\"mail\":\""+mail+"\",\"tel\":\""+tel+"\"}";
        
        ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);

        if (response.getStatus() != 201) {
            System.out.println("Failed : HTTP error code : " + response.getStatus());
            
            String error= response.getEntity(String.class);
            System.out.println("Error: "+error);
            return false;
        }
 
        System.out.println("Output from Server .... \n");
        
        String output = response.getEntity(String.class);
        
        System.out.println(output);
        return true;
		
	}
	
	public List<Appointment> getAppointmentsForTheDay(String date, int doctorId) throws ParseException{
		
		ClientConfig clientConfig = new DefaultClientConfig();
		 
	      // Create Client based on Config
	      Client client = Client.create(clientConfig);
		WebResource webResource = this.client.resource(this.url + "/appointment/getDoctorAppForTheDay?doctorId="+doctorId+"&appDate="+date+"");
		 
		
        
        /*Builder builder = webResource.accept(MediaType.APPLICATION_JSON) 
                .header("content-type", MediaType.APPLICATION_JSON);
   */
        ClientResponse response = webResource.type("application/json").get(ClientResponse.class);
        
        if (response.getStatus() != 201) {
            System.out.println("Failed with HTTP Error code: " + response.getStatus());
           String error= response.getEntity(String.class);
           System.out.println("Error: "+error);
            return null;
        }
        String output = response.getEntity(String.class);
        
        System.out.println("Output from Server .... \n");
        System.out.println(output);
        ArrayList<Appointment> list = models.Appointment.getAppointmentsFromJson(output);
        
        Iterator<Appointment> iterator = list.iterator(); 
        while(iterator.hasNext()){
        	Appointment app = iterator.next();
        	System.out.println(app.getPatientId());
        }
   
       
		return list;
		
	}
}
