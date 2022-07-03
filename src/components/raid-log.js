import React, {useContext, useEffect, useState} from "react";
import { HashLink as Link } from "react-router-hash-link";

import { Input, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

//import Muter from "./image";

import { authContext } from '../App.js';

function Raid() {
    const auth = useContext(authContext);
    
    const url = 'https://api-hpt-blue-archive.herokuapp.com/raid/'
    const key = '22bc653308b95d5c0117528df678a7d1'

    const [data, getData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                'key':  key
            }
        })
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            getData(response)
        })
    }

    const insertRaid = async(event) =>{
        event.preventDefault();
        let raid_boss = prompt("Raid Boss :")
        let rank = prompt("Rank :")
        let point = prompt("Point :")
        let lineup = prompt("Lineup :")
        let name = auth.user.name;
        
        let status = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'key':  key
            },
            body: JSON.stringify({
                "raid_boss": raid_boss,
                "rank": rank,
                "point": point,
                "lineup": lineup,
                "member": name
            })
          })
          .then(res => res.json())
          .then(hasil => {return hasil});

        alert(status.message)
        fetchData();
    }

    const updateRaid = async (event) => {
        event.preventDefault();
        let id = event.target.id.value;
    
        //Take Current Data to Update
        fetch(url + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                key: key,
            },
        })
            .then((res) => res.json())
            .then(async (response) => {
    
                //START UPDATE
                response.map(async (item, i) => {
    
                    let raid_boss = prompt("Raid Boss :", item.raid_boss);
                    let rank = prompt("Rank :", item.rank);
                    let point = prompt("Point :", item.point);
                    let lineup = prompt("Lineup :", item.lineup);
                    let name = auth.user.name;
    
                    fetch(url, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                            key: key,
                        },
                        body: JSON.stringify({
                            id: id,
                            raid_boss: raid_boss,
                            rank: rank,
                            point: point,
                            lineup: lineup,
                            member: name,
                        }),
                    })
                        .then((res) => res.json())
                        .then((hasil) => {
                            alert(hasil.message)
                            fetchData()
                            return hasil
                        });
                });
            });
    };

    const deleteRaid = async(event) =>{
        event.preventDefault();
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', 
                'key':  key
            },
            body: JSON.stringify({
                "id": event.target.id.value
            })
            })
            .then(res => res.json())
            .then(hasil => {
                alert(hasil.message)
                fetchData();
                return hasil
            });
    }

    return(
        <header className="App-header" id="raid-log">
            <div className="raid-div">
                <ul>
                    <li className="raid-li">
                        <Link to="#" smooth>
                            Home
                        </Link> 
                    </li>
                    <ul>
                        <li>
                            <Link to="#about" smooth>
                                About
                            </Link>    
                        </li>
                        <ul>
                            <li>
                                <Link to="#image-randomizer" smooth>
                                    Image randomizer
                                </Link>  
                            </li>
                            <ul>
                                <li>
                                    <h3>Raid Log</h3>  
                                </li>
                            </ul>
                        </ul> 
                    </ul>
                </ul>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Raid Boss</TableCell>
                                <TableCell>Rank</TableCell>
                                <TableCell>Point</TableCell>
                                <TableCell>Lineup</TableCell>
                                <TableCell>Member</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/*Data Print*/}
                            {data.map((item, i) => (
                                <TableRow>
                                    <TableCell>{item.raid_boss}</TableCell>
                                    <TableCell>{item.rank}</TableCell>
                                    <TableCell>{item.point}</TableCell>
                                    <TableCell>{item.lineup}</TableCell>
                                    <TableCell>{item.member}</TableCell>
                                    <TableCell>
                                        <form onSubmit={updateRaid}><Input type="hidden" name="id" value={item.id} /><Button type="submit" variant="outlined" color="secondary">Edit</Button></form>
                                        <form onSubmit={deleteRaid}><Input type="hidden" name="id" value={item.id} /><Button type="submit" variant="outlined" color="secondary">Delete</Button></form>
                                    </TableCell>
                                </TableRow>
                            ))}

                            {/*INSERT START HERE*/}
                            <TableRow>

                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell><Button onClick={insertRaid} type="submit" variant="outlined" color="secondary">Insert</Button></TableCell>
                                
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </header>
    )
}

export default Raid;