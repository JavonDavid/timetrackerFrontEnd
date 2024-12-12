const axios = require("axios");/* this is getting the axios libriary  */
const moment = require("moment");/* this is getting moments libriart */
defaults.baseURL = "http://localhost:3000/users";

/* fetching the  users and logging and log them in the console if data has been fetched or a error has happend*/
async function fecthUsers() {
  try {
    const responce = await axios.get(baseURL);/* this is getting the baseURL which is all our users */
    console.log(`Users fetched: `, responce.data);/* this is console logging the responce withh the data */
  } catch (error) {/* catching errors */
    console.error(`Error fetching users: `, error.responce? error.responce.data : error.massage);/* this is sending the error.responce.data to error.massage that will be log in the console */
  }
}
/* getting user by ids */
async function getUsersById(id){
  try {
    const responce = await axios.get(`${baseURL}/${id}`);/* this is getting the users by their ids */
    console.log(`User found by id`, responce.data);/* this is console logging the responce withh the data */
  }
  catch (error) {
    console.error(`Error finding user by id`, error.responce? error.responce.data : error.massage);/* this is sending the error.responce.data to error.massage that will be log in the console */
  }
}
/* updating user by id */
async function updateUser(id){
  try {
    const updateUser = {email:`javon1234@gmail.com`, password:`notsosmallman1234`};/* changes the users email and password */
    const responce = await axios.put(`http://localhost:3000/user/:id`,updateUser);/*  updating the email and password */
    console.log(`User has been updated`, responce.data); /* this is console logging the responce withh the data */
  } catch (error) {
    console.error('Error updating user',error.responce? error.responce.data : error.massage);/* this is sending the error.responce.data to error.massage that will be log in the console */
  }
}

window.getUsersById= getUsersById;
window.fecthUsers = fecthUsers;
window.updateUser= updateUser;