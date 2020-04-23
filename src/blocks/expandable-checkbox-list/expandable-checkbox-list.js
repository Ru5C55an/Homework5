/* eslint-disable no-underscore-dangle */
import $ from 'jquery';

class ExpandableCheckboxList {
  constructor(component) {
    this.component = component;
    this._attachEventHandler();
    // this.$list = $('.js-expandable-checkbox-list', this.$component);
  }

  _attachEventHandler() {
    // eslint-disable-next-line max-len
    // $('.js-expandable-checkbox-list', this.$component).on('click', () => this.$list.toggleClass('js-expandable-checkbox-list_open'));
    $(this.component).on('click', () => $(this.component).toggleClass('js-expandable-checkbox-list_open'));
  }
}


$(() => {
  $('.js-expandable-checkbox-list').each((index, node) => {
    // eslint-disable-next-line no-new
    new ExpandableCheckboxList(node);
  });
});
