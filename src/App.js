import './App.css';
import AccordionPane from './components/AccordionPane';

function App() {
  return (
    <div className="App">
   
      <AccordionPane title="Title 1" initialCollapse={false}>
        <p>This is content</p>
      </AccordionPane>
      <AccordionPane title="Title 2">
        <p>gjgjhgj</p>
        </AccordionPane>
    </div>
   
  );
}

export default App;
