import { makeStyles } from '@mui/styles';
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
    }

})

const Categories = () => {
    const classes = useStyle();
    return ( 
        <div>
            <Button variant="contained" className={classes.create}><Typography className={classes.button}>Create Post</Typography></Button>
            <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.heading}>All categories <i class="fas fa-arrow-circle-right"></i></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow><TableCell className={classes.subject}>Data Structures</TableCell></TableRow>
                    <TableRow><TableCell className={classes.subject}>Dynamic Programming</TableCell></TableRow>
                    <TableRow><TableCell className={classes.subject}>Operating Systems</TableCell></TableRow>
                    <TableRow><TableCell className={classes.subject}>Binary Search</TableCell></TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}
 
export default Categories;