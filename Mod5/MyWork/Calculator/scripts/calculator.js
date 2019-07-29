// Description: This calculator can be used to add, subtract, multiply, or divide 2 numbers.
//Author: Corinne Trudeau
"use strict";

function addNums()
{
    let sum= Number(num1Field.value) + Number(num2Field.value);
    answerField.value = sum;
}

function subtractNums()
{
    let sum= Number(num1Field.value) - Number(num2Field.value);
    answerField.value = sum;
}

function multiplyNums()
{
    let sum= Number(num1Field.value) * Number(num2Field.value);
    answerField.value = sum;
}

function divideNums()
{
    let sum= Number(num1Field.value) / Number(num2Field.value);
    answerField.value = sum;
}

