import './style.css'

const log = document.getElementById('log');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
document.getElementById('form-contact').addEventListener("submit", function(evt) {
  contactMe();
  log.textContent = `Form Submitted!`;
  name.value = "";
  email.value = "";
  message.value = "";
  evt.preventDefault();
}, true);

function contactMe(){
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  console.log(message.value)
  const body = {
    "name": name.value,
    "email": email.value,
    "message": message.value
  }
  
  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
  }
  
  fetch("https://eof3acbu78ad7fd.m.pipedream.net", options)
}

