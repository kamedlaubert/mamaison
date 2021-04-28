import React from 'react';
import './CardLogement.css';
import Card from './Card';
import {  Link }from 'react-router-dom';

function CardLogement({ src}) {
    return (
        <div className="CardLogement">
             
            <div className='CardLogement__section'>
             <Link to="DetailCardLogement">
             <img src={src} alt="" />
           </Link>
            
            <Card 
                 
                src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=480"
                title="Lieu unique"
                description="Espace très reposant."
             />
                 
            </div>
            
        </div>
    )
}

export default CardLogement;