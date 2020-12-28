/* ここはライフサイクルメソッドの練習場
Rnkコンポーネントのprops.pnMount,props.onUpdateが呼び出された時に実行する
fetchRanking、リクエスト開始、レスポンス受しん、リクエスト完了のAction
を生成する物を定義する

 */
//import fetchJsonp from 'fetch-jsonp';
//import qs from 'qs';

/*
const API_URL ='api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
//ここに取得したAPIKEYを記述する。
const API_KEY = 'APIKEY...'
//リクエスト開始
const startRequest = cityid =>({
    type: 'START_REQUEST'
    payload: { cityid },
});
//レスポンス受しん
const receiveData = (cityid, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: {cityid, error, response},
});

//リクエスト完了
const finishRequest = cityid => ({
    tyoe: 'FINISH_REQUEST',
    payload: {cityid},
});

//天気を取得する
export const fetchRank = cityid => {
    //reducer-thunkを使った非同期処理
    return async dispatch => {
        dispatch(startRequest(cityid));

        const queryString = qs.stringify({
            apikey: API_KEY,
            cityid: cityid,
        });
        try {
            const responce = await fetchJsonp(`${API_URL}?${queryString}`);
            const data = await responce.json();
            dispatch(receiveData(cityid, null, data));
        } catch (err) {
            dispatch(receiveData(cityid, err));
        }
        dispatch(finisihRequest(cityid));
    }; 
};
 */