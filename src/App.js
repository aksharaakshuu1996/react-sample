import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import SampleClass from './SampleClass';

function App() {
  const user = {
 firstName:"Test ",
 lastName:"user",
  };

  const name="Anju";
  const showfulName =()=> {
    return <h1>{user.firstName + "" + user.lastName}</h1>

  }

  return <div>
    hello world
    <p className="full-name">{showfulName()}</p>
  <Sample user={user}/> 
    <SampleClass name={name} user={user} />


  </div>;
}




  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );


export default App;
