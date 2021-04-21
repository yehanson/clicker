const mush= document.querySelector('.mushroom');
const hp= document.querySelector('.healthBar');
const d= document.querySelector('.dmgBar');
const dis= document.querySelector('.display');
const it= document.querySelector('.item');
const it2= document.querySelector('.item2');
const it3= document.querySelector('.item3');
const imgO= [
    'Images/0.png',
    'Images/1.png',
    'Images/2.png',
    'Images/1.png',
    'Images/0.png'
];
const imgB= [
    'Images/3.png',
    'Images/4.png',
    'Images/5.png',
    'Images/4.png',
    'Images/3.png'
];
let position= 0;
let maxhealth= 50;
let curhealth= 50;
let colour= 0;
let dmg= 1;
let ith= 0;
let ith2= 0;
let ith3= 0;

window.onload= display();

setInterval(move, 300);

function move(){
    if(colour== 0){
        if (position <= 4){
            mush.src= imgO[position];
            position++;
        }else{
            position= 0;
        };
    };
    
    if(colour== 1){
        if (position <= 4){
            mush.src= imgB[position];
            position++;
        }else{
            position= 0;
        };
    };
};

function display(){
    hp.innerHTML= 'HP: ' + curhealth + ' / ' + maxhealth;
    d.innerHTML= 'Damage: ' + dmg;
};

mush.addEventListener('click', hit);

function hit(){
    curhealth= curhealth - dmg;
    display();
    if(curhealth <= 0){
        spawn();
        drop();
    };
};

function spawn(){
    rando= Math.floor(Math.random() * 100);
    if(rando < 80){
        colour= 0;
        maxhealth= 50;
        curhealth= 50;
        display();
    }else{
        colour= 1;
        maxhealth= 100;
        curhealth= 100;
        display();
    };
};

function drop(){
    dropchance= Math.floor(Math.random() * 100);
    if(dropchance < 80 && ith== 0){
        it.src= 'Images/iron.png';
        dmg+= 1;
        ith= 1;
        display();
    };
    
    dropchance2= Math.floor(Math.random() * 100);
    if(dropchance2 < 50 && ith2== 0){
        it2.src= 'Images/black.png';
        dmg+= 3;
        ith2= 1;
        display();
    };
    
    dropchance3= Math.floor(Math.random() * 100);
    if(dropchance3 < 30 && ith3== 0){
        it3.src= 'Images/mithril.png';
        dmg+= 5;
        ith3= 1;
        display();
    };
};