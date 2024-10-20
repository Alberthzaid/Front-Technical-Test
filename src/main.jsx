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

    axios({
      method: "POST",
      url: "https://reqres.in/api/register",
      data:{
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
    }
    )
    .then(res=> console.log(res))
    .catch(err=> console.log(err));

    // axios({
    //   method: "POST",
    //   url: " https://backend-makers.onrender.com/api/v1/gemini",
    //   data:{
    //     "prompt": "get me info on dell computers"
    // }
    // }
    // )
    // .then(res=> console.log(res))
    // .catch(err=> console.log(err));

    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';

})