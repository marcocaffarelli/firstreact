// importato react e lo state
import React, {useState} from 'react';

// importato il file Post.js
import Post from './FacebookPost'

//importato lo style App.css
import './App.css';

//funzione app
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }

  const [posts] = useState([
    {author:"Pippo", description:"Primo props"},
    {author:"Pluto", description:"La vita da programmatore"},
    {author:"Paperino", description:"La vita secondo React"},

  ]);

  
  
  return (
    <div className="container">
      <h1 className="titolo">Primo esercizio con React</h1>
      <div className="contatore">
        <h3>counter: {count}</h3>
        <button onClick={increment}>Aumenta</button>
      </div>

      <div className="post">
        {posts.map((post, index)=>
          (
            <Post key={index} author={post.author} description={post.description} />
          ))}
      </div>
      
    </div>

  );
}

export default App;
