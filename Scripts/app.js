var cells_color = 'black'


field_view();
drawer();


function clearing() {
    let clearing_button = document.querySelector('#clear');
    clearing_button.addEventListener('click', clear_items);
}

function clear_items() {
    let fld = document.querySelectorAll('.col');
    fld.forEach((div) => {
        div.style.background = 'white';
    })
}

function drawer() {
    let field = document.querySelectorAll('.col');
    field.forEach((div) => {
        div.addEventListener('mouseover', color_changer);
    });
}

function color_changer(e) {
    e.target.style.background = cells_color;
}

function field_view(field_size = 16) {
    if (field_size >= 16 && field_size <= 100) {
        // remove old version
        let rows = document.querySelectorAll('.row');
        rows.forEach((div) => {
            div.remove()
        })

        // draw new version
        let container = document.querySelector('#container')
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
        drawer();
    } else {
        return alert('wrong value!');
    }
}

function size_changer() {
    var si = prompt('enter the length of the side of the field, which should not be more than 100 and less than 16', 32);
    si = Number(si);
    field_view(si);
}
