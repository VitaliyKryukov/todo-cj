import treeData from '../treeData';
import Tree from './Tree/Tree';
import styles from './App.module.scss';


function App() {
    return (
        <div className={styles.wrapper}>
            <Tree treeData={treeData}/>
        </div>
    );
}

export default App;