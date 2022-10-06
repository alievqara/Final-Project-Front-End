let slider = [
    'doc/images/img (1).png',
    'doc/images/img (2).png',
    'doc/images/img (3).png',
]

let img = document.querySelector('.slider img');
let index = 0;
img.src = slider[index];

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    index++;
    if (index < slider.length -1) {
        img.src=slider[index];
    }
    else{
        index = 0;
    }
})

prev.addEventListener('click', function(){
    index--;
    if (index === -1) {
        index = (slider.length -1);
    }
    else{
        img.src = slider[index];
    }
})


for (let index = 0; index == dots-1; index++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dots.appendChild(dot);  
}