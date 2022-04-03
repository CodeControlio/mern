import './App.css';
import Form from'./components/Form/Form'
import Posts from './components/Posts/Posts' 

function App() {
  return (
    <div className="App">
      <h1>Add Your Posts</h1>
      <Form />
      <Posts />
    </div>
  );
}

export default App;
