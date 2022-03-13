import React, { Component } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const TableData = (props : any) => {
    return (
        <div style={styles.container}>
          <DataGrid
            rows={props.listData}
            columns={props.columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
    );
}

const styles = {
  container: {
    flex:1, 
    height: '70vh', 
    width: '95%', 
    position:'fixed', 
    paddingLeft:'2vw'
  },
} as const;


export default TableData;