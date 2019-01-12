package controllers;

import java.io.IOException;
import java.net.URL;
import java.util.List;
import java.util.ResourceBundle;

import org.json.simple.parser.ParseException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;
import models.Appointment;
import models.Patient;

public class PatientListController implements Initializable {

	

	@FXML
	private ListView<Patient> lstView_patients;
	
	@FXML
	private ListView<Appointment> lstView_app;
	
	@FXML
	private Button btn_disconnect;
	@FXML
	private Button btn_patientList;
	
	@FXML
	private AnchorPane pane_appInfos;
	@FXML
	private Label lbl_patientAppList;

	
	
	
	 
	public void disconnectAction(ActionEvent event) throws IOException{
		   AnchorPane root =  FXMLLoader.load(getClass()
                   .getResource("/views/Login.fxml"));
			Scene scene = new Scene(root);
			Stage stage = (Stage) btn_disconnect.getScene().getWindow();
			stage.setTitle("Connexion");
			stage.setScene(scene);
	   }
	
	public void displayPatientList(ActionEvent event) throws ParseException {
		 Api app = new Api();
		 int doctorId = (Integer) lstView_app.getScene().getWindow().getUserData();
		 List<Patient> patientList = app.getPatients(doctorId);
		 
     
	        lstView_patients.getItems().setAll(patientList);
	        
	        btn_patientList.setVisible(false);
	        
	}
	 
	
	
	
	public void initialize(URL location, ResourceBundle resources) {
		
	}


	

}
