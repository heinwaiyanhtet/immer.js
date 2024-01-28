import {immerable, produce} from "immer"


// class Foo{
//     [immerable] = true

//     constructor(){
//         this[immerable] = true
//     }
// }

class Clock{

    [immerable] = true

    constructor(hour,minute){
        this.hour = hour
        this.minute = minute
    }

    get time(){
        return `${this.hour} : ${this.minute}`
    }

    tick(){
        return produce(this,draft => {
            draft.minute ++
        })
    }
}

const clock1 = new Clock(12,10);
const clock2 = clock1.tick();

console.log(clock1.time);
console.log(clock2.time);

console.log(clock2 instanceof Clock) // true

