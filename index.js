fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
.then((res) => res.json())
.then(data =>{
  const meal = displayMeals(data.meals)


})

const displayMeals = meals =>{
  
  const foodContainerDiv = document.getElementById("foodName")
  meals.forEach(meal => {
    const foodDiv =document.createElement("div");
    foodDiv.className='recipe'

    const foodInfo = ` <h3 class="food-name">${meal.strIngredient} </h3>
    `
    foodDiv.innerHTML= foodInfo
    foodContainerDiv.appendChild(foodDiv);


  });
  
}



const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button")
put.addEventListener('keyup', (e) =>{
  const searchSting = e.target.value;
const filteredMeal =  meal.filter(meals => {
  return  mealsName.contain(searchSting)
  })
  console.log(filteredMeal);
})
const mealsName = document.getElementById("foodName")
let meal =mealsName
console.log(searchInput);


