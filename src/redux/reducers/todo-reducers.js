const initialValue = {
  todos: [],
};

export default function todosReducer(state = initialValue, action) {
  switch (action.type) {
    case "SUCCESS_GET_TODO":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}