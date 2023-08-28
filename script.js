let pos = {
    lat: -45,
    lon: 112

};
getISS();
console.log(pos);   
    
    async function getISS(){
        const URL_api = 'https://api.wheretheiss.at/v1/satellites/25544';
        const response = await fetch (URL_api);
        const data = await response.json();
        const {latitude, longitude} = data;
        
        console.log(latitude);
        console.log(longitude);

        document.getElementById('lat').textContent = latitude;
        document.getElementById('lon').textContent = latitude;
    }; 