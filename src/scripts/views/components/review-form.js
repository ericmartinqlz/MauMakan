import RestaurantSource from '../../data/restaurant-source';
import DetailInitiator from '../../utils/detail-initiator';
import UrlParser from '../../routes/url-parser';

class ReviewForm extends HTMLElement {
  connectedCallback() {
    this.render();
    document.querySelector('#formMessage').innerHTML = '';
    this.querySelector('#reviewForm').addEventListener('submit', this._submit);
  }

  _submit(event) {
    event.preventDefault();

    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const nameValue = this.name.value;
    const reviewValue = this.review.value;

    if (nameValue === '') {
      DetailInitiator.initMessage('Form Nama harus diisi!', 'error');
      return;
    }

    if (reviewValue === '') {
      DetailInitiator.initMessage('Form Review harus diisi!', 'error');
      return;
    }

    RestaurantSource.addReview({
      id,
      name: nameValue,
      review: reviewValue,
    }).then(async () => {
      const reviewListElement = document.querySelector('review-list');
      const { customerReviews } = await RestaurantSource.detailRestaurant(id);
      reviewListElement.reviews = customerReviews;

      this.name.value = '';
      this.review.value = '';
      DetailInitiator.initMessage('Review berhasil dikirim!', 'success');
    });
  }

  render() {
    this.innerHTML = `
      <form class="form" id="reviewForm">
        <span class="form-message" id="formMessage" tabindex="-1"></span>
        <input class="form-input" type="text" name="name" placeholder="Nama Anda" tabindex="0">
        <textarea class="form-input" name="review" placeholder="Tulis Review" tabindex="0" rows="3"></textarea>
        <button id="form-submit" type="submit" tabindex="0">Submit</button>
      </form>
    `;
  }
}

customElements.define('review-form', ReviewForm);
