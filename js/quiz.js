function check() {

    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    var result=document.getElementById('result');

    // Pennsylvania, Connecticut, S.Carolina, Maryland, New Jersey, Rhode Island, Massachusetts, New Hampshire, Delaware, Georgia, N.Carolina, Virginia, and New York
    if(q1==="Pennsylvania, Connecticut, S.Carolina, Maryland, New Jersey, Rhode Island, Massachusetts, New Hampshire, Delaware, Georgia, N.Carolina, Virginia, and New York") {c++}
    if(q2==="A and C") {c++}
    if(q3==="9/9/1776, 12/18/1865") {c++}
    if(q4==="That anyone that were slaves were now free under this new bill") {c++}
    if(q5==="A slave that had kids for President Thomas Jefferson") {c++}
    if(q6==="Stock holders were selling their stocks at once because they were scared that the stocks were declining") {c++}
    if(q7==="10 years") {c++}
    if(q8==="The awareness of women liberation and equality which started in the 1960s") {c++}
    if(q9==="Because it represented freedom and strength of America") {c++}
    if(q10==="2") {c++}

    if (c<=6) {
        result.textContent=`Your result is ${c}.  It is below average. Please try again.`
    } else {
        result.textContent=`You did great! Your result is ${c} out of 10. You know your American History!`
    }
}
