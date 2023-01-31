import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownTest from './test.md';
import testBib from "./test.bib";
// import {parseBibFile} from "bibtex";
import {BibtexParser} from "bibtex-js-parser";

function App() {

const [markdown, setmarkdown] = useState('');
const [bibText, setbibText] = useState('');
 
// const bibFile = parseBibFile(`
 
// @InProceedings{mut2011,
//   author    = {Pradeep Muthukrishnan and Dragomir Radev and Qiaozhu Mei},
//   title     = {Simultaneous Similarity Learning and Feature-Weight Learning for Document Clustering},
//   booktitle = {Proceedings of TextGraphs-6: Graph-based Methods for Natural Language Processing},
//   month     = {June},
//   year      = {2011},
//   address   = {Portland, Oregon},
//   publisher = {Association for Computational Linguistics},
//   url       = {http://www.aclweb.org/anthology/W11-1107},
//   pages = {42--50}
// }
// `);

useEffect(() => {
  fetch(MarkdownTest).then((res) => res.text()).then((md) => {
      setmarkdown(md);
  });
  fetch(testBib).then((res) => res.text()).then((bib) => {
    console.log(bib);
    console.log(BibtexParser.parseToJSON(bib), BibtexParser.parseToJSONString(bib));
    setbibText(bib);
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
        <ReactMarkdown children={bibText}></ReactMarkdown>
        <ReactMarkdown children={markdown}></ReactMarkdown>
      </header>
    </div>
  );
}

export default App;