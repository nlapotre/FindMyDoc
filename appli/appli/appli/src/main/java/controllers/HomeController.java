package controllers;

import java.io.IOException;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
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
import javafx.scene.control.TextArea;
import javafx.scene.input.MouseEvent;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;
import models.Appointment;
import models.Patient;

public class HomeController implements Initializable {

	

	@FXML
	private ListView<Appointment> lstView_app;
	
	@FXML
	private Button btn_disconnect;
	@FXML
	private Button btn_patientList;
	@FXML 
	private Button btn_appList;
	@FXML 
	private Button btn_comment;
	@FXML
	private AnchorPane pane_appInfos;
	@FXML
	private Label lbl_time;
	@FXML
	private Label lbl_lastName;
	@FXML
	private Label lbl_firstName;
	@FXML
	private Label lbl_mail;
	@FXML
	private Label lbl_tel;
	@FXML
	private Label lbl_saved;
	@FXML
	private TextArea txt_comment;
	
	
	
	 
	public void disconnectAction(ActionEvent event) throws IOException{
		   AnchorPane root =  FXMLLoader.load(getClass()
                   .getResource("/views/Login.fxml"));
			Scene scene = new Scene(root);
			Stage stage = (Stage) btn_disconnect.getScene().getWindow();
			stage.setTitle("Connexion");
			stage.setScene(scene);
	   }
	public void patientListAction(ActionEvent event) throws IOException{
		 int doctorId = (Integer) btn_patientList.getScene().getWindow().getUserData();

		AnchorPane root =  FXMLLoader.load(getClass()
                .getResource("/views/PatientList.fxml"));
			Scene scene = new Scene(root);
			Stage stage = (Stage) btn_patientList.getScene().getWindow();
			stage.setTitle("Liste des patients");
			stage.setUserData(doctorId);
			stage.setScene(scene);
	}
	public void displayAppForTheDay(ActionEvent event) throws ParseException {
		 Api app = new Api();
		 Date today = new Date();
		 DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		 String myDate = dateFormat.format(today);
		 int doctorId = (Integer) lstView_app.getScene().getWindow().getUserData();
		 System.out.println("Args = " + myDate + " | " + doctorId );
		 List<Appointment> appList = app.getAppointmentsForTheDay(myDate, doctorId);
		 
	     lstView_app.getItems().setAll(appList);
	     btn_appList.setVisible(false);
	        
	}
	 
	public void displayAppInfos(MouseEvent event) throws ParseException{
		if(lstView_app.getSelectionModel().getSelectedItem() != null){
			 Api api = new Api();
			Appointment app = lstView_app.getSelectionModel().getSelectedItem(); 
			Patient patient = api.getPatientInfos(app.getPatientId());
			lbl_time.setText("Rendez-vous de " + String.valueOf(app.getAppTime()) + "h");
			lbl_lastName.setText("Nom : " + patient.getLastName());
			lbl_firstName.setText("Prénom : " + patient.getFirstName());
			lbl_mail.setText("Mail : " + patient.getMail());
			lbl_tel.setText("Téléphone : " + patient.getTel());
			txt_comment.setText(app.getComment());


			pane_appInfos.setVisible(true);
		}
	}
	
	public void saveAction(ActionEvent event){
			lbl_saved.setVisible(true);
		  	 
	   }
	
	public void initialize(URL location, ResourceBundle resources) {
		
	}


	

}
