import { Button,ButtonGroup ,makeStyles } from "@material-ui/core"
import { useState } from "react";

const useStyle = makeStyles({
    component: {
        marginTop: 30,
        
    },
    button: {
        borderRadius:`50%`
    }
})
const GroupButtons = () => {
    const [counter, setCounter] = useState(1)
    const handleIncrement = () => {
        setCounter(counter => counter + 1)
        console.log(counter)
    }
    const handleDecrement = () => {
        setCounter(counter => counter - 1);
        console.log(counter)
    }
    const classes = useStyle();
    return (
        <ButtonGroup className={classes.component}>
            <Button className={classes.button} onClick={()=>{handleDecrement()}} disabled={counter === 1}>
                -
            </Button>
            <Button>{counter}</Button>
            <Button  className={classes.button} onClick={()=>{handleIncrement()}}>
                +
            </Button>
</ButtonGroup>
    )
}

export default GroupButtons
