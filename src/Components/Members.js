import React from 'react'

export default function MembersOnly () {
    return (

        <div className="membersContainer">
            <div className="frame">
                <h1>you are in the members only section</h1>
                <h4>what would you like to do</h4>
                <button>IMPORT CREDIT SCORE</button>
                <button>IMPORT AGENT TODO LIST</button>
            </div>
        </div>
    )
}