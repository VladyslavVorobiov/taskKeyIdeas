import React from 'react';
import classes from './ListOfIdeas.module.css'
import ItemIdea from '../ItemIdea/ItemIdea';

const arrayOfIdeas = [
    {
        title: "Find Your Inner Strength",
        text: "We offered new solutions so users can upgrade the status of their mental health in real time by using the Bold app. Being bold means to discover your own power and change the way you see yourself.",
    },
    {
        title: "Land Your Revenues",
        text: "A landing page is a perfect place to promote your app and boost your revenue stream. The innovative design of a landing page communicates your app's ease of use and interactiveness.",
    },
    {
        title: "Wise Marketing Strategy",
        text: "Marketing was the key to the success of this meditation app. With that in mind, a full-fledged marketing strategy was created and successfully deployed.",
    },
];

const ListOfIdeas = (props) => {
    return(
        <div className = {classes.ListOfIdeas}>
            {
                arrayOfIdeas.map( (item, index) => {
                    return (
                        <ItemIdea 
                            key = {index}
                            title = {item.title}
                            textIdea = {item.text}
                            numberOfIdea = {index + 1}
                        />
                    );
                })
            }
        </div>
    );
}

export default ListOfIdeas;