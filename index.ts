import axios from 'axios';
import './style.css';
import GMap from './map';


const form = document.querySelector('form')!;
const addressInput = document.getElementById('adress')! as HTMLInputElement;

const GOOGLE_API_KEY = '422c2369d0bc45fb6bd97194626adf20';

function searchAdressHandler(event: Event) {
  event.preventDefault();
  // const enteredAdress = addressInput.value;

  // send to google API
  // axios
  //   .get(
  //     `https://restapi.amap.com/v3/config/district?keywords=${enteredAdress}&subdistrict=2&key=${GOOGLE_API_KEY}&extensions=base`
  //   )
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log('error:', err));
}

form.addEventListener('submit', searchAdressHandler);

const iMap = GMap.getInstance();
iMap.initMap();
