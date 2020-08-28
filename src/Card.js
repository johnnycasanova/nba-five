import React from 'react';
import default_photo from './default_nba_headshot_v2.png';

const Card = ({id, name}) => {

        function playerPhoto(){


            let playerPhotoLink = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`;
            let defaultPhoto = default_photo;
        

            // if(id === 1628778){
            //     photo = defaultPhoto;
            // }
            // else {
            //     photo = playerPhotoLink;
            // }

            var photo = fetch(playerPhotoLink)
                            .then(response => {
                                if(!response.ok){
                                    return defaultPhoto;
                                }
                                else return playerPhotoLink;
                            })

            return photo;

        }

    
    return(
        <div className=" tc bg-moon-gray dib br3 ma2 grow bw2 shadow-5" id="photo">
            <img alt="nba player" src={playerPhoto()} />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}



export default Card;
