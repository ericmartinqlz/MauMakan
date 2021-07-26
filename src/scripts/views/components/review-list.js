/* eslint-disable no-underscore-dangle */
import './review-item';

class ReviewList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._reviews.forEach((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;
      reviewItemElement.tabIndex = '0';
      this.appendChild(reviewItemElement);
      this.innerHTML += '<hr>';
    });
  }
}

customElements.define('review-list', ReviewList);
