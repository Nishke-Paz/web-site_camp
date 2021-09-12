import React from 'react';
import Ticket from './Ticket';
import tickets from '../tickets';

const BuyTicket = (props) => {
    return(
        <div className='container'>
            <div className='row justify-content-center mt-4'>
                {Object.keys(tickets).map(item => {
                    return (
                        <div className='col' key={tickets[item].name}>
                            <Ticket changeTicket={props.changeTicket} name={tickets[item].name} desc={tickets[item].desc} price={tickets[item].price}></Ticket>
                        </div>
                    )    
                })}
            </div>
        </div>
    )  
}

export default BuyTicket;