"use strict";
let a = 6;
function test6()
{
    let a = 7;
    function again()
    {
        let a = 8;
        console.log(a);
    }
    again();
    console.log(a);
}
test6();
console.log(a);