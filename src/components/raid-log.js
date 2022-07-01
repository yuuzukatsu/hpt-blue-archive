import React, {useContext} from "react";
import { HashLink as Link } from "react-router-hash-link";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Input } from '@mui/material';

//import Muter from "./image";

import { authContext } from '../App.js';

function Raid() {
    const auth = useContext(authContext);
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
                            {
                                auth.user ? (
                                <ul>
                                    <li>
                                        <h3>Raid Log</h3>  
                                    </li>
                                </ul>
                                ) : (
                                <ul>
                                    <li>
                                        <h3>Raid Log</h3>  
                                    </li>
                                </ul>
                                )
                            }
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
                                <TableCell>Team</TableCell>
                                <TableCell>Member</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Binah</TableCell>
                                <TableCell>1356</TableCell>
                                <TableCell>13450000</TableCell>
                                <TableCell>Cherino, Akane, Maki, S.Azusa, Ako, Karin</TableCell>
                                <TableCell>Yz</TableCell>
                                <TableCell>Update, Delete</TableCell>
                            </TableRow>
                            {/*INSERT START HERE*/}
                            <TableRow>
                                <TableCell><Input name="raidboss" type="text" required/></TableCell>
                                <TableCell><Input name="rank" type="number" required/></TableCell>
                                <TableCell><Input name="point" type="number" required/></TableCell>
                                <TableCell><Input name="team" type="text" required/></TableCell>
                                <TableCell><Input name="member" type="text" value="Yz" disabled/></TableCell>
                                <TableCell>Insert</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </header>
    )
}

export default Raid;