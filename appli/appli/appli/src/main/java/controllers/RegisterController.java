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
import javafx.scene.control.ComboBox;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class RegisterController implements Initializable {

	
	@FXML
	private TextField txt_tel;
	@FXML
	private TextField txt_lastName;
	@FXML
	private TextField txt_firstName;
	@FXML
	private TextField txt_postalCode;
	@FXML
	private TextField txt_mail;
	@FXML
	private TextField txt_login;
	@FXML
	private PasswordField txt_password;
	
	@FXML
	private ComboBox<String> cbBox_specialty;
	
	@FXML
	private Button btn_register;
	@FXML
	private Button btn_back;
	
	
	
	   public void registerAction(ActionEvent event) {
	       System.out.println("Button Clicked!");
	        Api app = new Api();
	      
	        if (app.register(txt_firstName.getText(), txt_lastName.getText(),txt_login.getText(), txt_password.getText(), cbBox_specialty.getValue(), txt_postalCode.getText(), txt_mail.getText(), txt_tel.getText())){
	        	System.out.println("Registration success");
	        	
	        }
	        	      
	   }
	public void backAction(ActionEvent event) throws IOException{
		   AnchorPane root =  FXMLLoader.load(getClass()
                   .getResource("/views/Login.fxml"));
			Scene scene = new Scene(root);
			Stage stage = (Stage) btn_back.getScene().getWindow();
			stage.setTitle("Connexion");
			stage.setScene(scene);
	   }
	
	
	public void initialize(URL location, ResourceBundle resources) {
		// TODO Auto-generated method stub
		
	}

}
