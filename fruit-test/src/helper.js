function helper(){
}
function choice(lenght) {
    return Math.floor(Math.random() * lenght);
}

function remove({foods,item}){
    foods.splice(item, 1);
    return foods;
}
export default helper;
export {choice,remove};