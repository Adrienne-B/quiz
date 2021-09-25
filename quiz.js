function check() {

    var c=0;
    var Q1=document.quiz.question1.value;
    var Q2=document.quiz.question2.value;
    var Q3=document.quiz.question3.value;
    var Q4=document.quiz.question4.value;
    var Q5=document.quiz.question5.value;
    var Q6=document.quiz.question6.value;
    var Q7=document.quiz.question7.value;
    var Q8=document.quiz.question8.value;
    var Q9=document.quiz.question9.value;
    var Q10=document.quiz.question10.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");

    if (Q1=="Pennsylvania, Connecticut, S.Carolina, Maryland, New Jersey, Rhode Island, Massachusetts, New Hampshire, Delaware, Georgia, N.Carolina, Virginia, and New York.") {c++}
    if (Q2=="A and C") {c++}
    if (Q3=="9/9/1776, 12/18/1865") {c++}
    if (Q4=="That anyone that were slaves were now free under this new bill.") {c++}
    if (Q5=="A slave that had kids for President Thomas Jefferson.") {c++}
    if (Q6=="Stock holders were selling their stocks at once because they were scared that the stocks were declining.") {c++}
    if (Q7=="10 years.") {c++}
    if (Q8=="The awareness of women liberation and equality which started in the 1960s.") {c++}
    if (Q9=="Because it represented freedom and strenght of America.") {c++}
    if (Q10=="2") {c++}

    document.write("You are done, Congradulations!");


    quiz.style.display="none";
    result.textContent=`$(c)`;
 
}