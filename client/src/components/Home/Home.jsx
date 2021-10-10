import { Box,makeStyles } from '@material-ui/core'
import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Drawer from '@material-ui/core/Drawer';

//components 
import Banner from './Banner'
import Topbar from './Topbar'
import Slide from './Slide'
import Midsection from './Midsection'
import { getProducts as listProducts } from '../../redux/actions/ProductAction'
const useStyle = makeStyles(theme=>({
    component: {
        padding: 10,
        background:'#f2f2f2'
    },
    rightwrapper: {
        background: '#fff',
        padding: '5',
        margin: `12px `
        , marginRight: 0,
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
      display:'none'
  }
    },
    leftWrapper: {
        width: `86%`,
        [theme.breakpoints.down('md')]:{
      width:`100%`
        },
    }

}))

const Home = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const {products} = useSelector(state => state.getProducts)
    
    useEffect(() => {
       dispatch(listProducts())
    }, [dispatch])

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const handleClose = () => {
        
    }
    return (
        <div>
            <Topbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{display:'flex'}}>
                <Box className={classes.leftWrapper}>
                        <Slide timer={true}
                            title="Deal of the day"
                            products={products}/>
                    </Box>
                    <Drawer open={open} onClose={handleClose}>
                        cart
                        </Drawer>
                <Box className={classes.rightwrapper}>
     <img src={adURL}  style={{width:'230px'}} />
                    </Box>
                    </Box>
            </Box>
            <Midsection/>
            <Slide timer={false}  title="Discounts for you "  products={products}/>
            <Slide timer={false}  title="Suggested items"  products={products}/>
            <Slide timer={false}  title="Top selection"  products={products}/>
            <Slide timer={false}  title="Best seller"  products={products}/>
          
        </div>
    )
}

export default Home
