const mush= document.querySelector('.mushroom');
const dis= document.querySelector('.display');
const it= document.querySelector('.item');
const it2= document.querySelector('.item2');
const it3= document.querySelector('.item3');
let current= 0;
let counter= 0;
let ith= 0;
let ith2= 0;
let ith3= 0;
let have= 0;

mush.addEventListener('click', inc);

window.onload= display();

function display(){
    dis.innerHTML= 'Score: ' + counter;
};

function spawn(){
    rando= Math.floor(Math.random() * 100);
    if(rando < 80){
        current= 0;
        inc();
    }else{
        current= 5;
        inc();
    };
};

function inc(){
    switch(current){
        //orange
        case 0:
            mush.src= 'Images/0.png';
            current= 1;
            break;
        case 1:
            mush.src= 'Images/1.png';
            current= 2;
            break;
        case 2:
            mush.src= 'Images/2.png';
            current= 3;
            break;
        case 3:
            mush.src= 'Images/1.png';
            current= 4;
            break;
        case 4:
            mush.src= 'Images/0.png';
            counter++;
            display();
            drop();
            spawn();
            break;
        //blue
        case 5:
            mush.src= 'Images/3.png';
            current= 6;
            break;
        case 6:
            mush.src= 'Images/4.png';
            current= 7;
            break;
        case 7:
            mush.src= 'Images/5.png';
            current= 8;
            break;
        case 8:
            mush.src= 'Images/4.png';
            current= 9;
            break;
        case 9:
            mush.src= 'Images/3.png';
            counter+= 2;
            display();
            drop();
            spawn();
            break;
    };
};

function drop(){
    rdrop= Math.floor(Math.random() * 100);
    if(rdrop < 50 && ith== 0){
        it.src= 'Images/blank.jpg';
        have++;
        ith= 1;
        aut();
    };
    if(rdrop < 25 && ith2== 0){
        it2.src= 'Images/blue.jpg';
        have+= 2;
        ith2= 1;
        aut2();
    };
    if(rdrop < 5 && ith3== 0){
        it3.src= 'Images/red.jpg';
        have+= 3;
        ith3= 1;
        aut3();
    };
};

function aut(){
    setInterval(function(){
        counter++;
        display();
    }, 1000);
};

function aut2(){
    setInterval(function(){
        counter+= 5;
        display();
    }, 1000);
};

function aut3(){
    setInterval(function(){
        counter+= 10;
        display();
    }, 1000);
};