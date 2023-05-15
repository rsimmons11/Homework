//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

const choice = Math.floor(Math.random() * 484735)

console.log(choice)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.primaryImageSmall
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}