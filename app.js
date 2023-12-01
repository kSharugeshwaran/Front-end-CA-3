
var url = "https://www.themealdb.com/api/json/v1/1/random.php";
var data; // Define data variable outside the functions



async function fetchRandomMeal() {
    try {
        var response = await axios.get(url);
        data = response.data.meals[0];
        console.log(data);
        var container = document.getElementById("container");

        // Add "show" class to trigger the animation
        container.classList.add("show");
        var randomImage = document.getElementById("kfc");
        randomImage.src = `${data.strMealThumb}`;
        var randomName = document.getElementById("randomName");
        randomName.textContent = `${data.strMeal}`;
    } catch (error) {
        console.log(error);
    }
}

fetchRandomMeal();

var resultsDiv = document.getElementById("search_results");

async function fetchData() {
    try {
        var category = document.getElementById("category").value;
        var res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        var foods = res.data.meals;
        console.log(foods);
        resultsDiv.style.height = "400px";

        resultsDiv.innerHTML = "";
        for (let i = 0; i < foods.length; i++) {
            let searchDiv = document.createElement("div");
            searchDiv.classList.add("show");
            searchDiv.className = "item";
            let foodImage = document.createElement("img");
            foodImage.className = "foodImage";
            foodImage.src = `${foods[i].strMealThumb}`;
            let foodName = document.createElement("p");
            foodName.textContent = `${foods[i].strMeal}`;
            foodName.className = "foodName";
            let details = document.createElement("button");
            details.textContent = "ADD-INS";
            details.className = "butn";
            searchDiv.appendChild(foodImage);
            searchDiv.appendChild(foodName);
            searchDiv.appendChild(details);
            resultsDiv.appendChild(searchDiv);
        }

        var comment = document.getElementById("line2");
        comment.style.visibility = "visible";
    } catch (error) {
        console.log(error);
    }
}

var search = document.getElementById("search_icon");
search.addEventListener("click", fetchData);

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    // Check if there is valid data before opening the modal
    if (data) {
        openModal();
    } else {
        console.log("No data available.");
    }
});

var resultsDiv = document.getElementById("search_results");
var isDragging = false;
var initialMouseX;
var initialScrollX;

resultsDiv.addEventListener("mousedown", function (event) {
    isDragging = true;
    initialMouseX = event.clientX;
    initialScrollX = resultsDiv.scrollLeft;
});

document.addEventListener("mousemove", function (event) {
    if (isDragging) {
        var deltaX = event.clientX - initialMouseX;
        resultsDiv.scrollLeft = initialScrollX - deltaX;
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
});

var icon = document.getElementById("btn");
icon.addEventListener("click", openModal);

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    loadIngredients();
}

document.querySelector(".close").addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
});

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function loadIngredients() {
    var ingredientsList = document.getElementById("ingredientsList");
    ingredientsList.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        var ingredient = data[`strIngredient${i}`];
        if (ingredient) {
            var listItem = document.createElement("li");
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var section1 = document.getElementById("sec");
    section1.classList.add("show");
});

document.addEventListener("DOMContentLoaded", function() {
    // Assuming you want to add the "show" class to the search results
    var searchDiv = document.getElementById("search_results");
    searchDiv.classList.add("show");
    
    // ...

    // Add this line at the end of your fetchData function
    searchDiv.classList.add("show");
});