const openMsg = document.querySelector('#openMsg')
const closeMsg = document.querySelector('#closeMsg')
const messages = document.querySelector('.messages')

openMsg.addEventListener('click' , ()=>{
    messages.style.transform = "translate(-50%, -50%)  scale(100%)";
});

closeMsg.addEventListener('click' , ()=>{
    messages.style.transform = "translate(-50%, -50%)  scale(0%)";
});