import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

// class MyForm extends React.Component {
//   render() {
//     return (
//       <form>
//         <h1>Create an account</h1>
//         <label>Enter your name:</label><br></br>
//         <input type="text"/><br></br>
//         <label>Enter your name:</label><br></br>
//         <input type="text"/><br></br>
//         <label>Enter your name:</label><br></br>
//         <input type="text"/><br></br>
//         <label>Enter your name:</label><br></br>
//         <input type="text"/><br></br>
//         <label>Enter your name:</label><br></br>
//         <input type="text"/><br></br>
//         <label>Enter your name:</label><br></br>
//         <input type="text"/><br></br>
//         <label>Enter your name:</label><br></br>
//         <input type="text"/>

//       </form>
//     );
//   }
// }

// ReactDOM.render(
// <MyForm />, 
// document.getElementById('root')
// );

// export default MyForm;