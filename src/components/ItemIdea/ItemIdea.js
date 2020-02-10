import React from 'react';
import classes from './ItemIdea.module.css';

const ItemIdea = (props) => {

let styleTitle = classes.titleIdea;
let styleTextIdea = classes.textIdea;
let styleNumberIdea = classes.numberIdea;

    return(
        <div 
            className={classes.ItemIdea}
        >
            <h3 className={styleTitle}>{props.title}</h3>
            <p className={styleTextIdea}>{props.textIdea}</p>
            <p className={styleNumberIdea}>{ "0" + props.numberOfIdea}</p>
        </div>
    );
}

export default ItemIdea;