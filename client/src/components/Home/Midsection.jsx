import { ImageURL } from "../../constants/NavData"
import { Box,makeStyles,Grid } from '@material-ui/core'


const useStyle = makeStyles(theme=>({
    wrapper: {
        display: 'flex',
        marginTop: 20,
     justifyContent:'space-between'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120,

        }
    }
}))
const Midsection = () => {
    const classes = useStyle()
    const coronaURL = 'https:rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid container lg={12} md={12} sm={12} xs={12}className={classes.wrapper}>

            {
                    ImageURL.map(img => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={img}  style={{width:`100%`}}/>
                            </Grid>
                ))
            }
            </Grid>
            <img src={coronaURL} style={{width:`100%` ,marginTop:'10px'}} className={classes.help} />
            </>
    )
}

export default Midsection
