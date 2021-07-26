const DetailInitiator = {
  initCategory(categories) {
    let stringHTML = '';

    categories.forEach((category) => {
      stringHTML += `${category.name}, `;
    });

    return stringHTML.slice(0, -2);
  },

  initRating(rating) {
    let stringHTML = '<span>';
    let i = 0;

    for (i; i < Math.floor(rating); i += 1) {
      stringHTML += '<i class="fas fa-star"></i>';
    }
    for (i; i < 5; i += 1) {
      stringHTML += '<i class="far fa-star"></i>';
    }
    stringHTML += `</span> (${rating})`;

    return stringHTML;
  },

  initMenu(menus) {
    let stringHTML = '';

    menus.forEach((menu) => {
      stringHTML += `<li>${menu.name}</li>`;
    });

    return stringHTML;
  },

  initMessage(message, condition) {
    const messageElement = document.querySelector('#formMessage');
    if (condition === 'error') {
      messageElement.style.color = 'red';
    } else {
      messageElement.style.color = 'green';
    }

    document.querySelector('#formMessage').innerHTML = message;
    messageElement.focus();
  },
};

export default DetailInitiator;
