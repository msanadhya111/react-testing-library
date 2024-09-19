import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*
To Run the test cases file in React we have the script in package.json file with the name 

test: "react-scripts test"
After running this scripts it will gives us the option what to do
Like run all test and many others

To write the test cases in React we follows 3 A's

A -> Arrange -> render the component
A -> Act -> means button click and all
A -> Assert -> Assert the result


screen gives us the access to the code and got imported from @testing-library/react,
render also imported from the same library and helps us to load the component

Any method with the name get gives us the error if not succeed
Any method starts with query don't gives us the error
Any method with find gives us the promise
*/
