/* eslint-disable no-underscore-dangle */
import $ from 'jquery';

class LikeButton {
  constructor(component) {
    this.component = component;
    this.$counter = $('.js-like-button__counter', this.component);
    this.$clicks = this.$counter.html();
    this._attachEventHandler();
  }

  _attachEventHandler() {
    $(this.component).on('click', () => {
      // eslint-disable-next-line eqeqeq
      if (this.$clicks == 0) {
        this.$clicks = 1 + +this.$clicks;
      } else { this.$clicks -= 1; }

      this.$counter.html(this.$clicks);
      $(this.component).toggleClass('like-button_theme_liked');
    });
  }
}

$(() => {
  $('.js-like-button').each((index, node) => {
    // eslint-disable-next-line no-new
    new LikeButton(node);
  });
});
