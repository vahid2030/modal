'use strict';

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');

const removeModal = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
const addModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', removeModal);
}

closeModal.addEventListener('click', addModal);

overLay.addEventListener('click', addModal);

document.addEventListener('keydown', function (e) {
  // if (e.key === 'Escape') {
  //   if (!closeModal.classList.contains('hidden')) {
  //     addModal();
  //   }
  // }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    addModal();
  }
});
