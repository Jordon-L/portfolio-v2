
import 'bootstrap';

const log = document.getElementById('log');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
document.getElementById('form-contact').addEventListener("submit", function(evt) {
  contactMe();
  evt.preventDefault();
}, true);

function contactMe(){
  const headers = new Headers()
  headers.append("Content-Type", "application/json")
  if(name.value != '' && email.value != '' && message.value != ''){
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
    log.textContent = `Form Submitted!`;
    name.value = "";
    email.value = "";
    message.value = "";
  }
  else{
    log.textContent = `Please fill in form`;
  }
}

