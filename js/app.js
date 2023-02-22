// Load Cocktail
const loadCocktail = (search) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => displyCocktail(data.drinks))
}

const displyCocktail = (cocktails) => {
    // console.log(cocktails)
    const cocktailContainer = document.getElementById('cocktail-container');
    cocktailContainer.innerHTML = '';

    cocktails.forEach(drink => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions}</p>
                <button class="btn btn-primary">View Details</button>
                <button class="btn btn-warning">Delete</button>
            </div>
        </div>
        `;
        cocktailContainer.appendChild(div)
    });

}


document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadCocktail(searchText);
})

// Search Field Enter

document.getElementById('search-field').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const searchField = document.getElementById('search-field');
        const searchText = searchField.value;
        loadCocktail(searchText);
    }
})
// Delete button

document.getElementById('cocktail-container').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-warning')) {
        let div = event.target.parentNode.parentNode;
        div.remove();
    }
})

loadCocktail('margarita');

