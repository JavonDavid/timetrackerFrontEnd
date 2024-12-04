import axios, { defaults, get } from "axios";
const baseURL = defaults.baseURL = "http://localhost:3000/";
const id = defaults.baseURL = `http://localhost:3000/user/:id`;
/* fetching the  users and logging and log them in the console if data has been fetched or a error has happend*/
async function fecthUsers() {
  try {
    const responce = await axios.get(baseURL);
    console.log(`Users fetched: `, responce.data);
  } catch (error) {
    console.error(`Error fetching users: `, error.responce? error.responce.data : error.massage);
  }
}
async function getUsersById(id){
try {
  const responce = await axios.get(`${baseURL}/${id}`);
  console.log(`User found by id`, responce.data);
}
catch (error) {
  console.error(`Error finding user by id`, error.responce? error.responce.data : error.massage);
}
}
async function updateUser(id){
  try {
    const updateUser = {email:`javon1234@gmail.com`, password:`notsosmallman1234`};
    const responce = await axios.put(`http://localhost:3000/user/:id`,updateUser);
    console.log(`User has been updated`, responce.data); 
  } catch (error) {
    console.error('Error updating user',error.responce? error.responce.data : error.massage);
  }
}
window.getUsersById= getUsersById;
window.fecthUsers = fecthUsers;
window.updateUser= updateUser;