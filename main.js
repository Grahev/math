const button = document.querySelector('#btn');
const input = document.getElementById('answer')
const reset = document.getElementById('reset')
let score = 0
let attemps = 0
const ts = () => Math.floor(new Date().getTime() / 1000);


button.addEventListener("click", check)
input.addEventListener('keyup',function(e){
    console.log(e.keyCode)
    if(e.keyCode === 13){
        check()
    }
});

function gameReset(){
    location.reload();
}

reset.addEventListener("click", gameReset)




function generateNumbers(){
    document.querySelector('#num1').innerHTML = Math.floor(Math.random() * 9) + 1
    document.querySelector('#num2').innerHTML = Math.floor(Math.random() * 9) + 1
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

function check(){
    const n1 = document.querySelector('#num1').textContent
    const n2 = document.querySelector('#num2').textContent
    const answer = document.getElementById('answer').value
    let result = n1*n2
    let ratio = calcRatio(score)
    console.log(ts)
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

    }
    else{
        attemps ++
        document.getElementById('feedback').innerHTML = `<h3>Try again ;)</h3>`
        document.getElementById('answer').value = ''
        document.getElementById('answer').focus()
        window.setTimeout(clearWrong, 1000);
    }

}



window.onload = generateNumbers()