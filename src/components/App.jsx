import Data from './data';
import './app.css';
import Tree from './components/Tree/Tree';


function App() {

    return (
        <div className="App">
            <Tree Data={Data}/>
        </div>
    );
}

export default App;
