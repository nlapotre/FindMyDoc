package controllers;


import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

import org.json.simple.parser.ParseException;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class LoginController implements Initializable {
	 
	   @FXML
	   private Button btn_login;
	   @FXML
	   private Button btn_register;
	   @FXML
	   private Button btn_quit;
	   
	   @FXML
	   private Label lbl_title;
	   @FXML
	   private Label lbl_login;
	   @FXML
	   private Label lbl_password;   
	  
	   @FXML
	   private TextField txt_login;
	   @FXML
	   private TextField txt_password;
	   
	   @FXML
	   private AnchorPane window;
	  
	   
	 
	   public void loginAction(ActionEvent event) throws IOException, ParseException {
	       System.out.println("Button Clicked!");
	        Api app = new Api();
	        int id = app.login(txt_login.getText(), txt_password.getText());
	        if (id != 0){
	        	System.out.println("Authentication success");
	        	 AnchorPane root =  FXMLLoader.load(getClass()
	                     .getResource("/views/Home.fxml"));
	  			Scene scene = new Scene(root);
	  			Stage stage = (Stage) btn_login.getScene().getWindow();
	  			stage.setTitle("Accueil");
	  			stage.setUserData(id);
	  			stage.setScene(scene);
	        	
	        }
	        	      
	   }
	   
	   public void registerAction(ActionEvent event) throws IOException{
		   AnchorPane root =  FXMLLoader.load(getClass()
                   .getResource("/views/Register.fxml"));
			Scene scene = new Scene(root);
			Stage stage = (Stage) btn_register.getScene().getWindow();
			stage.setTitle("Inscription");
			stage.setScene(scene);
	   }

	   public void quitApp(ActionEvent event){
		
		    Stage stage = (Stage) btn_quit.getScene().getWindow();
		    stage.close();
		    
	   }

	public void initialize(URL location, ResourceBundle resources) {
		// TODO Auto-generated method stub
		
		
	}
}