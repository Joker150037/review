let array = [
    {

        profile: "img/person-1.jpg",
        name: "Susan Smith",
        jobTitle: "Web Developer",
        comment:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {

        profile: "img/person-2.jpg",
        name: "Anna Johnson",
        jobTitle: "Web Designer",
        comment: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        profile: "img/person-3.jpg",
        name: "Peter Jones",
        jobTitle: "INTERN",
        comment: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        profile: "img/person-4_t9nxjt.jpg",
        name: "Bill Anderson",
        jobTitle: "THE BOSS",
        comment: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
];
let profilePicture = document.querySelector('.card__profile');
let cardName = document.querySelector('.card__name');
let cardPosition = document.querySelector('.card__position');
let text = document.querySelector('.card__text');
let lessThen = document.querySelector('.card__less');
let graterThen = document.querySelector('.card__grater');
let button = document.querySelector('button');
let cardSyntax = document.querySelectorAll('.card__syntax');

profilePicture.src = array[0].profile;
cardName.textContent = array[0].name;
cardPosition.textContent = array[0].jobTitle;
text.textContent = array[0].comment;

button.addEventListener('click', buttonFunction);
lessThen.addEventListener('click', lessFunction);
graterThen.addEventListener('click', graterFunction);



//Funciton
function instead(index) {
    profilePicture.src = array[index].profile;
    cardName.textContent = array[index].name;
    cardPosition.textContent = array[index].jobTitle;
    text.textContent = array[index].comment;
}
function buttonFunction() {
    let index = Math.floor(Math.random() * 4);
    instead(index);
}
function lessFunction() {
    let name = cardName.textContent;
    let index = '';
    for (let i = 0; i < 4; i++) {
        if (array[i].name == (name)) {
            index = i;
        }
    }
    if (index == 0) {
        index = 3;
    } else {
        index -= 1;
    }

    instead(index);
}

function graterFunction() {
    let name = cardName.textContent;
    let index = '';
    for (let i = 0; i < 4; i++) {
        if (array[i].name == (name)) {
            index = i;
        }
    }
    if (index == 3) {
        index = 0;
    } else {
        index += 1;
    }
    instead(index);
}

