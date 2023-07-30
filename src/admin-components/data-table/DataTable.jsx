import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useMediaQuery, Typography, Button, Card, CardMedia, Avatar } from '@mui/material';
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilms } from '../../redux/selectors/selectors';
import axios from 'axios';
import { setFIlms } from "../../redux/reducers/FilmSlice";
import { useEffect, useState } from "react"
import DataTableAction from '../data-table-action/DataTableAction';
import { useNavigate } from 'react-router-dom';

export default function DataTable() {

    const columns = [
        {
            field: 'title', headerName: 'title', width: 240, renderCell: (param) => {
                return <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Avatar alt="Cindy Baker" src={param.row.image} /><Typography> {param.row.title} </Typography> </div>
            }
        },
        { field: 'year', headerName: 'year', width: 60 },
        { field: 'nation', headerName: 'nation' },
        { field: 'description', headerName: 'description', width: 590 },
        { headerName: 'action', renderCell: (param) => { return (<DataTableAction id={param.row.id} />) }, width: 200, sortable: false, filterable: false }
    ];

    const [selectedRows, setSelectedRows] = useState([]);

    const rows = useSelector(getAllFilms)

    const theme = useTheme();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const isMd = useMediaQuery(theme.breakpoints.down("sm"));

    const handleSelectionModelChange = (ids) => {
        setSelectedRows(ids);
        console.log("selectedRows: " + JSON.stringify(selectedRows));
    }

    useEffect(() => {
        axios.get("https://6475906fe607ba4797dc0b16.mockapi.io/api/products")
            .then((res) => {
                dispatch(
                    setFIlms(res.data)
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div style={{ height: "100%", width: '100%' }}>
            <Button variant='outlined' style={{ marginBottom: 10, minWidth: 110 }} onClick={() => navigate("/add")}>NEW FILM</Button><br />
            {/* <Button variant='outlined' style={{ marginBottom: 10, minWidth: 110 }}>REMOVE</Button> */}
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}

                onRowSelectionModelChange={(ids) => handleSelectionModelChange(ids)}
            />
        </div>
    );
}