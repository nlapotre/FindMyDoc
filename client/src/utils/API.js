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
      return fetch(burl + '/api/doctor/all', {},
       {headers: headers})
    },
    getAppointments : function(patientId){
      return fetch(burl + '/api/appointment/getPatientApp?patientId=' + patientId, {},
       {headers: headers});
    },
    getDoctorInfos : function(id){
       return fetch(burl + '/api/doctor/infos?id=' + id,
        {headers: headers});

    },
    createAppointment : function(send){
        return axios.post(burl + '/api/appointment/create',send,{headers: headers})
    },
    createRelation : function(send){
        return axios.post(burl + '/api/doctorPatient/create',send,{headers: headers})
    },
    isAuth : function() {
        return (localStorage.getItem('token') !== null);
    },
    logout : function() {
        localStorage.clear();
    }

}
