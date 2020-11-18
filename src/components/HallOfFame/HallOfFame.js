import React from 'react';
import classes from './HallOfFame.css';
import HallOfFameItem from './HallOfFameItem/HallOfFameItem';
import unknown_image from '../../assets/images/unknown.png';

const HallOfFame = props => {

  let hall_of_fame = [];
  for (const rank of Object.entries(props.hall_of_fame)) {
    let rank_array = [];
    if (rank[1]){
      for (const [index, r] of rank[1].entries()){
        let image_src;
        if(r[4]) {
          image_src = r[4];
        } else {
          image_src = unknown_image;
        }
        rank_array.push(
          {
            name: r[1],
            guild: r[2],
            about: r[3],
            photo: <div><img height={150}
                             width={100}
                             background={"#7457CB"}
                             src={image_src}/></div>
          }
        );
      }
    }

    hall_of_fame.push(<HallOfFameItem  category={rank[0][1]}
                                       ranking_name={"🏆 " + rank[0] + " 🏆"}
                                       hall_of_fame={rank_array} />);
  };

  return (
    <div className={classes.Title}>
      <div className={classes.Table}>
        <div className={classes.TableRow}>
          <div className={classes.TableColumn}>
            {hall_of_fame}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
