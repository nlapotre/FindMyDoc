package controllers;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class Api {
	
	final String url = "http://localhost:3001/api";
	Client client = Client.create();
	
	
	public boolean login(String login, String password){
		WebResource webResource = this.client.resource(this.url + "/doctor/login");
 
		//Parameters
        String input = "{\"login\":\""+login+"\",\"password\":\""+password+"\"}";
        
        ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);

        if (response.getStatus() != 200) {
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
}
