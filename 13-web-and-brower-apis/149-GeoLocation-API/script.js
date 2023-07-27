// getCurrentPosition()
function curSuccess(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
}
function curError(err){
    console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighAccuracy: true, // use GPS if available
    timeout: 5000, // time to wait before stopping to try to get location
    maximumAge: 0 // To not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);


// watchPosition() 

navigator.geolocation.watchPosition(watSuccess, watError);

function watSuccess(pos){
    console.log(pos);
}

function watError(err){
    console.log(err);
}