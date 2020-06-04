import $ from 'jquery';

import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

$(document).ready(() => {
  let Words;
  $('.iqdropdown').iqDropdown({
    // max total items
    maxItems: Infinity,
    // min total items
    minItems: 0,
    // text to show on the dropdown
    selectionText: 'Количество комнат',
    // text to show for multiple items
    textPlural: ['Количество комнат'],
    textPluralDeclination: Words,
    setSelectionText: (itemCount, totalItems) => {
      for (let i=0; i<itemCount.length; i++) {
        itemCount[i].
      }
      // eslint-disable-next-line max-len
      // if (itemCount > 0) { Words += itemCount + ((data-id < 2) ? ' спальня, ' : (bedroom < 5) ? ' спальни, ' : ' спален, '); }
    },
    items: {},
    // buttons to increment/decrement
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    // fires when an item quantity changes
    onChange: (id, count, totalItems) => true,
    // return false to prevent an item decrement
    beforeDecrement: (id, itemCount) => true,
    // return false to prevent an item increment
    beforeIncrement: (id, itemCount) => true,
  });

  // eslint-disable-next-line no-restricted-syntax
  const decrementButtons = document.querySelectorAll('.iqdropdown-menu > .iqdropdown-menu-option > .iqdropdown-item-controls > .button-decrement');
  const incrementButtons = document.querySelectorAll('.iqdropdown-menu > .iqdropdown-menu-option > .iqdropdown-item-controls > .button-increment');
  const counterValues = document.querySelectorAll('.iqdropdown-menu > .iqdropdown-menu-option > .iqdropdown-item-controls > span');
  const menuOptions = document.querySelectorAll('.iqdropdown-menu > .iqdropdown-menu-option');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < decrementButtons.length; i++) {
    const menuOption = menuOptions[i];
    const maxCount = menuOption.dataset.maxcount;
    const minCount = menuOption.dataset.mincount;
    decrementButtons[i].classList.add('unactive-button');
    // eslint-disable-next-line prefer-arrow-callback
    $('.iqdropdown-item-controls .counter').bind('DOMSubtreeModified', function gab() { // отслеживаем изменение содержимого блока 2
      if (counterValues[i].textContent === minCount) {
        decrementButtons[i].classList.add('unactive-button');
      } else if (counterValues[i].textContent === maxCount) {
        incrementButtons[i].classList.add('unactive-button');
      } else {
        incrementButtons[i].classList.remove('unactive-button');
        decrementButtons[i].classList.remove('unactive-button');
      }
    });
  }
});
