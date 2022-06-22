import './App.css';

const Person = (props) =>{
  return (
    <>
    <h1>Name: {props.firstName}</h1> 
    <h2> Last Name: {props.lastName}</h2>
    <h2> Age : {props.age}</h2>
    </>
  )
}
const App = () =>{
  const name = 'John';
  const isNameShowing = false;
  return (
    <div className="App">
      <Person 
        firstName={'Jane'} 
        lastName='Doe' 
        age={23}
      />
      <Person lastName={'Doe'}/>
      <Person age={30}/>
      <Person firstName='Mary'/>
    </div>
  );
}

export default App;
