const modalButtons = document.querySelectorAll('.show-modal');
const hiddenModal = document.querySelectorAll('.hidden');

modalButtons.forEach(function (button) {
	button.onclick = function () {
		hiddenModal.forEach(function (modal) {
			modal.style.display = 'block';
		});

		// Closing the modal
		const closeModalButton = document.querySelector('.close-modal');

		if (closeModalButton) { // To mae sure that modal content is parsed.
			closeModalButton.onclick = function () {
				hiddenModal.forEach(function (modal) {
					modal.style.display = 'none';
				});
			};
		}
	};
});
