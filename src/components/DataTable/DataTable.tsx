import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button, 
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { HeroForm } from '../../components';

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

interface gridData {
    data: {
        id?: string;
    }
}

export const DataTable = () => {
    let {heroData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])
    let handleOpen = () =>{
        setOpen(true)
    }
    let handleClose = () =>{
        setOpen(false)
    }
    let deleteData = async () => {
        await server_calls.delete(`${gridData[0]}`)
        getData()
    }
    console.log(gridData) //to see the list of boxes that have been checked

    return(
        <div style={{height:400, width:'100%'}}>
            <h2>Heroes In Your Collection</h2>
            <DataGrid rows={heroData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={(newSelectionModel)=>{setData(newSelectionModel);}}  {...heroData}/>
            <Button onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='success' onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Update a Hero</DialogTitle>
                <DialogContent>
                    <DialogContentText>Updating:{gridData[0]}</DialogContentText>
                    <HeroForm id={`${gridData[0]}`}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{backgroundColor:'goldenrod'}}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}