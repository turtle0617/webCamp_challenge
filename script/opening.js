(function() {
  const opening = document.querySelector('.opening');
  const everything = document.querySelectorAll('.opening ~ *');
  console.log(everything);
  setTimeout(function() {
    console.log('>>>');
    opening.style.display = 'none';
    everything.forEach(el => el.style.visibility = 'visible');
  }, 3500);
}());