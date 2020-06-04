/* eslint-disable no-underscore-dangle */
import $ from 'jquery';

class DateDropdown {
  constructor(component) {
    this.component = component;
    const $start = $('.js-date-dropdown__start', this.component);
    const $end = $('.js-date-dropdown__end', this.component);
    this._attachEventHandler($start, $end);
  }

  // eslint-disable-next-line class-methods-use-this
  _attachEventHandler($start, $end) {
    $start.datepicker({
      // eslint-disable-next-line func-names
      // eslint-disable-next-line object-shorthand
      onSelect: function (fd, d, picker) {
        // eslint-disable-next-line quotes
        $start.val(fd.split("-")[0]);
        // eslint-disable-next-line quotes
        $end.val(fd.split("-")[1]);
      },
      minDate: new Date(),
      clearButton: 'true',
      prevHtml: '<i class="material-icons">arrow_back</i>',
      nextHtml: '<i class="material-icons">arrow_forward</i>',
      navTitles: {
        days: '<i>MM yyyy</i>',
      },
    });
    $end.on('click', () => $start.data('datepicker').show());
    const submitButton = $('<button class="datepicker--button button button_theme_simple-colorized" data-action="submit">Применить</button>');
    $('.datepicker--buttons').append(submitButton);
    submitButton.on('click', () => $start.data('datepicker').hide());
  }
}

$(() => {
  $('.js-date-dropdown').each((index, node) => {
    // eslint-disable-next-line no-new
    new DateDropdown(node);
  });
});
