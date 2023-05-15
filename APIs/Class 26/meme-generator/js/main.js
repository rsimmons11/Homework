//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.imgflip.com/get_memes'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.data.memes.length)
        console.log(data.data.memes)
        console.log(data.data.memes[randomIndex])
        document.querySelector('h2').innerText = data.data.memes[randomIndex].name
        document.querySelector('img').src = data.data.memes[randomIndex].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}