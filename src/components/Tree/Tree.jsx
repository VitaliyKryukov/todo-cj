import React from 'react';
import TreeNode from '../TreeNode/TreeNode';
import styles from './Tree.module.scss';

function Tree({ treeData }) {
    return (
        <ul className={styles.root}>
            {treeData.map((node) => (
                <TreeNode node={node} key={node.key} />
            ))}
        </ul>
    );
}

export default Tree;