import React, { Component } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const TableData = (props : any) => {
    return (
        <div style={{flex:1, height: '70vh', width: '95%', position:'fixed', paddingLeft:'2vw'}}>
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

export default TableData;