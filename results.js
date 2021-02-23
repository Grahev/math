let dataSet;
dataSet = localStorage.getItem("resultsDate")
ratioSet = localStorage.getItem("resultRatio")
resultNumbers = localStorage.getItem("resultNumbers")
scoreSet = localStorage.getItem("resultScore")

let n = JSON.parse(resultNumbers)
let date = JSON.parse(dataSet)


const correctList = document.getElementById('correct_list');
const wrongList = document.getElementById('wrong_list');

function resetLocalStorage(){
    window.localStorage.clear();
    location.reload();
};


n.forEach(session => {
    // console.log('session numbe: ' + session.indexOf(session))
    session.forEach(item =>{
        // console.log(item)
        let n1 = item.number1;
        let n2 = item.number2;

        let row = document.createElement('li');
        row.className = 'list-group-item col-xs-6 text-center';
        const rowContent = document.createTextNode(`${item.number1} X ${item.number2} = ${item.answer}`);
        row.appendChild(rowContent);
        if(n1*n2 == item.answer){
            correctList.appendChild(row);
            console.log('correct');
            row.style.color = "green";
        } else{
            wrongList.appendChild(row);
            console.log('wrong');
            row.style.color = "red";
        }

        
        console.log(row)
    })

})