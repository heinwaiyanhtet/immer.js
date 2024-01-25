import { produce } from "immer";


const todosObj = {
    id1: {done: false, body: "Take out the trash"},
    id2: {done: false, body: "Check Email"}
}

const addedTodosObj = produce(todosObj, draft =>  {
    draft["id3"] = {done:false,body : "Buy bananas"}
})


const deletedTodosObj = produce(todosObj, draft => {
    delete draft["id1"]
})

const updatedTodosObj = produce(todosObj, draft => {
    draft["id1"].done = true
})

console.log(addedTodosObj);