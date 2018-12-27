import axios from 'axios';
const headers = {
    'Content-Type': 'application/json'
}
const burl = "http://localhost:3001"

export default {
    login : function(email,password) {
        return axios.post(burl + '/api/patient/login',{
            'login' : email,
            'password' : password
        },{
            headers: headers
        })
    },
    register : function(send){
        return axios.post(burl + '/api/patient/register',send,{headers: headers})
    },
    getDoctors : function(){
      return axios.get(burl + '/api/doctor/all', {}, {headers: headers})
    },
    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },
    logout : function() {
        localStorage.clear();
    }

}
