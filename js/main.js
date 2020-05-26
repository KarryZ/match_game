
/*

1.Функция старта игры берет сложность из инпута,
запускает игру  и запускает таймер отсчета

2. Сохранить в константы уровень сложность и картинки с картами

3. Сделать функцию isEqual(card) которая будет сравнивать карты

4. Ф-я переворота карт forceTurn(){ this._isOpen = !this._isOpen;}

5. Ф-я проверки открыта ли карта get isOpen(){ return this._isOpen}

6.Ф-я проверки закончена ли игра 
*/


const submitRegist = document.getElementById("submit-regist");
     

let userFistName = document.getElementById('first-name');
let userLastName = document.getElementById('last-name');
let userMail = document.getElementById('email');



let users = JSON.parse(localStorage.getItem("users") || "[]");
let lastUser =  users[users.length-1];




class User{
    constructor(firstName, lastName, mail, timeGameSec, standartTime){
        this.firstName = firstName.value || 'anonym';
        this.lastName = lastName.value|| 'anonym';
        this.mail = mail.value;
				this.timeGameSec = timeGameSec;
				this.standartTime = standartTime;
			  this.id = Math.floor(Math.random() * 1000000);
        this.currentLevel = currentLevel;
   }
}

 function showlastUserName(){
     const divUser = document.getElementById('player-name');
     
     let textName = userFistName.value || 'anonym';
     
     divUser.appendChild(document.createTextNode(textName));
}


// save new user in local storage
 function saveUser (timeGameSec, standartTime){
   
	 let newUser = new User(userFistName, userLastName, userMail, timeGameSec, standartTime);
    users.push(newUser);
    
    localStorage.setItem("users", JSON.stringify(users));
   
};





// In regist block show active shirt
const shirtExample = document.getElementsByClassName('shirt-example');

for (let y = 0; y < shirtExample.length; y++){
    shirtExample[y].addEventListener('click', shirtChose, true);
};

function shirtChose(e) {
		let elem = e.target;
    
    for (let q = 0; q < shirtExample.length; q++) {
        shirtExample[q].classList.remove('shirt-active')
    }
	if(elem.parentElement.className == 'shirt-example'){
		elem.parentElement.classList.toggle('shirt-active');
	}
    
}



const adventureTimeArr = [
    {id: 'adventureTime1',img:'img/adventureTime/160x215/1.png'  },
    {id: 'adventureTime2', img:'img/adventureTime/160x215/2.png' },
    {id: 'adventureTime3', img:'img/adventureTime/160x215/3.png' },
    {id: 'adventureTime4', img:'img/adventureTime/160x215/4.png' },
    {id: 'adventureTime5', img:'img/adventureTime/160x215/5.png' },
    {id: 'adventureTime6', img:'img/adventureTime/160x215/6.png' },
    {id: 'adventureTime7', img:'img/adventureTime/160x215/7.png' },
    {id: 'adventureTime8', img:'img/adventureTime/160x215/8.png' },
    {id: 'adventureTime9', img:'img/adventureTime/160x215/9.png' },
    {id: 'adventureTime10', img:'img/adventureTime/160x215/10.png' },
    {id: 'adventureTime11', img:'img/adventureTime/160x215/11.png' },
    {id: 'adventureTime12', img:'img/adventureTime/160x215/12.png' },
   ];
const happyTreeFriendsArr = [
    {id: 'happyThree1', img: 'img/happyTreeFriends/160x215/1.png'},
    {id: 'happyThree2', img: 'img/happyTreeFriends/160x215/2.png'},
    {id: 'happyThree3', img: 'img/happyTreeFriends/160x215/3.png'},
    {id: 'happyThree4', img: 'img/happyTreeFriends/160x215/4.png'},
    {id: 'happyThree5', img: 'img/happyTreeFriends/160x215/5.png'},
    {id: 'happyThree6', img: 'img/happyTreeFriends/160x215/6.png'},
    {id: 'happyThree7', img: 'img/happyTreeFriends/160x215/7.png'},
    {id: 'happyThree8', img: 'img/happyTreeFriends/160x215/8.png'},
    {id: 'happyThree9', img: 'img/happyTreeFriends/160x215/9.png'},
    {id: 'happyThree10', img: 'img/happyTreeFriends/160x215/10.png'},
    {id: 'happyThree11', img: 'img/happyTreeFriends/160x215/11.png'},
    {id: 'happyThree12', img: 'img/happyTreeFriends/160x215/12.png'}
]
const southParkArr = [
    {id: 'south1', img:'img/SouthPark/160x215/1.png'},
    {id: 'south2', img:'img/SouthPark/160x215/2.png'},
    {id: 'south3', img:'img/SouthPark/160x215/3.png'},
    {id: 'south4', img:'img/SouthPark/160x215/4.png'},
    {id: 'south5', img:'img/SouthPark/160x215/5.png'},
    {id: 'south6', img:'img/SouthPark/160x215/6.png'},
    {id: 'south7', img:'img/SouthPark/160x215/7.png'},
    {id: 'south8', img:'img/SouthPark/160x215/8.png'},
    {id: 'south9', img:'img/SouthPark/160x215/9.png'},
    {id: 'south10', img:'img/SouthPark/160x215/10.png'},
    {id: 'south11', img:'img/SouthPark/160x215/11.png'},
    {id: 'south12', img:'img/SouthPark/160x215/12.png'}
];

const adventureTimeShirt = 'img/adventureTime/cover-l.png';
const happyTreeFriendsShirt = 'img/happyTreeFriends/cover.png';
const southParkShirt = 'img/SouthPark/cover.png';
    
const startLevel = 1;
const middleLevel = 2;
const hardLevel = 3;

let currentLevel = startLevel;
let currentImageCardArr = adventureTimeArr;


let currentShirt = adventureTimeShirt;


//change game level to player choice
let UserChoiceLevelDiv = document.getElementById('UserChoiceLevel');

UserChoiceLevelDiv.addEventListener('click', getUserChoiceLevel);

function getUserChoiceLevel (e) {
	let clickedElem = e.target;
	currentLevel = +(clickedElem.getAttribute('data-value'));
	
	let LevelItems = UserChoiceLevelDiv.querySelectorAll('.level-item');
	    
    for (let index2 = 0; index2 < LevelItems.length; index2++) {
        LevelItems[index2].classList.remove('level-active');
    }
	
		clickedElem.classList.toggle('level-active');
	
	
 };








// Save user choice image shirt, image array
for (let x = 0; x < shirtExample.length; x++){
    shirtExample[x].addEventListener('click', getUserChoiceCards);
};

function getUserChoiceCards (e) {
   
  let  currentItem = e.target;
	
    if (currentItem.className == 'adventureTime') {
        currentShirt = adventureTimeShirt;
				currentImageCardArr = adventureTimeArr;
			
	}
    if (currentItem.className == 'happyTreeFriends') {
        currentShirt = happyTreeFriendsShirt;
				currentImageCardArr = happyTreeFriendsArr;
			
	}
    if (currentItem.className == 'southPark') {
        currentShirt = southParkShirt;
				currentImageCardArr = southParkArr;
		  	
	}
};




// mix cards
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
   
  return array;
}


let usersCurrentLevelScore;

function sortUsersForScore(){
if(currentLevel == startLevel){
	usersCurrentLevelScore = users.filter(function callback(currentValue, index) { 
    return users[index].currentLevel == startLevel;
		}).sort(function(a, b) {
  		return a.timeGameSec - b.timeGameSec;
});
}
	
	if(currentLevel == middleLevel) {
		 	usersCurrentLevelScore = users.filter(function callback(currentValue, index) { 
    return users[index].currentLevel == middleLevel;
		}).sort(function(a, b) {
  		return a.timeGameSec - b.timeGameSec;
});

}

	
		if(currentLevel == hardLevel) {
		 	usersCurrentLevelScore = users.filter(function callback(currentValue, index) { 
    return users[index].currentLevel == hardLevel;
		}).sort(function(a, b) {
  		return a.timeGameSec - b.timeGameSec;
});
	}

	
	addUsersScoreToTable(usersCurrentLevelScore);
};

function addUsersScoreToTable(usersCurrentLevelScore){
	const scoreTable = document.querySelector('.congratulations ol');
	if(usersCurrentLevelScore.length > 10){
		usersCurrentLevelScore.length = 10;
	}; 
	
	for(let index1 = 0; index1 < usersCurrentLevelScore.length; index1++){
		
		let li = document.createElement('li');
		
		let spanNum = document.createElement('span');
		spanNum.classList.add('number-win');
		spanNum.appendChild(document.createTextNode(index1+1));
		li.appendChild(spanNum);
		
		let spanLogin = document.createElement('span');
		spanLogin.classList.add('login');
		spanLogin.appendChild(document.createTextNode(usersCurrentLevelScore[index1].firstName));
		li.appendChild(spanLogin);
		
		let spanTime = document.createElement('span');
		spanTime.classList.add('time');
		spanTime.appendChild(document.createTextNode(usersCurrentLevelScore[index1].standartTime));
		li.appendChild(spanTime);
		
		scoreTable.appendChild(li);
		
	}
	
}

									




function StartGame (){
	  showCardsCurrentLevel();
    
    
    // hide regist block
    const startContent = document.getElementById('game-settings');
    startContent.classList.add('game-settings-hide');
		
  // show game block  
    const gameContainer = document.getElementById('game-container');
    gameContainer.classList.toggle('show');
	
	
	startTimer();
	showlastUserName();

}

const startGameButton = document.getElementById('startButton');

startGameButton.addEventListener('click', StartGame);





// show Cards Current Level and  add current shirt to cards 
		let currentCard;
    const startLevelContainer = document.getElementById('start-level');
    const middleLevelContainer = document.getElementById('middle-level');
    const hardLevelContainer = document.getElementById('hard-level');

		const startLevelDivItems = startLevelContainer.querySelectorAll('.card');
    const middleLevelDivItems = middleLevelContainer.querySelectorAll('.card');
    const hardLevelDivItems = hardLevelContainer.querySelectorAll('.card');

function showCardsCurrentLevel () {

    if (currentLevel == startLevel){
       [].forEach.call(startLevelDivItems, (el) => el.firstElementChild.firstElementChild.setAttribute('src', currentShirt)); 
       startLevelContainer.classList.toggle('show-container');
       currentCard = startLevelDivItems;
			 currentImageCardArr.length = 5;
   }
    if (currentLevel == middleLevel){
        [].forEach.call(middleLevelDivItems, (el) => el.firstElementChild.firstElementChild.setAttribute('src', currentShirt)); 
        middleLevelContainer.classList.toggle('show-container');
        currentCard = middleLevelDivItems;
				currentImageCardArr.length = 9;
   }
    if (currentLevel == hardLevel){
        [].forEach.call(hardLevelDivItems, (el) => el.firstElementChild.firstElementChild.setAttribute('src', currentShirt)); 
       hardLevelContainer.classList.toggle('show-container'); 
       currentCard = hardLevelDivItems;
			currentImageCardArr.length = 12;
   }
    
    

    
// loop to add event listeners to each card
for (var i = 0; i < currentCard.length; i++){
    currentCard[i].addEventListener("click", rotateCards);
    currentCard[i].addEventListener("click", cardOpen);
    currentCard[i].addEventListener("click", congratulations);
};
    
    currentImageCardArr = shuffle(currentImageCardArr);
    appendImagesToHTML(currentCard);
}











// show and close clicked cards
 function rotateCards () {
     let containerCard = this;
     containerCard.classList.add('rotate');
     containerCard.classList.add('no-pointer');
 }

//вставка
function appendImagesToHTML(currentCard) {
    // нужно добавить в  currentCard[i] перемешанный элемент из текущего массива  
  				 let newCurrentImageCardArr = currentImageCardArr.slice(0).concat(currentImageCardArr);
					newCurrentImageCardArr = shuffle(newCurrentImageCardArr);
	
					let index = 0;
         [...currentCard].forEach(function (el) {
					 function add(){
					 let img = document.createElement('img');
            img.setAttribute('src', newCurrentImageCardArr[index].img);
            img.setAttribute('name', newCurrentImageCardArr[index].id);
            el.lastElementChild.appendChild(img);
            index++;
				 };
        if (index < newCurrentImageCardArr.length) {
            add();
        }
	
});
																	
}
// array for opened cards

let openedCards = [];

// add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this.lastElementChild.lastElementChild);
    var len = openedCards.length;
    if(len === 2){
      if(openedCards[0].name === openedCards[1].name){
            matched();
        } else {
            unmatched();
        }
    }
};



// when cards match
function matched(){
    openedCards[0].parentElement.parentElement.classList.add("match");
    openedCards[1].parentElement.parentElement.classList.add("match");
    disable()
	
	setTimeout(function(){
        openedCards[0].parentElement.parentElement.classList.add("disabled");
        openedCards[1].parentElement.parentElement.classList.add("disabled");
				enable();
				openedCards = [];
    },800);
    
}


// when cards don't match
function unmatched(){
    openedCards[0].parentElement.parentElement.classList.add("unmatched", 'no-pointer');
    openedCards[1].parentElement.parentElement.classList.add("unmatched", 'no-pointer');
    disable();
    setTimeout(function(){
        openedCards[0].parentElement.parentElement.classList.remove('unmatched', "rotate");
        openedCards[1].parentElement.parentElement.classList.remove('unmatched', "rotate");
        enable();
        openedCards = [];
    },600);
}


//  disable cards temporarily
function disable(){
    [...currentCard].filter(function(currentCard){
        currentCard.classList.add('no-pointer');
    });
}

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");
// enable cards and disable matched cards
function enable(){
    [...currentCard].filter(function(currentCard){
        currentCard.classList.remove('no-pointer');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("no-pointer");
        }
    });
};




//game timer
//function startTimer(){
//   
//  const clock = document.getElementById('player-time');
//  let _start = new Date(0000, 0, 0, 0, 0, 0, 000);
//  let timerId;
//  
//  
//  function update() {
//    _start.setSeconds(_start.getSeconds() + 1);
//
//    let minutes = _start.getMinutes();
//    if (minutes < 10) minutes = '0' + minutes;
//
//    clock.children[0].innerHTML = minutes;
//
//    let seconds = _start.getSeconds();
//    if (seconds < 10) seconds = '0' + seconds;
//
//    clock.children[1].innerHTML = seconds;
//  }
//
//    if (!timerId) {
//      // записываем значение нашего таймера в переменную
//      timerId = setInterval(update, 1000);
//    
//  };
//
//}

let second = 0, minute = 0; hour = 0; 
let timer = document.querySelector("#player-time");
let congratulationsTime = document.querySelector('.congratulations-time');
let interval;

function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+" : "+second;
		    second++;
			
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    
		},1000);
}



//reset timer
function stopTimer () {
    second = 0;
    minute = 0; 
    hour = 0;
    let timer = document.querySelector(".player-time");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}








// congratulations when all cards match, show modal and result score
function congratulations(){
    if (matchedCard.length == currentCard.length){
        clearInterval(interval);
        let finalTime = timer.innerHTML;
				congratulationsTime.appendChild(document.createTextNode(finalTime));
				let standartTime = finalTime;
			
        	let bits = finalTime.split(':');
        	let toSecondsTime =  +bits[0] * 60 + +bits[1];
       
			
			saveUser(toSecondsTime, standartTime);
      sortUsersForScore();  
      

        //showing time 
        //document.getElementById("totalTime").innerHTML = finalTime;

        const cardArea =  document.querySelector('.game-cards-area');
				cardArea.classList.add('hide');
				
				const congratulationContainer = document.querySelector('.congratulations');
				congratulationContainer.classList.add('show-congratulation');

    };
}


// close icon on modal
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}






















































