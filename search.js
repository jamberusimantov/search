const student1 = { firstName: "mika", lastName: "moreh", id: '102030' };
const student2 = { firstName: "livnat", lastName: "porat", id: '405060' };
const student3 = { firstName: "davir", lastName: "hameleh", id: '708090' };
const studentsArray = [student1, student2, student3];
let answerBlock = document.getElementById('display');
document.querySelector('button').addEventListener('click', search);
document.getElementById("dataBase").innerHTML = tableBuilder(3, 3);
for (let i = 0; i < studentsArray.length; i++) {
    document.getElementsByClassName('tdClass')[i * 3 + 0].textContent = `${studentsArray[i].firstName}`;
    document.getElementsByClassName('tdClass')[i * 3 + 1].textContent = `${studentsArray[i].lastName}`;
    document.getElementsByClassName('tdClass')[i * 3 + 2].textContent = `${studentsArray[i].id}`;
}
function search() {
    let inputElement = document.querySelector('input').value;
    let searchWord = inputElement.trim();
    if (searchWord / 1 == searchWord) {
        searchById(searchWord);
    }
    else {
        searchByName(searchWord.toLowerCase());
    }
}
function searchById(searchWord) {
    for (let i = 0; i < studentsArray.length; i++) {
        if (searchWord == studentsArray[i].id) {
            answerBlock.innerText = `${studentsArray[i].firstName}  ${studentsArray[i].lastName}`;
            return;
        }
    }
    answerBlock.innerText = `unable to find student with id: ${searchWord}`;
}
function searchByName(searchWord) {
    let found = ''; let isTrue = false;
    for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i].firstName.indexOf(searchWord) > -1 || studentsArray[i].lastName.indexOf(searchWord) > -1) {
            found += `${studentsArray[i].firstName}  ${studentsArray[i].lastName}\n`;
            isTrue = true;
        }
    }
    if (!isTrue) {
        answerBlock.innerText = `unable to find student with name: ${searchWord}`;
    }
    else {
        answerBlock.innerText = `${found}`;
    }
}
function tdBuilder(num) {
    let td = '';
    for (let i = 0; i < num; i++) {
        td += '<td class="tdClass"></td>'
    }
    return td;
}
function tableBuilder(trNum, tdNum) {
    let table = '<table class="tableClass">';
    for (let i = 0; i < trNum; i++) {
        table += '<tr>' + tdBuilder(tdNum) + '</tr>';
    }
    table += '</table>';
    return table;
}