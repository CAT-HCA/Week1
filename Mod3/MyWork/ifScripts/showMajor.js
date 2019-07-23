// Description: This script will display the student's
//major and advising location
//taxable income and filing status
//Author: Corinne Trudeau
"use strict";

//User Inputs
var studentName = "Scout";
var studentMajor = "CSCI";
//Calculations
var nameMajor;
var advLocation;

if (studentMajor=="BIOL")
{
    nameMajor="Biology";
    advLocation="Science Bldg, Room 310";
}
else if (studentMajor=="CSCI")
{
    nameMajor="Computer Science";
    advLocation="Sheppard Hall, Room 314";
}
else if (studentMajor=="ENG")
{
    nameMajor="English";
    advLocation="Kerr Hall, Room 201";
}
else if (studentMajor=="HIST")
{
    nameMajor="History";
    advLocation="Kerr Hall, Room 114";
}
else if (studentMajor=="MKT")
{
    nameMajor="Marketing";
    advLocation="Westly Hall, Room 310";
}
else
{
    nameMajor="Unknown";
    advLocation="";
}

console.log("Student: " + studentName + "\nMajor: " + nameMajor + "\nAdvising Location: " + advLocation)