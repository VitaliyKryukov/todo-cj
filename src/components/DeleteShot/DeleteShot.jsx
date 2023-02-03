import styles from './DeleteShot.module.scss';
import {AiOutlineClose, AiOutlinePlusSquare} from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs';

function DeleteShot() {

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <AiOutlinePlusSquare/>
                    <h3>Delete sequence</h3>
                    <AiOutlineClose/>
                </div>
                <div className={styles.main}>
                    <div className={styles.text}>
                        <p>The sequence <strong> INFC </strong>and related objects will be permanently deleted
                            and cannot be restored. <br/>
                            <br/>Are you sure you want to continue?</p>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.cancel}>Cancel</button>
                        <button className={styles.delete}><BsTrash/> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteShot;
