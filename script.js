let container = document.getElementsByClassName("container")[0]
let btn = document.querySelectorAll(".btn")
let reset_btn = document.getElementById('reset-btn')
let list1 = [
    '🍕', '🍕',  // Pizza
    '🚀', '🚀',  // Rocket
    '🐱', '🐱',  // Cat Face
    '🏖️', '🏖️',  // Beach
    '🎮', '🎮',  // Game Controller
    '🎉', '🎉',  // Party Popper
    '🌈', '🌈',  // Rainbow
    '🐶', '🐶',  // Dog Face
    '🍔', '🍔',  // Burger
    '🎈', '🎈',  // Balloon
    '🚗', '🚗',  // Car
    '🌟', '🌟',  // Star
    '🍓', '🍓',  // Strawberry
    '🎵', '🎵',  // Musical Note
    '⚽', '⚽',  // Soccer Ball
    '🎲', '🎲',  // Dice
    '🍦', '🍦',  // Ice Cream
    '👑', '👑',  // Crown
    '🦄', '🦄',  // Unicorn
    '📚', '📚',  // Books
    '🛸', '🛸'   // UFO
];
let list2 = [
    '🍕', '🍕',  // Pizza
    '🚀', '🚀',  // Rocket
    '🐱', '🐱',  // Cat Face
    '🏖️', '🏖️',  // Beach
    '🎮', '🎮',  // Game Controller
    '🎉', '🎉',  // Party Popper
    '🌈', '🌈',  // Rainbow
    '🐶', '🐶',  // Dog Face
];
let list3 = [
    '🍕', '🍕',  // Pizza
    '🚀', '🚀',  // Rocket
    '🐱', '🐱',  // Cat Face
    '🏖️', '🏖️',  // Beach
    '🎮', '🎮',  // Game Controller
    '🎉', '🎉',  // Party Popper
    '🌈', '🌈',  // Rainbow
    '🐶', '🐶',  // Dog Face
    '🍔', '🍔',  // Burger
    '🎈', '🎈',  // Balloon
    '🚗', '🚗',  // Car
    '🌟', '🌟',  // Star
    '🍓', '🍓',  // Strawberry
    '🎵', '🎵',
]


var shuf_emojis1 = list1.sort(() => (Math.random()) > .5 ? 2 : -1)
var shuf_emojis2 = list2.sort(() => (Math.random()) > .5 ? 2 : -1)
var shuf_emojis3 = list3.sort(() => (Math.random()) > .5 ? 2 : -1)


const game  = (shuf, listlength) => {
    container.innerHTML = ''; 
    for (let i = 0; i < listlength; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'Div';
        newDiv.textContent = shuf[i];

        newDiv.onclick = function() {
            this.classList.add('boxOpen');  
            setTimeout(function() {
                const openBoxes = document.querySelectorAll('.boxOpen');
                if (openBoxes.length === 2) {
                    
                    if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                        openBoxes[0].classList.add('boxMatch');
                        openBoxes[1].classList.add('boxMatch');
                    }

                    // Remove 'boxOpen' class for both boxes, either they match or not
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');
                    
                    
                    if (document.querySelectorAll('.boxMatch').length === listlength) {
                        alert('WIN');
                    }
                }
            }, 500); 
        };

        container.appendChild(newDiv); 
    }
};

btn[0].addEventListener('click', () => {game(shuf_emojis2,list2.length) ; 
document.body.style.backgroundImage='url("img2.jpg")';


});
btn[1].addEventListener('click', () => {game(shuf_emojis3,list3.length) ; 
    document.body.style.backgroundImage='url("img1.jpg")';
   
    document.body.style.backgroundSize = 'cover'
   
    
    
    });
    btn[2].addEventListener('click', () => {game(shuf_emojis1,list1.length) ; 
        document.body.style.backgroundImage='url("img3.jfif")';
         document.body.style.backgroundSize = 'cover';
         document.body.style.backgroundRepeat = "no-repeat"
       
        
        
        });


