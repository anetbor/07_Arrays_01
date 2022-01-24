"use strict";

/* Die Satzbau-Maschine | Arrays */
output(getSentence("Ich","bin","Max","Mütze",));
function getSentence(word1,word2,word3,word4) {

    const gap = " ";
    const punct = ".";
    const str = word1 + gap + 
                word2 + gap +
                word3 + gap +
                word4 + 
                punct; 

    let arr;
    arr = [];
    arr = [2,4,7,11];
    arr = [false,true,true];
    arr = ["Ich","bin",]
    output(arr);
    



    return str;

}





// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


