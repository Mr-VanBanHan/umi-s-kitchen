//buttons
const cateringButton = document.querySelector('.Cat-item1')
const dessertsButton = document.querySelector('.Cat-item2')
const traditionalButton = document.querySelector('.Cat-item3')

const cateringCat=document.getElementsByClassName('Catering-Cat')[0];
const dessertCat=document.getElementsByClassName('Dessert-Cat')[0];
const traditionalCat=document.getElementsByClassName('Traditional-Cat')[0];


//eventlisteners

cateringButton.addEventListener('click',()=>{
    dessertCat.style.display='none';
    traditionalCat.style.display='none';
    cateringCat.style.display='grid';
    cateringButton.style.background = '#AAAA1E';
    traditionalButton.style.background = '#d9d959';
    dessertsButton.style.background = '#d9d959';
});


dessertsButton.addEventListener('click',()=>{
    cateringCat.style.display='none';
    traditionalCat.style.display='none';
    dessertCat.style.display='grid';

    cateringButton.style.background = '#d9d959';
    traditionalButton.style.background = '#d9d959';
    dessertsButton.style.background = '#AAAA1E';
});


traditionalButton.addEventListener('click',()=>{
    cateringCat.style.display='none';
    dessertCat.style.display='none';
    traditionalCat.style.display='grid';
    cateringButton.style.background = '#d9d959';
    traditionalButton.style.background = '#AAAA1E';
    dessertsButton.style.background = '#d9d959';
});