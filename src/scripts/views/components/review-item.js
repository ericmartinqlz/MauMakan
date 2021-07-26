class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="review-head">
        <h4>${this._review.name}</h4>
        <p><small>${this._review.date}</small></p>
      </div>
      <div class="review-body">
        <blockquote>${this._review.review}</blockquote>
      </div>
    `;
  }
}

customElements.define('review-item', ReviewItem);
