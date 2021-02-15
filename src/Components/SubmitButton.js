import React from 'react'


export default function SubmitButton (props) {
    
    
    
    
    return (

            <div className="submitButton">

                <button
                className='btn'
                disabled={props.disabled}
                onClick={() => props.onClick()}
                
                >
                    {props.text}
                </button>
                
            </div>


    )
    
}