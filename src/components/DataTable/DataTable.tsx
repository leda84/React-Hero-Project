import React from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

const columns:GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 140
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 140
    },
    {
        field: 'alias',
        headerName: 'Alias',
        width: 140
    },
    {
        field: 'super_power',
        headerName: 'Super Power',
        width: 140
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 140
    },
    {
        field: 'comics_appeared_in',
        headerName: 'Comics Appeared In',
        width: 140
    }    
]

export const DataTable = () => {
    let {heroData, getData} = useGetData();
    return(
        <div style={{height:400, width:'100%'}}>
            <h2>Heroes In Your Collection</h2>
            <DataGrid rows={heroData} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}