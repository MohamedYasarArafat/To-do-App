import "./App.css";
import { useState } from "react";

function App() {
  const [currentVal, setcurrentVal] = useState("");
  const [todoList, setTodoList] = useState([]);

  console.log(todoList);

  return (
    <div className="App">
      <header className="App-header">
        <p className="todo-heading">TO DO APPLICATION</p>
      </header>
      <body>
        <div className="todo-form">
          <input
            type="text"
            id="desc"
            name="desc"
            className="todo-input"
            placeholder="Enter..."
            value={currentVal}
            onChange={(e) => setcurrentVal(e.target.value)}
          />
          <button
            className="todo-btn"
            onClick={() => {
              if (
                todoList?.length &&
                (todoList || []).find((t) => {
                  return t?.desc?.trim() === currentVal?.trim();
                })
              ) {
                setcurrentVal("");
                return alert("Duplicate value not allowed");
              } else if (currentVal?.trim() === "") {
                setcurrentVal("");
                return alert("Empty value not allowed");
              }
              let obj = {
                id: todoList?.length
                  ? todoList[0]?.id + 1
                  : 1,
                desc: currentVal,
              };
              setTodoList([...todoList, obj]);
              setcurrentVal("");
            }}
          >
            +
          </button>
        </div>
        <div className="list-text">
          {(
            todoList.sort((a, b) => {
              if (a.id > b.id) {
                return -1;
              }
            }) || []
          ).map((item) => {
            return (
              <>
                <div className="todo-label-text">
                  <div className="todo-text" key={item.id}>
                    {item.desc}
                  </div>
                  <div>
                    <button
                      className="todo-close-btn"
                      onClick={() => {
                        const filterVal = (todoList || []).filter((l) => {
                          return l?.id !== item.id;
                        });
                        setTodoList(filterVal);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </body>
    </div>
  );
}

export default App;
