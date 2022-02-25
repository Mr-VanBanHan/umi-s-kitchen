const carouselSlide= document.querySelector('.carousel-slide');
const carouselImages= document.querySelectorAll('.carousel-slide img');




//Buttons
const prevBtn= document.querySelector('#prevbutton');
const nextBtn= document.querySelector('#nextbutton');

let counter = 1;
const size= carouselImages[0].clientWidth;
console.log(carouselImages[0]);
console.log(carouselImages[0].clientWidth);

carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';



//event listeners//
nextBtn.addEventListener('click',()=>{
    if (counter >= carouselImages.length-1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
}
);

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';
    console.log((-size * counter));
}
);


carouselSlide.addEventListener('transitionend',()=> {
    if(carouselImages[counter].id ==='Carou-last'){
        carouselSlide.style.transition='none';
        counter= carouselImages.length -2;
        carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';

    };
    if(carouselImages[counter].id ==='Carou-first'){
        carouselSlide.style.transition='none';
        counter= carouselImages.length -counter;
        carouselSlide.style.transform = 'translateX('+(-size * counter) + 'px)';

    };

});
