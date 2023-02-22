
// var min = document.getElementById("minutes");
// var sec = document.getElementById("seconds");
// let tsec = 0;
// // setInterval(setTime, 1000);

// function setTime() {
//   postMessage(tsec);
//   setTimeout("setTime()",1000);
//   tsec++;
// }
// function pad(val) {
//     var valString = val + "";
//     if (valString.length < 2) {
//       return "0" + valString;
//     } else {
//       return valString;
//     }
//   }

// setTime();

// var seconds = 0;
// // var cancel = setInterval(setTime, 1000);

// function setTime(seconds) {
//     postMessage(tsec);
//     // setTimeout("setTime()",1000);
//     setInterval(setTime, 1000);
//     seconds ++;
// }
// setTime();

Timer = 0;
i = 0;

function myTimer () {  
    postMessage(i);
    setTimeout(function () { 
       Timer = Timer + 1; 
       i++;                
       if (i > 0) {  
          myTimer();        
       }                        
    }, 1000)
 }
 myTimer();