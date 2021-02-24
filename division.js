const button = document.querySelector('#btn');
const input = document.getElementById('answer')
const reset = document.getElementById('reset')
const save = document.getElementById('save')
let score = 0
let attemps = 0
let sessionNumbers = []

save.addEventListener("click", saveRatioToLocalStorage)
button.addEventListener("click", check)
input.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        check()
    }
});

function gameReset(){
    location.reload();
}

reset.addEventListener("click", gameReset)




function generateNumbers(){
    let num1 = Math.floor(Math.random() * 9) + 1
    let num2 = Math.floor(Math.random() * 9) + 1
    let num3 = num1*num2
    document.querySelector('#num1').innerHTML = num3
    document.querySelector('#num2').innerHTML = num2
}


function clearWrong(){
    document.getElementById('feedback').innerHTML = ""
}

function calcRatio(score){
    if(score == 0){
        ratio = 'N/A'
    }
    else{
        ratio = (score/attemps)*100
    }
    return Math.round(ratio)

}




function saveRatioToLocalStorage(){
    let resultsDate;
    let resultRatio;
    let resultScore;
    const currentDate = new Date();
    let today = currentDate;
    console.log(`test score: ${score}`)

    //date
    if(localStorage.getItem('resultsDate') === null) {
        resultsDate = [];
    } else {
        resultsDate = JSON.parse(localStorage.getItem('resultsDate'));
    }
    resultsDate.push((today));

    localStorage.setItem('resultsDate', JSON.stringify(resultsDate));
    
    //ratio
    if(localStorage.getItem('resultRatio') === null) {
        resultRatio = [];
    } else {
        resultRatio = JSON.parse(localStorage.getItem('resultRatio'));
    }
    resultRatio.push(ratio);

    localStorage.setItem('resultRatio', JSON.stringify(resultRatio));

    //score
    if(localStorage.getItem('resultScore') === null) {
        resultScore = [];
    } else {
        resultScore = JSON.parse(localStorage.getItem('resultScore'));
    }
    resultScore.push(score);

    localStorage.setItem('resultScore', JSON.stringify(resultScore));

    //numbers
    if(localStorage.getItem('resultNumbers') === null) {
        resultNumbers = [];
    } else {
        resultNumbers = JSON.parse(localStorage.getItem('resultNumbers'));
    }
    resultNumbers.push(sessionNumbers);

    localStorage.setItem('resultNumbers', JSON.stringify(resultNumbers));
    console.log('results saved')
    alert('Session saved')
}





function check(){
    const n1 = document.querySelector('#num1').textContent
    const n2 = document.querySelector('#num2').textContent
    const answer = document.getElementById('answer').value
    let result = n1/n2
    let ratio = calcRatio(score)
    if(answer == ""){
        document.getElementById('feedback').innerHTML = `<h3>You must answer</h3>`
        document.getElementById('answer').value = ''
        document.getElementById('answer').focus()
        window.setTimeout(clearWrong, 1000);
    }
    else if(result == answer){
        score = score + 1
        attemps ++
        document.getElementById('score').innerHTML = `<h3>Score: ${score}</h3>`
        document.getElementById('attemps').innerHTML = `<h3>Attemps: ${attemps}</h3>`
        document.getElementById('ratio').innerHTML = `<h4>Ratio: ${ratio}%</h4>`
        document.getElementById('feedback').innerHTML = `<h3>Well done</h3>`
        generateNumbers()
        document.getElementById('answer').value = ''
        document.getElementById('answer').focus()
        window.setTimeout(clearWrong, 1000);
        sessionNumbers.push({"number1" :n1, "number2":n2, "answer": answer, "task": 'division'})

    }
    else{
        attemps ++
        document.getElementById('feedback').innerHTML = `<h3>Try again ;)</h3>`
        document.getElementById('answer').value = ''
        document.getElementById('answer').focus()
        window.setTimeout(clearWrong, 1000);
        sessionNumbers.push({"number1" :n1, "number2":n2, "answer": answer, "task": 'division'})
    }
    console.log(sessionNumbers)
}



window.onload = generateNumbers()


//results

dataSet = localStorage.getItem('resultsDate');
console.log(dataSet)