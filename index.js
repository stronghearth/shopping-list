'use strict';

/* text is typed in input -> when Add Item is clicked 
    should result in new li with text inputed in it */

function addNewItem () {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let additionalItem = $("#shopping-list-entry").val();

    let newLi = `<li><span class="shopping-item">${additionalItem}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
        </div>
        </li>`;
        
    $('ul').append(newLi);
  });
}

$(addNewItem);

/* when 'Check' button is clicked, item is struckthrough */

function checkItemOff () {
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    $(event.target).closest('li').children('span').toggleClass('shopping-item__checked');
  });
}

$(checkItemOff);

/* when 'Delete button is clicked, item is deleted permenently */

function deleteAnItem () {
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget).closest('li').remove();
  });
}

$(deleteAnItem);