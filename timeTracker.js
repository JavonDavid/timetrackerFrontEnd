const axios = require("axios");
axios.defaults.baseURL = "http://localhost:3000/";
/* checks user input and if the email and password inputs are empty */
function returnText() {
  /* gets the value of the email and password from inputs */
  const email = document.getElementById(`email`).value.trim();
  const password = document.getElementById(`password`).value.trim();
  /* checking if the user left email and password empty */
  if (!email || !password) {
    return console.log("User has not enter there email or password");
  }
}
/* fetching the  users and logging and log them in the console if data has been fetched or a error has happend*/
async function fecthUsers() {
  try {
    const responce = await axios.get(`http://localhost:3000/users`);
    console.log(`Users fetched: `, responce.data);
  } catch (error) {
    console.error(`Error fetching users: `, error.massage);
  }
}
window.fecthUsers = fecthUsers;
window.returnText = returnText;