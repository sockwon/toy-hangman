"use strict";
const fs = require("fs");
const words = fs.readFileSync("./words.csv", 'utf-8');

const parsing = (words)=>{
    const medium = words.split("\n").join("").split("\r");
    return medium.filter((e)=>e.length>5 && e.length<8);
}

const problemSet = parsing(words);
console.log(problemSet)
const problemSetLength = problemSet.length;
const data =
[
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
    'society', 'player',  'record',  'special']