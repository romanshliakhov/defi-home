const feedbackBtn = document.querySelectorAll('.feedback__full');
const feedbackCard = document.querySelectorAll('.feedback');

feedbackBtn.forEach(item => {
  item.addEventListener('click', function() {

    feedbackCard.forEach(card => {
      card.classList.add("full");
    })
  })
})
