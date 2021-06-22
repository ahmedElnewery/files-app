import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import FileIcon from '../UI/FileIcon/FileIcon';
import styles from './FilesView.module.scss';
const initialState = [
    {
        id: "1",
        type: "img",
        name: "hello.png"
    },
    {
        id: "2",
        type: "img",
        name: "hello.png"
    }, {
        id: "3",
        type: "img",
        name: "hello.png"
    }, {
        id: "4",
        type: "img",
        name: "hello.png"
    }, {
        id: "5",
        type: "img",
        name: "hello.png"
    }, {
        id: "6",
        type: "img",
        name: "hello.png"
    }, {
        id: "7",
        type: "img",
        name: "hello.png"
    }, {
        id: "8",
        type: "img",
        name: "hello.png"
    }, {
        id: "9",
        type: "img",
        name: "hello.png"
    }, {
        id: "10",
        type: "img",
        name: "hello.png"
    }, {
        id: "11",
        type: "img",
        name: "hello.png"
    }, {
        id: "12",
        type: "img",
        name: "hello.png"
    }, {
        id: "13",
        type: "img",
        name: "hello.png"
    },
]
const FilesView = () => {
    const [files, setfiles] = useState(initialState)
    return (
        <div className={styles.filesViewWapper}>
    
                {files.map(file =>
                        <FileIcon key={file.id} name={file.name} type={file.type} />
                )}
        </div>

    );
}

export default FilesView;