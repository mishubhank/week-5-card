
import React from 'react'
import './Card.css';  

export const Card = (props) => {
  return (
    <div>
      <div className='card'><br></br>
        <h2 className='name'>{props.name}</h2><br>
        </br>
        <h3 className='description' >{props.description}</h3>
        <span className='interestH'>{props.interestH}</span>
          <span>
         { props.interest.map((items)=>(
     
         <li> {items}</li>


         ))}
<div className='socials'>
     <a href={props.linkedIn} target="_blank" rel="noopener noreferrer" className='socialb' >
            LinkedIncxcx
          </a>
           <a href={props.linkedIn} target="_blank" rel="noopener noreferrer" className='socialb' >
            LinkedIncxcx
          </a>
            
         </div>

          </span>
      </div>
    </div>
  );
};


//  <h2 style={styles.name}>{props.name}</h2>
//         <p style={styles.description}>{props.description}</p>
//         <h3 style={styles.interestsHeader}>Interests</h3>
//         <ul style={styles.interestsList}></ul>