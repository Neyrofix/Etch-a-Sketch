const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const table = document.createElement('div');
    table.classList.add('row');
    container.appendChild(table);

    for (let j = 0; j < 16; j++) {
        const row = document.createElement('div');
        row.classList.add('col');
        row.textContent = 'B';
        table.appendChild(row);
    }
}