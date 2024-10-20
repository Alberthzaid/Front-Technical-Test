import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    
    <img src="img/person.png" class="avatar">
    </div>`;

    // PRUEBA DE POST QUE FUNCIONA

    // axios({
    //   method: "POST",
    //   url: "https://reqres.in/api/register",
    //   data:{
    //     "email": "eve.holt@reqres.in",
    //     "password": "pistol"
    // }
    // }
    // )
    // .then(res=> console.log(res))
    // .catch(err=> console.log(err));
    
     axios.post(
      "https://backend-makers.onrender.com/api/v1/gemini",
      { prompt:'Hola quiero informacion sobre un iphone 18' }
    )
    .then(res=> <span class="msg">${res.response.product_info.description}</span>)
    .catch(err=> console.log(err));
    

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})