package controllers;

import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Scene;
import javafx.scene.control.Button;

import javafx.scene.control.ListView;

import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;
import models.Appointment;

public class HomeController implements Initializable {

	

	@FXML
	private ListView<Appointment> lstView_app;
	
	@FXML
	private Button btn_disconnect;
	@FXML
	private Button btn_patientList;
	
	
	
	 
	public void disconnectAction(ActionEvent event) throws IOException{
		   AnchorPane root =  FXMLLoader.load(getClass()
                   .getResource("/views/Login.fxml"));
			Scene scene = new Scene(root);
			Stage stage = (Stage) btn_disconnect.getScene().getWindow();
			stage.setTitle("Connexion");
			stage.setScene(scene);
	   }
	


	public void initialize(URL location, ResourceBundle resources) {
		// TODO Auto-generated method stub
		
	}


	

}
