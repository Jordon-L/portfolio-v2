
import 'bootstrap';

const log = document.getElementById('log');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
document.getElementById('form-contact').addEventListener("submit", function(evt) {
  contactMe();
  evt.preventDefault();
}, true);

