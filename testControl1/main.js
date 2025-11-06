const input = document.getElementById('i1');
const valueBlock = document.getElementById('valueBlock');
const addBut = document.getElementById('add');
addBut.onclick = function () {
    const iValue = input.value;
    if (/^\s*([A-Za-z0-9]+)\s*=\s*([A-Za-z0-9]+)\s*$/.test(iValue)) {
        input.value = '';
        const ls = JSON.parse(localStorage.getItem('array')) || [];
        ls.push(iValue);
        localStorage.setItem('array', JSON.stringify(ls));
        valueBlock.innerHTML += `${iValue} <br>`;
    }
}
window.onload = function () {
    const array = JSON.parse(localStorage.getItem('array')) || [];
    for (let i = 0; i < array.length; i++) {
        valueBlock.innerHTML += `${array[i]} <br>`;
    }
}
const deleteBut = document.getElementById('delete');
deleteBut.onclick = function () {
    localStorage.clear();
    valueBlock.innerText = '';
}
const sortName = document.getElementById('sortName');
const sortValue = document.getElementById('sortValue');
sortName.onclick = function () {
    const array = JSON.parse(localStorage.getItem('array'));

}