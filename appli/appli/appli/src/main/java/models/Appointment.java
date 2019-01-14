package models;

import java.util.ArrayList;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import controllers.Api;

public class Appointment {
	private int patientId;
	private int doctorId;
	private String appDate;
	private int appTime;
	private String comment;
	
	
	public int getPatientId() {
		return patientId;
	}


	public int getDoctorId() {
		return doctorId;
	}


	public String getAppDate() {
		return appDate;
	}


	public int getAppTime() {
		return appTime;
	}


	public String getComment() {
		return comment;
	}

	public static ArrayList<Appointment> getAppointmentsFromJson(String output) throws ParseException{
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(output);
		ArrayList<Appointment> list = new ArrayList<Appointment>();
		Appointment app = new Appointment();
		JSONArray array = (JSONArray) obj;
        @SuppressWarnings("unchecked")
		Iterator<JSONObject> iterator = array.iterator();
        while (iterator.hasNext()) {
        	app = createAppointmentFromJson(iterator.next());
        	list.add(app);
        }
		
		
		return list;
	}
	
	private static Appointment createAppointmentFromJson(JSONObject next) {
		
		Appointment app = new Appointment();
	
		JSONObject jsonObject = (JSONObject) next;
		app.doctorId = ((Long) jsonObject.get("doctorId")).intValue();
        app.patientId = ((Long) jsonObject.get("patientId")).intValue();
        app.appTime = ((Long) jsonObject.get("appTime")).intValue();
        app.appDate = (String) jsonObject.get("appDate");
        app.comment = (String) jsonObject.get("comment");
		       
		return app;
	}


	public Appointment(int patientId, int doctorId, String appDate, int appTime, String comment) {
		super();
		this.patientId = patientId;
		this.doctorId = doctorId;
		this.appDate = appDate;
		this.appTime = appTime;
		this.comment = comment;
	}

	 @Override
	    public String toString() {
		Api api = new Api(); 
		String res = "";
		 try {
			Patient patient = api.getPatientInfos(this.patientId);
			res = "Patient : "+ patient.getLastName()+ " " + patient.getFirstName() + "\n Heure du rdv : " + String.valueOf(this.appTime) + "h le " + this.appDate; 
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		 return res;
		 	
	    }
	public Appointment() {
		
	}
	
	


	public boolean saveComment(String text) {
		Api api = new Api(); 
		if(api.modifyComment(this)){
			return true;
		}
		return false; 
	}


	public void setComment(String comment) {
		this.comment = comment;
	}


	
	
	
}
