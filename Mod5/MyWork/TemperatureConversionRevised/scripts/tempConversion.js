// Description: These functions will convert temperatures between Fahrenheit and Celsius
//Author: Corinne Trudeau
"use strict";

function convertCtoF()
{
    let result = Number(celsField.value) * 1.8 +32;
    answerField.value = result;
}

function convertFtoC()
{
    let result = (Number(fahrField.value)-32)/1.8;
    answerField.value = result;
}


