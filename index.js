const hq=42
function distanceFromHqInBlocks(blocks){
return Math.abs(blocks-hq)
}
function distanceFromHqInFeet(feet){
return Math.abs(feet*264)
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const freeRide = 400;
    let price;
    if (distance <= freeRide){
        price = 0;
    } else if (distance > 400 && distance < 2000){
        price = (distance - freeRide) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        price = 25;
    } else 
        price = "cannot travel that far"
    
    return price;
}
function distanceTravelledInFeet(start, destination){
    const feetPerBlock = 264;
    let distance
    if (start >= destination){
        distance = (start - destination) * feetPerBlock;
    } else {
        distance = (destination - start) * feetPerBlock;
    }
    return distance;
}