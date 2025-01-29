function createTable() {
    let rows = parseInt(prompt("Input number of rows"));
    let columns = parseInt(prompt("Input number of columns"));
    const table = document.getElementById("myTable");
    table.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < columns; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
