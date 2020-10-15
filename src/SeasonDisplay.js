import './SeasonDisplay.css'
import React from 'react';

//import ReactDOM from 'react-dom';
const seasonConfig =
{
SUMMER :
{
    text:"Lets hit the beach!! (Koko no natsu) ",
    iconName :'sun' 
    
   
},

WINTER :
{
    text:'Burr...  its cold!! (Koko no fuyu)',
     iconName :'snowflake'
}

};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'SUMMER' : 'WINTER';
    }
    else {
        return lat > 0 ? 'WINTER' : 'SUMMER';
    }
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());

    const {text, iconName}= seasonConfig[season];

     return (
        <div className={`season-display ${season}`} >
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );

};
export default SeasonDisplay;