import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Typography, TableContainer } from "@mui/material";

const useStyle = makeStyles({
    create: {
        margin: 20,
        width: '80%'
    },
    table: {
        border: '1px solid rgba(224,224,224,1)',
    },
    heading: {
        fontSize: '20px',
        fontWeight: '600',
        fontFamily: 'Roboto, sans-serif',
        color: 'white'
    },
    subject: {
        fontSize: '15px',
        color: 'white',
        fontWeight: '600',
    },
    button: {
        fontWeight: 600
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    },
})

const Categories = () => {
    const classes = useStyle();
    return ( 
        <div>
            <Button variant="contained" className={classes.create}><Typography className={classes.button}><a href="/createview" style={{ color:'white' }}>Create Post</a></Typography></Button>
            <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.heading}><Link className={classes.link}to='/discuss/'>All categories </Link> <i class="fas fa-arrow-circle-right"></i></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow><TableCell className={classes.subject}>Data Structures</TableCell></TableRow>
                    <TableRow><TableCell className={classes.subject}>Wireless Networks</TableCell></TableRow>
                    <TableRow><TableCell className={classes.subject}>Operating Systems</TableCell></TableRow>
                    <TableRow><TableCell className={classes.subject}>Cyber Security</TableCell></TableRow>
                    <TableRow><TableCell className={classes.subject}>Computer Networks</TableCell></TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}
 
export default Categories;