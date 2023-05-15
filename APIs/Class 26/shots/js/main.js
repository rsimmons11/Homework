//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink() {

  let drink = document.querySelector('input').value
  drink = drink.replaceAll('&', '%26')

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks)
        document.querySelector('h2').innerText = data.drinks[1].strDrink
        document.querySelector('img').src = data.drinks[1].strDrinkThumb
        document.querySelector('.ingredient1').innerText = data.drinks[1].strMeasure1
        document.querySelector('.measure1').innerText = data.drinks[1].strIngredient1
        document.querySelector('.ingredient2').innerText = data.drinks[1].strIngredient2
        document.querySelector('.ingredient3').innerText = data.drinks[1].strIngredient3
        document.querySelector('.ingredient4').innerText = data.drinks[1].strIngredient4
        document.querySelector('.ingredient5').innerText = data.drinks[1].strIngredient5
        document.querySelector('.ingredient6').innerText = data.drinks[1].strIngredient6
        document.querySelector('.ingredient7').innerText = data.drinks[1].strIngredient7
        document.querySelector('h3').innerText = data.drinks[1].strInstructions

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

