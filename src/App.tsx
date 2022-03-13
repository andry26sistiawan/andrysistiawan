import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { HeaderHome, TableDataList } from './components';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name Repository', width: 200 },
  { field: 'private', headerName: 'Status Private', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'created_at', headerName: 'Created date', width: 130 },
  { field: 'url', headerName: 'Url', width: 500 },
  
];



export interface State  {
  listData : any;
};

export type Props = {
 
};
class App extends React.Component<Props, State>{
  constructor(props : State) {
    super(props);
    this.state = {
      listData : [],
    };
    this.handleGetListRepos = this.handleGetListRepos.bind(this);
  }

  async getListRepos(){
    let result = await fetch('https://api.github.com/users/andry26sistiawan/repos?per_page=100', {
      method: 'GET',
      headers: {},
    }); 
    let resultJson = await result.json();
    this.setState({
      listData : resultJson
    });

  }

  async handleGetListRepos(){
    await this.getListRepos();
  }
  
  async componentDidMount(){
    //await this.getListRepos();
  }

  render(){
    return(
      
      <div style={{ display:'flex', flexDirection:'column'}}>
        <HeaderHome title="List My Repositories" />
        <div style={{marginTop:'14vh', width:'100vw', flexDirection:'row', display:'flex'}}>
          <div style={{width:'100%', height:'70vh',}}>
            <div style={{marginRight:'5vh', marginBottom:'2vh', width:'100%', height:'12vh', background:'white', justifyContent:'center', alignItems:'center', display:'flex',}}>
              <Stack spacing={2} direction="row">
                <Button onClick={this.handleGetListRepos} variant="contained">Get All Repositories</Button>
              </Stack>
            </div>
            <TableDataList listData ={this.state.listData} columns={columns}/>
          </div>
        </div>
        
          
          
      </div>
      
    )
  }
}

export default App;
