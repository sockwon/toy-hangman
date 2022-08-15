"use strict";
const problemSet = [
        'their',    'would',    'about',   'there',     'think',     'which',
        'people',   'could',    'other',   'these',     'first',     'because',
        'thing',    'those',    'woman',   'through',   'child',     'after',
        'should',   'world',    'school',  'still',     'three',     'state',
        'never',    'become',   'between', 'really',    'something', 'another',
        'family',   'leave',    'while',   'student',   'great',     'group',
        'begin',    'country',  'where',   'problem',   'every',     'start',
        'might',    'American', 'against', 'place',     'again',     'company',
        'system',   'right',    'program', 'question',  'during',    'small',
        'number',   'always',   'night',   'point',     'believe',   'today',
        'bring',    'happen',   'without', 'before',    'large',     'million',
        'under',    'water',    'write',   'mother',    'national',  'money',
        'story',    'young',    'month',   'different', 'study',     'though',
        'business', 'issue',    'black',   'little',    'house',     'since',
        'provide',  'service',  'around',  'friend',    'important', 'father',
        'until',    'power',    'often',   'political', 'among',     'stand',
        'however',  'member',   'almost',  'include'
        ]

const problemSetLength = problemSet.length
const number = Math.floor((Math.random()*problemSetLength));
const problem = problemSet[number]
let life = problem.length + 5
const problemInPage = new Array(problem.length).fill("_")

const indexProblem = document.getElementById("problem")
const indexLife = document.getElementById("life");
const hint = document.getElementById("hint");
const gameOver = document.getElementById("gameOver");
const score = document.getElementById("score");
let word = problem;

const showLife =(alife)=>{
    indexLife.innerText = alife;
}

const showProblem =()=>{
    indexProblem.innerText = problemInPage.join(" ");
}

const setScore=(value)=>{
    return sessionStorage.setItem("score" , String(value));
}

const getScore=()=>{
    return sessionStorage.getItem('score');
}

const searchDict =()=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res)=>res.json())
    .then((data)=> {
        let str="";
        const temp = data[0].meanings[0].definitions
        const abc = temp.map((e)=>`${str+"\n"+e.definition}`)
        hint.innerText = abc
        return 
    })
}

showProblem();

showLife(life);

const userInput = document.getElementById("userInput");
const answer = problem.split("");

if(getScore()){
    score.innerText = `SCORE : ${getScore()}`;
}else{
    score.innerText = `SCORE : ${null}`;
}

console.log(answer, getScore());

const compare=()=>{

    if(life <= 0) return;
    for(let i=0; i<problem.length; i++){
        if(userInput.value === answer[i]){
            problemInPage[i] = userInput.value;
        }
    } 

    userInput.value = null;
    life--;
    
    showLife(life);
    showProblem();

    if(!problemInPage.includes("_")){
        gameOver.innerText = "YOU WIN"
        life += Number(getScore());
        setScore(life);
        score.innerText = `SCORE : ${getScore()}`;
        return;
    }

    if(life<=0){
        indexProblem.innerText = answer.join(" ")
        gameOver.innerText = "GAME OVER"
    }

}