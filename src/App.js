import { Container, Grid } from '@material-ui/core';
import './App.css';
import Header from './Components/Layout/Header';
import FileTree from './Components/FileTree/FileTree';
import FilesBreadcum from './Components/FilesBreadcum/filesBreadcum'
import FilesView from './Components/FilesView/FilesView';
import { useEffect, useState } from 'react';
import { digInNestedObject } from './utlities/digInNestedObject';

function App() {
  const initialState = [
    {
        nodeId: "1",
        label: "Applications",
        items: [
            {
                nodeId: "2",
                label: "Calendar"
            },
            {
                nodeId: "3",
                label: "Chrome"
            },
            {
                nodeId: "4",
                label: "Webstorm"
            }
        ]
    },
    {
        nodeId: "5",
        label: "Documents",
        items: [
            {
                nodeId: "6", label: "OSS",
            }
        ]
    }

] 
const [fileStructure,setFileStructure] =  useState(initialState)
const [selectedNodeId,setSelecteNodeId] =  useState("1")
const newFolder= {
  nodeId: "100",
  label: "Documents",
  items:[]
}
const addNewFolder = ()=>{
  const cloneArr = [...fileStructure]
  
const selectedObj = cloneArr.find(file=>file.nodeId === selectedNodeId)
if(selectedObj?.nodeId){
  selectedObj.items.push(newFolder)
  setFileStructure(cloneArr)
}else {
  
}

}

  return (
    <div className="App">
   
      <Container maxWidth="lg">
        <Header addNewFolder = {addNewFolder} />
        <Grid container >
          <Grid item md={4} lg={3}>
            <FileTree selectedNodeId= {selectedNodeId} setSelecteNodeId={setSelecteNodeId} tree={fileStructure}/>
          </Grid>
          <Grid item md={8}lg={9}>
          <FilesBreadcum/>
          <FilesView/>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default App;
