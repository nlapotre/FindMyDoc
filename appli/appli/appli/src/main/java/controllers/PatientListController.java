package controllers;

import java.io.IOException;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.ResourceBundle;

import org.json.simple.parser.ParseException;

import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.control.TextArea;
import javafx.scene.input.MouseEvent;
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
		 
		 Iterator<Patient> iterator = patientList.iterator(); 
	     
	        lstView_patients.getItems().setAll(patientList);
	        
	        btn_patientList.setVisible(false);
	        
	}
	 
	public void displayPatientApps(MouseEvent event) throws ParseException{
		if(lstView_app.getSelectionModel().getSelectedItem() != null){
			 Api api = new Api();
			Appointment app = lstView_app.getSelectionModel().getSelectedItem(); 
			Patient patient = api.getPatientInfos(app.getPatientId());
			

			pane_appInfos.setVisible(true);
		}
	}
	
	
	public void initialize(URL location, ResourceBundle resources) {
		
	}


	

}
