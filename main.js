// set variables
let adviceText=document.getElementById('advice');
let adviceId=document.querySelector('.advice_id');
let dice=document.querySelector('.diceRandom');
let url='https://api.adviceslip.com/advice';



//set the fetch
function clickMe(){
    console.log('hello');
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    adviceText.innerText=" " + `${data.slip.advice}` + '';
    adviceId.innerText=`${data.slip.id}`;
  
  })
}
  
  dice.addEventListener('click',clickMe)
  window.addEventListener('load',clickMe)

// => console.log(data))