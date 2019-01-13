package controllers;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.ResourceBundle;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
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
	
	private String mailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$";
	private String textRegex = "[a-zA-Z]+";
	private String numericTextRegex = "[a-zA-Z0-9]+";
	private String telRegex = "[0-9]{10}";
	private String postalCodeRegex = "[0-9]{5}";

	
	
	
	   public void registerAction(ActionEvent event) throws IOException {
	       System.out.println("Button Clicked!");
	        Api app = new Api();
	        
	        if(txt_mail.getText().matches(mailRegex) && txt_firstName.getText().matches(textRegex) && txt_lastName.getText().matches(textRegex) && txt_tel.getText().matches(telRegex) && txt_login.getText().matches(numericTextRegex) && txt_password.getText().matches(numericTextRegex) && txt_postalCode.getText().matches(postalCodeRegex) && cbBox_specialty.getValue()!= null){
	        	 if(app.register(txt_firstName.getText(), txt_lastName.getText(),txt_login.getText(), txt_password.getText(), cbBox_specialty.getValue(), txt_postalCode.getText(), txt_mail.getText(), txt_tel.getText())==true){
	 	        	System.out.println("Registration success");
	 	        	Alert alert = new Alert(AlertType.INFORMATION);
	 	        	alert.setTitle("Information");
	 	        	alert.setHeaderText("Inscription réussie !");
	 	        	alert.setContentText("Vous allez être redirigé vers la page de connexion");
	 	           	alert.showAndWait();
	 	           AnchorPane root =  FXMLLoader.load(getClass()
	 	                   .getResource("/views/Login.fxml"));
	 				Scene scene = new Scene(root);
	 				Stage stage = (Stage) btn_back.getScene().getWindow();
	 				stage.setTitle("Connexion");
	 				stage.setScene(scene);
	 	        	
	 	        }else{
	 	        	System.out.println("Registration failor");
	 	        }
	        }
	        else{
	        	Alert alert = new Alert(AlertType.ERROR);
	        	alert.setTitle("Erreur");
	 	        alert.setHeaderText("Inscription impossible");
	 	        alert.setContentText("Vérifiez les informations saisies");
	 	        alert.showAndWait();
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
		ArrayList<String> specialties= new ArrayList<String>(); 
		specialties.add("Généraliste");
		specialties.add("Dentiste");
		specialties.add("Kinésithérapeute");
		specialties.add("Chirurgien");
		cbBox_specialty.getItems().addAll(specialties);
		cbBox_specialty.setValue("Généraliste");
				
	}

}
