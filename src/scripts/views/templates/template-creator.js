const likeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" tabindex="0">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const unlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like" tabindex="0">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const noDataTemplate = () => `
  <p class="no-data" tabindex="0">Tidak ada Restaurant ditemukan!</p>
`;

const noDetailTemplate = () => `
  <p class="no-data" tabindex="0">Detail Restaurant tidak dapat dimuat!</p>
  <p class="no-data" tabindex="0">Silahkan periksa kembali jaringan anda</p>
`;

export {
  likeRestaurantButtonTemplate,
  unlikeRestaurantButtonTemplate,
  noDataTemplate,
  noDetailTemplate,
};
