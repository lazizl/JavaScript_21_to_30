 function countEvens(arr) {
        var even = 0;
        for(var i =0; i < arr.length; i++)
        {
            if(arr[i] % 2 == 0) {
                even++;
            }
        }
        return even;
    }
    function countHi(str) {
     var result = 0;

     for(var i = 0; i < str.length; i++)
     {
         if(str[i]=="h" && str[i+1] =="i" ){
             result++;
         }
     }
     return result;
 }
 function either24(arr){
     var hs22 = false;
     var hs44 = false;
     for(var i = 0; i<arr.length; i++){
         if(arr[i] == 2 && arr[i+1] == 2){
             hs22 = true;
         }
         if(arr[i] == 4 && arr[i+1] == 4){
             hs44 = true;
         }
     }

     if((hs22 == true && hs44 == true)||(hs22 == false && hs44 == false)){
         return false;
     } else {
         return true;
     }
 }
 function makeChocolate(small, big, goal){
     var makeBig = goal/5
     if(big > makeBig){
         big = Math.floor(makeBig);
     }
     var makeSmall = goal - big*5
     if(makeSmall > small){
         return -1;
     } else {
         return makeSmall;
     }
 }

 function luckySum(num1, num2, num3){
     var int1 = num1;
     var int2 = num2;
     var int3 = num3;
     if(num1 == 13){
         int1 = 0;
         int2 = 0;
     }
     if(num2 == 13){
         int2 =0;
         int3 =0;
     }
     if(num3 == 13){
         int3 = 0;
     }
     return int1 + int2 + int3;
 }

 function maxBlock(str){
     var count = 1;
     var i = 0;
     var count2 = 1;
     if(str.length == 0){
         return 0;
     }
     while(i < str.length - 1){
         if(str.charAt(i) == str.charAt(i +1)){
             count++;
             if(count > count2){
                 count2 = count;
             }
         } else {
             count = 1;
         }
         i++;
     }
     return count2;
 }
 function linearIn(arr1, arr2){
     var i = 0;
     var b = 0;
     while(i < arr2.length && b < arr1.length){
         if( arr1[b] < arr2[i] ){
             b++;
         } else {
             if(arr2[i] < arr1[b]){
                 return false;
             } else {
                 i++;
             }
         }
     }

     if(i != arr2.length){
         return false;
     }
     return true;
 }
 function countTriple (str){
     var count = 0;
     for(var i = 0; i<str.length; i++){
         if(str[i] === str[i+1] && str[i] === str[i+2]){
             count++;
         }
     }
     return count;
 }

 function sameEnds(str){
     var stop = str.substring(0, str.length/2)
     for(var i=0; i < str.length; i++) {
         if(stop == str.substring(str.length - stop.length)){
             return stop;
         } else {
             stop = stop.substring(0, stop.length -1 );
         }
     }
     return "";
 }
 function tester() {
     document.getElementById("output").innerHTML += countEvens([3, 2, 1, ]);
     document.getElementById("output").innerHTML += countHi("hifourteen");
     document.getElementById("output").innerHTML += no14([4, 7, 9]);
     document.getElementById("output").innerHTML += either24([2, 4, 5, 1]);
     document.getElementById("output").innerHTML += makeChocolate(1, 4, 9);
     document.getElementById("output").innerHTML += luckySum(13, 3, 5);
     document.getElementById("output").innerHTML += maxBlock("gooooooop");
     document.getElementById("output").innerHTML += linearIn([1, 2, 4, 5], [-1]);
     document.getElementById("output").innerHTML += countTriple("bbbiiiccc");
     document.getElementById("output").innerHTML += sameEnds("end");
 }