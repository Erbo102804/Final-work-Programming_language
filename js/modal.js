// MODAL WINDOW

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalClose = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTrigger.onclick = () => openModal();
modalClose.onclick = () => closeModal();

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

// Auto open modal after 10 seconds
setTimeout(openModal, 10000);

// Scroll trigger for modal
let modalOpened = false;
window.addEventListener('scroll', () => {
    if (!modalOpened && (window.scrollY + window.innerHeight) >= document.body.scrollHeight - 1) {
        openModal();
        modalOpened = true;
    }
});
