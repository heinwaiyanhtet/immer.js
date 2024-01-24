import { produce } from "immer";

const baseState = 
[
    {
        title: "Learn TypeScript",
        done: true
    },
    
    {
        title: "Try Immer",
        done: false
    }
]

const nextState = produce(baseState,draftState => {

    draftState.push({title : "Tweet about it"});
    draftState[1].done = true;

});


console.log(baseState.length);
console.log(nextState.length);

console.log(baseState[1].done);
console.log(nextState[1].done);

console.log(baseState[0]);
console.log(nextState[0]);