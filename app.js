"use strict";
const fs = require("fs");
const words = fs.readFileSync("./words.csv", 'utf-8');

const parsing = (words)=>{
    const medium = words.split("\n").join("").split("\r");
    return medium.filter((e)=>e.length>4 && e.length<10);
}

const problemSet = parsing(words);
console.log(problemSet)

const data =
[
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