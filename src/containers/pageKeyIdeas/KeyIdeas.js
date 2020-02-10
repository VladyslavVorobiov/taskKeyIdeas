import React from 'react';
import classes from './KeyIdeas.module.css';
import ListOfIdeas from '../../components/ListOfIdeas/ListOfIdeas';

const KeyIdeas = (props) => {
    return(
        <section className={classes.KeyIdeas}>
            <h2>Key ideas</h2>
            <ListOfIdeas />
        </section>
        
    );
}

export default KeyIdeas;