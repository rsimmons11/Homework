//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://api.disneyapi.dev/character?name='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data)
        document.querySelector('h2').innerText = data.data[1].name
        document.querySelector('img').src = data.data[1].imageUrl
        data.data[0].films.forEach(obj => { 
          console.log(obj)
          const li = document.createElement('li')
          li.textContent = obj
          document.querySelector('ul').appendChild(li)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}