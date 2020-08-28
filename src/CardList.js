import React from 'react';
import Card from './Card';



const CardList = ({players}) => {

    const cardComponent = players.map((player, i) => {

        return (<Card 
                key={i} 
                id={players[i].id} 
                name={players[i].full_name}
                //photo={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${players[i].id}.png`}
                /> )
    });

    return(
        <div>
            {cardComponent}
      </div>
    );
}

export default CardList;