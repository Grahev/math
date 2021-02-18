const button = document.querySelector('#btn');
const input = document.getElementById('answer')
let score = 0
let attemps = 0


button.addEventListener("click", check)
input.addEventListener('keyup',function(e){
    console.log(e.keyCode)
    if(e.keyCode === 13){
        check()
    }
});




function generateNumbers(){
    document.querySelector('#num1').innerHTML = Math.floor(Math.random() * 9) + 1
    document.querySelector('#num2').innerHTML = Math.floor(Math.random() * 9) + 1
}


function clearWrong(){
    document.getElementById('feedback').innerHTML = ""
}


function check(){
    const n1 = document.querySelector('#num1').textContent
    const n2 = document.querySelector('#num2').textContent
    const answer = document.getElementById('answer').value
    let result = n1*n2
    console.log(n1, n2, answer)
    if(result == answer){
        score = score + 1
        attemps ++
        document.getElementById('score').innerHTML = `<h3>Score: ${score}</h3>`
        document.getElementById('attemps').innerHTML = `<h3>Attemps: ${attemps}</h3>`
        document.getElementById('feedback').innerHTML = `<h3>Well done</h3>`
        generateNumbers()
        document.getElementById('answer').value = ''
        document.getElementById('answer').focus()
        window.setTimeout(clearWrong, 1000);

    }
    else{
        attemps ++
        document.getElementById('feedback').innerHTML = `<h3>Try again ;)</h3>`
        window.setTimeout(clearWrong, 1000);
    }

}



window.onload = generateNumbers()