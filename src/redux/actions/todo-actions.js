import axios from "axios";

export function getTodo() {
  return async function (dispatch) {
    const { data } = await axios(
      "https://6524c553ea560a22a4ea1537.mockapi.io/todo"
    );
    dispatch(successGetTodo(data));
  };
}

function successGetTodo(data) {
  return {
    type: "SUCCESS_GET_TODO",
    payload: data,
  };
}

export const addTodo = (newTodo) => async (dispatch) => {
  await axios.post("https://6524c553ea560a22a4ea1537.mockapi.io/todo", newTodo);

  dispatch(getTodo());
};

export const deleteTodo = (deleteTodoId) => async (dispatch) => {
  await axios.delete(
    `https://6524c553ea560a22a4ea1537.mockapi.io/todo/${deleteTodoId}`
  );
  dispatch(getTodo());
};

export const updateTodoStatus = (todoId, updatedTodo) => async (dispatch) => {
  await axios.put(
    `https://6524c553ea560a22a4ea1537.mockapi.io/todo/${todoId}`,
    updatedTodo
  );
  dispatch(getTodo());
};

export const editTodoValue = (todoId, newTodoValue) => async (dispatch) => {
  await axios.put(
    `https://6524c553ea560a22a4ea1537.mockapi.io/todo/${todoId}`,
    newTodoValue
  );
  dispatch(getTodo());
};
