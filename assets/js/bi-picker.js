$(document).on('rex:ready', async function(event, container) {
    const response = await fetch('/assets/addons/iconpicker/iconsets/bi.json');
    const result = await response.json();

    let all = document.querySelectorAll('.bi-iconpicker');

    Array.from({ length: all.length }, (v, k) => k).forEach((index) => {
        let element = all.item(index);
        element.classList.add('form-control');

        id = index;

        if ($(element).data("bi-iconpicker") !== null) {
            id = $(element).data("bi-iconpicker");
        }

        // check if input-group is available
        if (!element.parentNode.classList.contains('input-group')) {
            element.parentNode.classList.add('input-group');
            // force display table...
            element.parentNode.style.setProperty('display', 'table', 'important');
        }

        // check if input-group-addon is available
        if (!(element.previousElementSibling && element.previousElementSibling.classList.contains('input-group-addon'))) {
            //set input-group and default icon
            const placeholder = document.createElement('div');
            placeholder.innerHTML = '<span class="input-group-addon selected-icon-' + id + '"></span>';
            element.parentNode.insertBefore(placeholder.firstElementChild, element);
        }


        iconpicker = new Iconpicker(element, {
            icons: result,
            showSelectedIn: document.querySelector('.selected-icon-' + id),
            searchable: true,
            selectedClass: 'selected',
            containerClass: 'bi-picker',
            hideOnSelect: true,
            fade: false,
            defaultValue: element.value,
            valueFormat: val => `${val}`
        });

    });
});