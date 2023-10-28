import axios from "axios";

const initialValue = {
    todos: [],
}

export default function todosReducer(state = initialValue, action){
    switch(action.type){
        case "SUCCESS_GET_TODO":
            return {
                ...state,
                todos: action.payload
            }
        default: return state;
    }
}

export function getTodo(){
    return async function (dispatch) {
        const {data} = await axios("https://6524c553ea560a22a4ea1537.mockapi.io/todo");
        dispatch(successGetTodo(data));
    }
}

function successGetTodo(data) {
    return {
        type: "SUCCESS_GET_TODO",
        payload: data
    }
}

export const addTodo = (newTodo) => async (dispatch) => {
  await axios.post("https://6524c553ea560a22a4ea1537.mockapi.io/todo", newTodo)

  dispatch(getTodo())
}