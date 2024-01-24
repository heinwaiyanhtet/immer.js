import { produce } from "immer";

function toggleToDo(state,id) {
    return produce(state, draft => {
        const toDo = draft.find(todo => todo.id === id);
        toDo.done = !toDo.done;
    })
}

const baseState = [

    {
        id: "JavaScript",
        title: "Learn TypeScript",
        done: true
    },

    {
        id: "Immer",
        title: "Try Immer",
        done: false
    }

]

const nextState = toggleToDo(baseState, "Immer")
console.log(nextState);