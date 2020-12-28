import React from 'react';
import Proptype from 'prop-types';
/*
export default function Rank({cityid}) {
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
    cityid: PropTypes.string
};
Ranking.defaultProps = {
    // のちに変更する部分
    cityid: '1'
};
*/
/*ライフサイクルメソッドを使う場合　classでかく */

export default class Rank extends React.Component {
    componentWillMount() {
        this.props.onMount(this.props.cityid);
    }
    componWillReciveeProps(nextProps) {
        if (this.props.cityid == nextProps.cityid) {
            this.props.onUpdate(nextProps.cityid);
        }
    }
    render() {
        return (
    <div>
        <h2>
            weather 
        </h2>
        <p>
            都市ごとの天気 {this.props.cityid}
        </p>
    </div>
        );
    }
}
Rank.Proptype = {
    cityid: Proptypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};
Rnak.defaultProps = {
    cityid= '1'
};