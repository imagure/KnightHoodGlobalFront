import React from 'react';
import classes from './Ranking.css';
import RankingItem from './RankingItem/RankingItem';
import RankingForm from './RankingForm/RankingForm';

const Ranking = props => {

  let ranking = [];
  for (const rank of Object.entries(props.rankings)) {
    let rank_array = [];
    if(rank[0][1]=="I") {
      if (rank[1]){
        let sortedArray = rank[1].sort(function(a, b) {
          return parseInt(b[1].replaceAll(".", "")) - parseInt(a[1].replaceAll(".", ""));
        });
        for (const [index, r] of sortedArray.entries()){
          let position;
          if (index==0) {
            position = "🥇 " + (index+1).toString() + "º";
          }
          else if (index==1) {
            position = "🥈 " + (index+1).toString() + "º";
          }
          else if (index==2) {
            position = "🥉 " + (index+1).toString() + "º";
          }
          else {
            position = "⚪ " + (index+1).toString() + "º";
          }
          rank_array.push(
            {
              position: position,
              name: r[0],
              points: r[1],
              guildName: r[2]
            }
          );
        }
      }
    }
    else if (rank[0][1]=="G") {
      if (rank[1]){
        let sortedArray = rank[1].sort(function(a, b) {
          return parseInt(b[2].replaceAll(".", "")) - parseInt(a[2].replaceAll(".", ""));
        });
        for (const [index, r] of sortedArray.entries()){
          let position;
          if (index==0) {
            position = "🥇 " + (index+1).toString() + "º";
          }
          else if (index==1) {
            position = "🥈 " + (index+1).toString() + "º";
          }
          else if (index==2) {
            position = "🥉 " + (index+1).toString() + "º";
          }
          else {
            position = "⚪ " + (index+1).toString() + "º";
          }
          rank_array.push(
            {
              position: position,
              name: r[0],
              image: <div><img height={34} src={"https://drive.google.com/uc?export=view&id="+r[1]}/></div>,
              points: r[2],
              position_instance: r[3]
            }
          );
        }
      }
    }
    else if (rank[0][1]=="B") {
      if (rank[1]){
        let sortedArray = rank[1].sort(function(a, b) {
          return parseInt(b[1].replaceAll(".", "")) - parseInt(a[1].replaceAll(".", ""));
        });
        for (const [index, r] of sortedArray.entries()){
          let position;
          if (index==0) {
            position = "🥇 " + (index+1).toString() + "º";
          }
          else if (index==1) {
            position = "🥈 " + (index+1).toString() + "º";
          }
          else if (index==2) {
            position = "🥉 " + (index+1).toString() + "º";
          }
          else {
            position = "⚪ " + (index+1).toString() + "º";
          }
          rank_array.push(
            {
              position: position,
              name: r[0],
              points: r[1]
            }
          );
        }
      }
    }

    ranking.push(<RankingItem  category={rank[0][1]}
                               ranking_name={rank[0] + " 👊"}
                               ranking={rank_array} />);
  };

  return (
    <div className={classes.Title}>
      <RankingForm category={props.category}
                   modalName="Submit"
                   onSavePointsButton={props.onSavePointsButton}/>

      <div className={classes.Table}>
        <div className={classes.TableRow}>
          <div className={classes.TableColumn}>
            {ranking}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
