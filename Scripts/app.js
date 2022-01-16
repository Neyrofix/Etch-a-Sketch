// default 
var cells_color = 'black';
var field_size = 16;

// draw the default field 
const container = document.querySelector('#container');
for (let i = 0; i < field_size; i++) {
    const table = document.createElement('div');
    table.classList.add('row');
    container.appendChild(table);

    for (let j = 0; j < field_size; j++) {
        const row = document.createElement('div');
        row.classList.add('col');
        table.appendChild(row);
    }
}

// set addEventListener on the drawing field with drawing function
var field = document.querySelectorAll('.col');
field.forEach((div) => {
    div.addEventListener('mouseover', color_changer);
});

function color_changer(e) {
    e.target.style.background = cells_color;
}

//set addEventListener on te clearing button with clearing function
var clearing_button = document.querySelector('#clear');
clearing_button.addEventListener('click', clear_all);

function clear_all() {
    var fld = document.querySelectorAll('.col');
    fld.forEach((div) => {
        div.style.background = 'white';
    })
}

