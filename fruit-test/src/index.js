// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import helper,{choice,remove} from './helper';
import foods from './foods';
let randomNumber = choice(foods.length);

console.log("I’d like one "+foods[randomNumber]+", please.");
console.log("Here you go: "+foods[randomNumber]+" ");
let newfoods = remove({foods,randomNumber});

console.log("Delicious! May I have another?");
console.log("I'm sorry, we're all out. We have "+newfoods.length+" left.");

 randomNumber = choice(foods.length);

console.log("I’d like one "+foods[randomNumber]+", please.");
console.log("Here you go: "+foods[randomNumber]+" ");
 newfoods = remove({foods,randomNumber});

console.log("Delicious! May I have another?");
console.log("I'm sorry, we're all out. We have "+newfoods.length+" left.");
