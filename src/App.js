import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownTest from './test.md';

function App() {

  const [markdown, setmarkdown] = useState('');

  useEffect(() => {
    fetch(MarkdownTest).then((res) => res.text()).then((md) => {
        setmarkdown(md);
    });
  })
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
        <ReactMarkdown children={markdown}></ReactMarkdown>
      </header>
    </div>
  );
}

export default App;