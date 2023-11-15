document.querySelector('#openModalBtn').addEventListener('click', function() {
  document.querySelector('#myModal').style.display = 'block';
});

document.querySelector('#closeModalBtn').addEventListener('click', function() {
  document.querySelector('#myModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.querySelector('#myModal')) {
      document.querySelector('#myModal').style.display = 'none';
  }
});
