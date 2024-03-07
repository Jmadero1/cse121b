/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName ="Jesus Madero";

const currentYear = new Date().getFullYear();


const profilePicture = "images/profile.jpeg"; 



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", `Profile image of ${fullName}`);



/* Step 5 - Array */

let favoriteFoods = ['Asado', 'Pizza', 'Chocolate', 'Mexican foods'];

foodElement.textContent = favoriteFoods.join(', ');

let newFavoriteFood = 'Pasta';

favoriteFoods.push(newFavoriteFood);

foodElement.innerHTML += `<br>${newFavoriteFood}`;

favoriteFoods.shift();

foodElement.innerHTML += `${favoriteFoods.join('<br>')}<br>`;

favoriteFoods.pop();

foodElement.innerHTML += favoriteFoods.join('<br>');









