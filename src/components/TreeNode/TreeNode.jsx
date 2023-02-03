import {useState} from 'react';
import Tree from '../Tree/Tree';
import AddShot from '../AddShot/AddShot';
import DeleteShot from '../DeleteShot/DeleteShot';
import styles from './TreeNode.module.scss';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs';


export default function TreeNode({node}) {

    const {children, label, icon, iconFolder} = node;

    const [showChildren, setShowChildren] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [trash, setTrash] = useState(false);
    const handleClick = () => {
        setShowChildren(!showChildren);
    };
    const openAdd = () => {
        setShowAdd(!showAdd);

    };
    const clickTrash = () => {
        setTrash(!trash);

    };
    return (
        <>
            <div className={styles.root}>
                <span onClick={handleClick}>{icon}</span>
                <span>{iconFolder}</span>
                <span>{label}
                    <span className={styles.buttons}>
                    <AiOutlinePlusSquare onClick={openAdd}/>
                    <BsTrash onClick={clickTrash}/>
                        </span>
                </span>
                {showAdd && <AddShot/>}
                {trash && <DeleteShot/>}
            </div>

            <ul>
                {showChildren && <Tree treeData={children}/>}

            </ul>


        </>
    );
}