
let review = [ 
        {id: 1,
         namePerson : 'tarik bouari',
         job: 'Software Engineer',
        pic: '',
         text: " There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable" , 
    
        },

    {id: 1,
        namePerson : 'Brayn Tailor',
        job: 'Network Engineer',
        pic: '',
        text: " There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable" , 
        
        },
        
        {id: 1,
            namePerson : 'Dominc lapioche',
            job: 'Ux designer',
            pic: '',
            text: " There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable" , 
            
            },
            
        {id: 1,
                namePerson : 'Mamadou Konate',
                job: 'sale Engineer',
                pic: '',
                text: " There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable" , 
                
                },
            



]


// select html element

const profile = document.getElementById('profile');
const nameUser = document.getElementById('name');
const profession = document.getElementById('profession');
const description = document.getElementById('description');

const previous = document.querySelector('.prev');
const forward = document.querySelector('.forw');
const randomBtn = document.getElementById('btn');

let item = 0;

window.addEventListener('DOMContentLoaded', () =>{
    
    changePersor();


});

function changePersor(){

    reviewItem = review[item];
    nameUser.textContent = reviewItem.namePerson;
    profession.textContent = reviewItem.job;
    description.textContent= reviewItem.text;
};


    forward.addEventListener('click', (e) =>{
   e.preventDefault();
    item++;

    if( item > review.length-1){
        item = 0;
    }
    
    changePersor();
   
   

});

previous.addEventListener('click', (e) =>{
    e.preventDefault();
     item--;
 
     if( item < 0){
         item = review.length-1;
     }
     
     changePersor();
    
    
 
 });





