const img = document.querySelector('.slider_image');
const dots = document.querySelectorAll('.slider_dot');
const imgArr = ["img/photo.jpg","img/photo1.jpg","img/photo2.jpg"];

let currentIndex = 0;

function changeIndex(ind){
    currentIndex = ind;
    slide (currentIndex);
}

function nextIndex(index){
    currentIndex += index;
    if (currentIndex >= imgArr.length){
        currentIndex =0;
    } else if (currentIndex < 0){
        currentIndex =  imgArr.length - 1;
    }
    slide(currentIndex);
}


function slide(direction){
    img.style.display = "none";
    setTimeout( () => {
        img.style.display = "block";
    }, 0); 
    
    img.src = imgArr[direction];
    
    updateIndex(direction);
}

function updateIndex(number){
    for (let dot of dots){
        dot.classList.remove('active');
        dots[number].classList.add('active');
    }
}



/*Только для кнопок < > slide(-1)// slide(1)

function slide(direction){
    currentIndex += direction;
    if (currentIndex >= imgArr.length){
        currentIndex =0;
    } else if (currentIndex < 0){
        currentIndex =  imgArr.length - 1;
    }
    img.src = imgArr[currentIndex];
} */