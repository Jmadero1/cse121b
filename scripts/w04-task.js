/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
/* Name */
name: "Jesus Madero",
/* Photo with attributes */
photo:"images/profile.jpeg",

/* Favorite Foods List*/
favoriteFoods: [
    'Asado',
    'Empanada',
    'Pastel de Papa',
    'Pizza',
    'Chocolate'
  ],

/* Hobbies List */
hobbies: [
    'Reading',
    'running',
    'Cooking'
  ],


/* Places Lived DataList */
placesLived: []
};

myProfile.placesLived.push({
    place: 'Maracay, Venezuela',
    length: '19 years'
  });
  
  
  myProfile.placesLived.push({
    place: 'Maracaibo, Venezuela',
    length: '2 years'
  });
  myProfile.placesLived.push({
    place: 'Mar del Plata, Argentina',
    length: '5'
  });


/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
document.getElementById("photo").src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo
document.getElementById("photo").alt = myProfile.name;

// For each favorite food in the favoriteFoods property
myProfile.favoriteFoods.forEach(food => {
  // Create an HTML <li> element
  let listItem = document.createElement("li");
  // Set the text content of the <li> element to the current favorite food
  listItem.textContent = food;
  // Append the <li> element as a child of the HTML <ul> element with an ID of favorite-foods
  document.getElementById("favorite-foods").appendChild(listItem);
});

// Repeat the previous process of creating a list of items for each hobby in the hobbies property of the object
myProfile.hobbies.forEach(hobby => {
  // Create an HTML <li> element
  let listItem = document.createElement("li");
  // Set the text content of the <li> element to the current hobby
  listItem.textContent = hobby;
  // Append the <li> element as a child of the HTML <ul> element with an ID of hobbies
  document.getElementById("hobbies").appendChild(listItem);
});

// For each object in the placesLived property
myProfile.placesLived.forEach(place => {
  // Create an HTML <dt> element
  let dt = document.createElement("dt");
  // Put the place property in the <dt> element
  dt.textContent = place.place;
  // Create an HTML <dd> element
  let dd = document.createElement("dd");
  // Put the length property in the <dd> element
  dd.textContent = place.length;
  // Append the <dt> and <dd> elements to the HTML <dl> element with an ID of places-lived
  document.getElementById("places-lived").appendChild(dt);
  document.getElementById("places-lived").appendChild(dd);
});
