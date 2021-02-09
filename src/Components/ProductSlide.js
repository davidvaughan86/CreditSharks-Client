import React from 'react'
import {Card, makeStyles } from '@material-ui/core'

import {useHistory} from 'react-router-dom'




export default function ProductSlide(props) {
    const { backgroundColor, url , special1, special2, title, description, price} = props.content
    
    const history = useHistory()
    const handleClick=()=> {
        props.addToCart(props.content)
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
        <div className="productSlideContainer"> 
            

        <Card className={classes.card} style={{display:'flex',margin:'0%', padding:'0%', width:'80%', height:'100%'}}>
            <div className="pCard" max-width='100%'>
                <img src={url} width='100%' onClick={(e) => {
                    handleClick()}}/>
                
                <h3>{title}</h3>
                
                    <p>{description}</p>
                    <p>{special1}</p>
                    <p onClick ={(e) => {
                        history.push('/scheduler')
                    
                    }}>{special2}</p>
                    <h5>{price}</h5>
                    
                
                
            </div>
            
        </Card>
        </div>
    )
}

