const CryptoJS = require('crypto-js');

const apiPublicKey = '1a474926da72792abd3aaa848f5c8f86'
const apiPrivateKey = 'd3d920ba790ba5b84abed8cfebbabed638a59851'

const baseUrl = 'https://gateway.marvel.com/v1/public/characters?';
const timestamp = new Date().getTime();
const hash = CryptoJS.MD5(timestamp + apiPrivateKey + apiPublicKey).toString()
console.log(hash);

// const auth = `&apikey=${apiPublicKey}&ts=${timestamp}&hash=${hash}`;
// const url = `${baseUrl}${auth}`;

// document.querySelector('button').addEventListener('click', getFetch)

// const timestamp = new Date().getTime();
// let hash = `${timestamp}c5a656d4696d62c92ced4a6b56f3d9d0`
// const auth = `&apikey=${apiPublicKey}&ts=${timestamp}&hash=${hash}`;

// function getFetch(){
  // const choice = document.querySelector('input').value

  // const url = `${baseUrl}${auth}`;


  // fetch(url)
  //   .then(res => res.json()) // parse response as JSON
  //   .then(data => {
  //     console.log(data)
  //   })

//     .catch(err => {
//       console.log(`error ${err}`)
//     });
// }



// const CryptoJS = require('crypto-js');
// const message = 'Hello, world!';
// const hash = CryptoJS.MD5(message).toString();

// console.log(hash);
