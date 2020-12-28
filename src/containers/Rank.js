/*
定義したAction Creator をRankコンポーネントのprops.onMountedから呼び出すためにRankコンポーネント
のcountainer componentを定義する
mapDispatchToProps はReducerを定義するまで仮に実装

*/
import {connect} from 'react-redux';
import Rank from './components/Rank';
import * as action from '../actions/Ranking';
//Reducerを定義してから実装する部分
const mapStateToProps = (state, ownProps) => ({
    cityId: ownProps.cityId
});

const mapStateToProps = dispatch => ({
    //onMount onUpdate fetchRanking を接続
    onMount (cityId) {
        dispatch(actions.fetchRank(cityId)); 
    },
    onUpdate (cityId) {
        dispatch(actions.fetchRank(cityId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rank);