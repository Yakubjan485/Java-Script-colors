// const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025", "#ccc", "#444"];

// const btn = document.getElementById("btn");

// const color = document.querySelector(".color")

// btn.addEventListener('click', function() {

//      const randomNumber = getRandomNumber();

//      document.body.style.backgroundColor = colors[randomNumber];

//      color.textContent = colors[randomNumber]
// })

// function getRandomNumber() {
//      return Math.floor(Math.random() * colors.length)
// }

 


const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025", "#ccc", "#444"];

const color = document.querySelector(".color")

const btn = document.getElementById("btn")

btn.addEventListener('click', function() {
     const randomNumber = [getRandomNumber()];

     document.body.style.backgroundColor = colors[randomNumber]

     color.textContent = colors[randomNumber]
})

function getRandomNumber() {
     return Math.floor(Math.random() * colors.length)
}
