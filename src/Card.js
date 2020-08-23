import React from 'react';

const Card = ({id, name}) => {
    return(
        <div className=" tc bg-gray dib br3 ma2 grow bw2 shadow-5">
            <img alt="nba player" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`}/>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;
