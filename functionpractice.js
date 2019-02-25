
//פונקציה שמציגה מה שבסוגריים
function hwd ()
{
console.log ("hello world")
}
hwd ()
hwd ()

//פונקציה שמחשבת ממוצע

function average (a,b,c)
{
  
 var d = ( (a+b+c)/3 )

console.log (d)


}

average (10,8,3)
average (5,5,5)


//  פונקציה של היפוך מינוס/פלוס למספרים

function flip (a,b)
{
var f = (a= (-a))
var f2 = (b= (-b))

alert ("your 1st number flipped to" )
console.log (f)

alert ("your 2nd number flipped to") 
console.log (f2)

}

var n = prompt ("number")
var n2 = prompt ("another one")
flip (n,n2)



//"return" שימוש ב

function flip (a)
{
var f = (a= (-a))

return (f)



}

var n = prompt ("number")
var n2 = prompt ("another one")

alert ("your 1st new number is")
console.log (flip (n))

alert ("your 2nd new number is")
console.log (flip (n2))






