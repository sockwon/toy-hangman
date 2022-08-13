"use strict";
const dictAPI = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const problemSet = [
    'people',  'because', 'through', 'should',  'school',  'become',
    'between', 'really',  'another', 'family',  'student', 'country',
    'problem', 'against', 'company', 'system',  'program', 'during',
    'number',  'always',  'believe', 'happen',  'without', 'before',
    'million', 'mother',  'though',  'little',  'provide', 'service',
    'around',  'friend',  'father',  'however', 'member',  'almost',
    'include', 'change',  'minute',  'several', 'nothing', 'social',
    'whether', 'follow',  'parent',  'create',  'public',  'already',
    'others',  'office',  'health',  'person',  'history', 'within',
    'result',  'morning', 'reason',  'moment',  'himself', 'teacher',
    'enough',  'across',  'second',  'toward',  'policy',  'process',
    'appear',  'market',  'expect',  'nation',  'college', 'course',
    'someone', 'behind',  'remain',  'effect',  'suggest', 'control',
    'perhaps', 'former',  'require', 'report',  'better',  'effort',
    'decide',  'strong',  'leader',  'police',  'finally', 'return',
    'explain', 'develop', 'federal', 'receive', 'action',  'season',
    'society', 'player',  'record',  'special'
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

let word = problem;
const searchDict = ()=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res)=>res.json())
    .then((data)=> {
        const temp = (data[0].meanings[0].definitions[0].definition)
        hint.innerText = temp;
    })
}


