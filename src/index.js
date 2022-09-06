import "./styles.css";
import { createStore, combineReducers } from "redux";

// const counterReducer = (state = 0, action) => {
//   if (action.type === "Increment") {
//     return state + 1;
//   }
//   return state;
// };

// const todoReducer = (state = [], action) => {
//   if (action.type === "todo") {
//     return [...state, "Learn Reduxx"];
//   }
//   return state;
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todoReducer
// });

// const store = createStore(rootReducer);

// console.log(store.getState());

// store.dispatch({ type: "Increment" });

// console.log(store.getState());

const counter = (state = 0, action) => {
  if (action.type === "Increment") {
    return state + 1;
  }

  if (action.type === "Decrement") {
    return state - 1;
  }

  if (action.type === "Reset") {
    return 0;
  }

  return state;
};

const store = createStore(counter);

const increment = {
  type: "Increment"
};

const decrement = {
  type: "Decrement"
};

const reset = {
  type: "Reset"
};

const count = document.createElement("div");
count.innerText = store.getState();
count.id = "count";
document.body.append(count);

const dicBtn = document.createElement("button");
dicBtn.innerText = "-";
dicBtn.onclick = () => store.dispatch(decrement);
document.body.append(dicBtn);

const incBtn = document.createElement("button");
incBtn.innerText = "+";
incBtn.onclick = () => store.dispatch(increment);
document.body.append(incBtn);

const resetBtn = document.createElement("button");
resetBtn.innerText = "reset";
resetBtn.onclick = () => store.dispatch(reset);
document.body.append(resetBtn);

const render = () => {
  document.getElementById("count").innerText = store.getState();
};

store.subscribe(render);
