import { List, ListItem, makeStyles } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
//components 
import {getProducts as listProducts} from '../../redux/actions/ProductAction'
const useStyle = makeStyles(theme => ({
    search: {
        width: `60%`,
        height: `60%`,
        background: "white",
        padding: 0,
        borderRadius: 3,
        resize: "none",
        display: "flex",
        fontSize: 18,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        outline: "none",
        
        [theme.breakpoints.down("md")]: {
            width: "70%",
            height: 30,
            marginLeft: 10,
        },
        [theme.breakpoints.down("xs")]: {
            width: `70%`,
            margin: 10,
            fontSize: 10,
        },
    
    },
    list: {
        position: 'absolute',
        // marginTop:140,
        top:50,
        color: 'black',
        background: 'white',
        textAlign:'center'
        , fontSize: 16,
        overflowY: 'scroll',
        maxWidth: `32%`,
        maxHeight: `40vh`,
        [theme.breakpoints.down("sm")]: {
            maxWidth: "60%",

        },
    }
}));
const Search = () => {
    const [text, setText] = useState('');
    
    const classes = useStyle();
    const getText = (text) => {
        setText(text)

    }
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    
    return (
        <div className="box" className={classes.search}>
        <input
          type="text"
          placeholder="  Search for products"
          style={{
            width: `90% `,
            border: "none",
            height: `100%`,
            borderRadius: 5,
            fontSize: 16,
            outline:'none'
          }}
                className={classes.input}
                onChange={(e) => getText(e.target.value)}
                value={text}
        />
        <SearchIcon style={{ color: "black" }} />
       
        {
        text &&
            <List className={classes.list}>
            {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(item => (
                    
            <ListItem style={{ borderBottom:'1px solid lightgrey',fontSize:12}} >
              <Link to={`/product/${item.id}`} style={{textDecoration:'none',color:'inherit'}} onClick={()=>{setText('')}}>  {item.title.longTitle } </Link>
                    </ListItem>
                )
                )
            }
                </List>
                
            }
             </div>
    )
}

export default Search
