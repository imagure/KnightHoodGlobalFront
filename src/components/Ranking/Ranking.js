import React from 'react';
import classes from './Ranking.css';
import RankingItem from './RankingItem/RankingItem';
import RankingForm from './RankingForm/RankingForm';

const Ranking = props => {

  let ranking = [];
  for (const rank of Object.entries(props.rankings)) {
    let rank_array = [];
    let columns = [];
    if (rank[1]){
      columns = rank[1][0];
      const data = [...rank[1]];
      data.shift();
      const sortedArray = data.sort(function(a, b) {
        return parseInt(b[1].replaceAll(".", "")) - parseInt(a[1].replaceAll(".", ""));
      });
      for (const [index, r] of sortedArray.entries()){
        let position;
        let row_object = {};
        switch(index) {
          case 0:
            position = "🥇 " + (index+1).toString() + "º";
            break;
          case 1:
            position = "🥈 " + (index+1).toString() + "º";
            break;
          case 2:
            position = "🥉 " + (index+1).toString() + "º";
            break;
          default:
            position = "⚪ " + (index+1).toString() + "º";
            break;
        }
        for (let [i, column] of columns.entries()) {
          if (column == "Flag" || column == "Image" || column == "Photo") {
            row_object[column] = <div><img height={34} src={r[i]}/></div>;
          } else {
            row_object[column] = r[i];
          }
        }
        rank_array.push(row_object);
      }
    }

    const ranking_name = rank[0].slice(3)  + " 👊";

    ranking.push(<RankingItem  columns={columns}
                               ranking_name={ranking_name}
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
