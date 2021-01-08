//axios HTTP通信を扱う役割　JSONを取得、実装を簡易にする
//JSで非同期処理を使う際　完了や失敗を表すオブジェクトにPromiseがある
//pending: fulfilled: rejected : の3つのStateの１つをとる
//特定のコードの実行完了をまってから次のコードを実行指示ができる
import axios from "axios";

const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?';
const API_KEY = "MY_API_ID";

export default fetchAPIResponse(city){
    return function(dispatch){
        axios.get(API_ENDPOINT,{
            params: {
                q: /*location name (default=> Paris) */
                appid: API_KEY
            }
        })
        .then(response=>{
            let arr = [];
            for (var key in response.data.location) {
                arr.push(response.data.location[key]);
            }
            //dispatch actionの設定
            dispatch({type:"FETCH_LOCATION", payload:arr});
            let arr2 = [];
            for (var key2 in response.data.current) {
                arr2.push(response.data.current[key2]);
            }
            console.log(arr2);
            arr2.splice(5, 1);
            //dispatch actionの設定
            dispatch({type:"FETCH_WEATHER", payload:arr2});
            let arr3 = [];
            for (var key3 in response.data.current.condition) {
              arr3.push(response.data.current.condition[key3]);
            }
            //dispatch actionの設定
            dispatch({type:"FETCH_CONDITIONS", payload:arr3});

            console.log(response);
        }).catch(err=>{
            console.log(err)
        });
    }
};