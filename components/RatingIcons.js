import React from 'react'
import Exceptional from './icons/Exceptional';
import Recommended from './icons/Recommended';
import Meh from './icons/Meh';
import Skip from './icons/Skip';



export default function Platform({ ratingtitle }) {
    

    switch (ratingtitle) {
        case "exceptional":
        return <Exceptional />
        break;
        case "recommended":
        return <Recommended />
        break;
        case "meh":
        return <Meh />
        break;
        case "skip":
        return <Skip />
        break;

        default:
        return '';
        
    }



}
