import React from 'react'
import {Card, makeStyles } from '@material-ui/core'
import './Component CSS/ProductSlide.css'
import {useHistory} from 'react-router-dom'
// import {Packages} from './Packages'

export default function ProductSlide(props) {
    const { backgroundColor, url , title, description, price} = props.content
    
    const history = useHistory()
    const handleClick=()=> {
        props.cart.addToCart(props.cart)
        history.push('/myCart')
    }
    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            border: '10px solid #F8F8FF', 
            borderRadius:'85px',
            padding: '75px 50px',
            margin: '0px 25px',
            width: '200px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent:'center',
            marginTop: '60px',
            height:'300px'

        }
    }))

    console.log(url)


    const classes = useStyles();
    

    return (
        
        <Card className={classes.card} >
            <div className="pCard" max-width='70%'>
                <img src={url} width='250px' onClick={(e) => {
                    handleClick()}}/>
                
                <h3>{title}</h3>
                
                    <p>{description}</p>
                    <h5>{price}</h5>
                
                
            </div>
            
        </Card>
        
    )
}

