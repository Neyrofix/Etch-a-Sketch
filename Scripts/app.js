// default color for cells
var cells_color = 'black';

// draw the default field 
const container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    const table = document.createElement('div');
    table.classList.add('row');
    container.appendChild(table);

    for (let j = 0; j < 16; j++) {
        const row = document.createElement('div');
        row.classList.add('col');
        table.appendChild(row);
    }
}

// set addEventListener on the drawing field
var field = document.querySelectorAll('.col');
field.forEach((div) => {
    div.addEventListener('mouseover', color_changer);
});

function color_changer(e) {
    e.target.style.background = cells_color;
}
