import React from 'react';
import Proptype from 'prop-types';

export default function Rank({city name}) {
//風速をAPI情報から取得したい
return (
    <div>
        <h2>
            weather 
        </h2>
        <p>
            都市ごとの天気
        </p>
    </div>
)    
}
Rank.Proptype = {
    city name: PropTypes.string
};
Ranking.defaultProps = {
    // のちに変更する部分
    city name: '1'
};