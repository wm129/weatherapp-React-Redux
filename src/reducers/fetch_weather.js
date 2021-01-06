//redux-thunk が行う非同期処理　

//initial state を設定
const fetchWeatherData=(
    //initial state
    state={
    weatherData:[] 
    }, 
    //actionをここに指示
    action)=>{
        
        if(action.type === "FETCH_WEATHER"){
            state= {...state, weatherData: action.payload}
        }

        return state;
    };
    export default fetchWeatherData;
    //今回は都市、その他の天気情報を同様に作成する