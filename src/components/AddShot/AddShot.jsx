import styles from './AddShot.module.scss';
import {AiOutlineClose, AiOutlinePlusSquare} from 'react-icons/ai';


function AddShot() {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <AiOutlinePlusSquare/>
                    <h3> Add shot</h3>
                    <AiOutlineClose/>
                </div>
                <div className={styles.main}>
                    <p>Enter the name:</p>
                    <div className={styles.finish}>
                        <input type="" placeholder="INF_0020"/>
                        <button><AiOutlinePlusSquare/> Add Shot</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddShot;
