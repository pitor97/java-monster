const searchMeal = () => {
  const Arrabiata = document.getElementById("search-input").value;
  const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${Arrabiata} `;
  fetch(url)
    .then((res) => res.json())
    .then((meals) => displayMeals(meals.meals));
}

const displayMeals = meals => {
  
  const foodContainerDiv = document.getElementById("foodName");
  meals.forEach(meal => {
   // console.log(meal);
    const foodDiv = document.createElement("div");
    foodDiv.className = "recipe";

    const foodInfo = ` <h3 class="food-name">${meal.strMeal} </h3>
    <p class="countryName">${meal.strArea} </p>
    <div class="col-md-3 text-md-right text-center">
    <button onclick="detailInfo('${meal.strMeal}','${meal.strArea}')" class="btn btn-success">Detail</button>
</div>
    `;
    foodDiv.innerHTML = foodInfo;
    foodContainerDiv.appendChild(foodDiv);

    
  });

}
const detailInfo =(mealName, origin)=>{
 const url = ` https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast${origin} `
fetch(url)
.then(res => res.json())
.then(data => displayDetail(data))

}

const displayDetail = detail =>{
  const detailInfoDiv = document.getElementById('detaiInfobox')
  detailInfoDiv.innerText = detail;
}