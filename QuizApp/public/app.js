function check(){
var score = 0
var res1 = document.getElementById("Q1A2")
if (res1.checked == true) {
    score++
    alert("Answer 1 is correct")
}
else{
    alert("Answer 1 is incorrect")
}

var res2 = document.getElementById("Q2A4")
if (res2.checked == true) {
    score++
    alert("Answer 2 is correct")
}
else{
    alert("Answer 2 is incorrect ")
}

var res3 = document.getElementById("Q3A3")
if (res3.checked == true) {
    score++
    alert("Answer 3 is correct")
}
else{
    alert("Answer 3 is incorrect ")
}

var res4 = document.getElementById("Q4A2")
if (res4.checked == true) {
    score++
    alert("Answer 4 is correct")
}
else{
    alert("Answer 4 is incorrect ")
}

var res5 = document.getElementById("Q5A1")
if (res5.checked == true) {
    score++
    alert("Answer 5 is correct")
}
else{
    alert("Answer 5 is incorrect ")
}

var res6 = document.getElementById("Q6A2")
if (res6.checked == true) {
    score++
    alert("Answer 6 is correct")
}
else{
    alert("Answer 6 is incorrect ")
}

var res7 = document.getElementById("Q7A3")
if (res7.checked == true) {
    score++
    alert("Answer 7 is correct")
}
else{
    alert("Answer 7 is incorrect ")
}

var res8 = document.getElementById("Q8A4")
if (res8.checked == true) {
    score++
    alert("Answer 8 is correct")
}
else{
    alert("Answer 8 is incorrect ")
}

var res9 = document.getElementById("Q9A2")
if (res9.checked == true) {
    score++
    alert("Answer 9 is correct")
}
else{
    alert("Answer 9 is incorrect ")
}

var res10 = document.getElementById("Q10A2")
if (res10.checked == true) {
    score++
    alert("Answer 10 is correct")
}
else{
    alert("Answer 10 is incorrect ")
}

var res11 = document.getElementById("Q11A1")
if (res11.checked == true) {
    score++
    alert("Answer 11 is correct")
}
else{
    alert("Answer 11 is incorrect ")
}

var res12 = document.getElementById("Q12A2")
if (res12.checked == true) {
    score++
    alert("Answer 12 is correct")
}
else{
    alert("Answer 12 is incorrect ")
}

var res13 = document.getElementById("Q13A1")
if (res13.checked == true) {
    score++
    alert("Answer 13 is correct")
}
else{
    alert("Answer 13 is incorrect ")
}

var res14 = document.getElementById("Q14A3")
if (res14.checked == true) {
    score++
    alert("Answer 14 is correct")
}
else{
    alert("Answer 14 is incorrect ")
}

var res15 = document.getElementById("Q15A1")
if (res15.checked == true) {
    score++
    alert("Answer 15 is correct")
}
else{
    alert("Answer 15 is incorrect ")
}

var res16 = document.getElementById("Q16A1")
if (res16.checked == true) {
    score++
    alert("Answer 16 is correct")
}
else{
    alert("Answer 16 is incorrect ")
}

var res17 = document.getElementById("Q17A1")
if (res17.checked == true) {
    score++
    alert("Answer 17 is correct")
}
else{
    alert("Answer 17 is incorrect ")
}

var res18 = document.getElementById("Q18A1")
if (res18.checked == true) {
    score++
    alert("Answer 18 is correct")
}
else{
    alert("Answer 18 is incorrect ")
}

var res19 = document.getElementById("Q19A2")
if (res19.checked == true) {
    score++
    alert("Answer 19 is correct")
}
else{
    alert("Answer 19 is incorrect ")
}

var res20 = document.getElementById("Q20A1")
if (res20.checked == true) {
    score++
    alert("Answer 20 is correct")
}
else{
    alert("Answer 20 is incorrect ")
}

var submit = document.getElementById("result")
var result = score
submit.innerHTML = result + "/20"
}