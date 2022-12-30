const adviceContainer = document.querySelector('.advice');
const adviceNumber = document.querySelector('.adviceNumber');
const nextBtn = document.querySelector('#next');
fetch('https://api.adviceslip.com/advice')
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    console.log(data);
    adviceContainer.innerHTML = data.slip.advice;
    adviceNumber.innerHTML = `Advice #${data.slip.id}`;
  });
nextBtn.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      adviceContainer.innerHTML = data.slip.advice;
      adviceNumber.innerHTML = `Advice #${data.slip.id}`;
    });
});
