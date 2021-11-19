import { makeStyles } from '@mui/styles'
import { Box, InputBase, FormControl, Button, TextareaAutosize } from '@mui/material/';
import '../../utils/css/PostView.css'
import img from '../../utils/img/undraw.svg'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: '50vh',
    },
    icon: {
        color: 'white'
    },
})

const CreateView = () => {
    const classes = useStyle();
    return ( 
        <div className="body">
            <div className='content'>
                <Box>
                    <img src={img} alt="image" className={classes.image} />
                    <FormControl style={{ display: 'flex', flexDirection: 'row', margin: '10px'}}>
                        <AddCircleRoundedIcon fontSize="large" className={classes.icon} />
                        <InputBase placeholder='Write heading here..' style={{ color: 'white', fontSize:'20px', margin: '10px', flex:'1', fontWeight:600 }}/>
                        <Button variant="contained" color="primary">Publish</Button>
                    </FormControl>
                    <TextareaAutosize
                        rowsMin={10}
                        placeholder='Provide description here'
                        style={{ width: '100%', height:'25vh', marginTop: '10px', border: 'none', fontSize: '18px', padding: '10px', backgroundColor:"#082567", color:'white'}}
                    />
                </Box>
            </div>
        </div>
    );
}
 
export default CreateView;