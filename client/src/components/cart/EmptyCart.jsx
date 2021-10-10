import {Link} from 'react-router-dom'
import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from 'react-router';
const useStyle = makeStyles(theme=>({
    component: {
        width: `100%`,
        height: `100vh`,
        marginTop: 85,
        display: 'flex',
        justifyContent: 'center',
    },
    card: {
        width: `70%`,
        minHeight: `40%`,
        [theme.breakpoints.down('md')]: {
           height:`50%`
          }
    }
    , image: {
        width: `20%`,
        [theme.breakpoints.down('md')]: {
            height: `30%`,
                width:`30%`
           }
    },
    button: {
        marginTop: 20,
        padding: '12px 70px',
        borderRadius: 2,
        fontSize: 14,
        background: '#2874f0',
        color: '#fff',
        [theme.breakpoints.down('md')]: {
            height: `10%`,
            width: `40%`,
            padding:0,
           }
    }, mycart: {
        marginRight: `90%`, fontSize: 20, fontWeight: 600, marginTop: 10,
        [theme.breakpoints.down('md')]: {
            height: `10%`,
            width: `40%`,
            padding:5,
           }
    }
}));

const EmptyCart = () => {
    const history = useHistory();
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classses = useStyle();
    return (
        <div className={classses.component}>
            <Card className={classses.card}>
                <Typography style={{}} className={classses.mycart}>MY Cart </Typography>
                <img src={emptycarturl} className={classses.image} />
                <Typography>Your cart is empty!</Typography>
                <Typography>Add Items to it now</Typography>
                <Link to='/' style={{textDecoration:'none',}}>
                <Button variant='contained' className={classses.button}>Shop now</Button>
                </Link>
            </Card>
        </div>
    )
}

export default EmptyCart
