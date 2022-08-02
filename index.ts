import axios from 'axios';
import './style.css';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('adress')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyCIaAc2c5M3VpbCH6PPq_ guwy9lHuowXOs';

function searchAdressHandler(event: Event) {
  event.preventDefault();
  const enteredAdress = addressInput.value;

  // send to google API
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAdress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((data) => console.log(data))
    .catch((err) => console.log('error:', err));
}

form.addEventListener('submit', searchAdressHandler);
