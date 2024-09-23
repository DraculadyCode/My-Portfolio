import { useReducer } from "react";

// Styles
import "./App.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "a":
      return {
        ...state,
        a: state.a.filter((student) => student.id !== action.payload.id),
        b: [...state.b, action.payload]
      };

    case "b":
      return {
        ...state,
        b: state.b.filter((student) => student.id !== action.payload.id),
        a: [...state.a, action.payload]
      };

    default:
      return state; // Return the current state by default
  }
};

const initialState = {
  a: [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Luke" },
    { id: 4, name: "Maria" }
  ],
  b: []
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const moveStudentToB = (student) => {
    dispatch({
      type: "a",
      payload: student
    });
  };

  const moveStudentToA = (student) => {
    dispatch({
      type: "b",
      payload: student
    });
  };

  return (
    <div className="wrapper">
      <div data-testid="classroom-A">
        <h2>Classroom A</h2>
        {state.a.map((student) => (
          <div data-testid={student.name} key={student.id} className="student">
            <span>{student.name}</span>
            <button onClick={() => moveStudentToB(student)}>Move to B</button>
          </div>
        ))}
      </div>

      <div data-testid="classroom-B">
        <h2>Classroom B</h2>
        {state.b.map((student) => (
          <div data-testid={student.name} key={student.id} className="student">
            <span>{student.name}</span>
            <button onClick={() => moveStudentToA(student)}>Move to A</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

// ~ Old code, doesnt work
// import { useReducer, useState } from "react";
// import React from "react";
// // Styles
// import "./App.scss";
// import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "a":
//       // const movingStudentA = state.a.find(
//       //   (student) => student.id === action.payload
//       // );
//       return {
//         ...state,
//         a: state.a.filter((student) => student.id !== action.payload),
//         b: [
//           ...state.b,
//           state.a.filter((student) => student.id !== action.payload)
//         ]
//       };

//     case "b":
//       // const movingStudentB = state.b.find(
//       //   (student) => student.id === action.payload
//       // );
//       return {
//         ...state,
//         b: state.b.filter((student) => student.id !== action.payload),
//         a: [
//           ...state.a,
//           state.b.filter((student) => student.id !== action.payload)
//         ]
//       };
//     default:
//       return state;
//   }
// };

// const initialState = {
//   a: [
//     { id: 1, name: "John" },
//     { id: 2, name: "Mary" },
//     { id: 3, name: "Luke" },
//     { id: 4, name: "Maria" }
//   ],
//   b: []
// };

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [lastMovedStudent, setLastMovedStudent] = useState(null);

//   function handleMove(type, student) {
//     dispatch({ type, playload: student.id });
//     setLastMovedStudent(student.name);
//   }
//   return (
//     <div className="wrapper">
//       <div data-testid="classrom-A">
//         <h2>Classroom A</h2>
//         {state.a.map((student) => (
//           <div data-testid={student.name} key={student.id} className="student">
//             <span>{student.name}</span>
//             <button onClick={() => handleMove("a", student)}>Move to B</button>
//           </div>
//         ))}
//       </div>

//       <div data-testid="classrom-B">
//         <h2>Classroom B</h2>
//         {state.b.map((student) => (
//           <div data-testid={student.name} key={student.id} className="student">
//             <span>{student.name}</span>
//             <button onClick={() => handleMove("b", student)}>
//               Move to A{" "}
//               {lastMovedStudent === student.name && `(${student.name})`}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
