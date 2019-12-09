let tabs = document.querySelectorAll('.tab');


function expand() {

  Array.from(tabs).forEach(tab => {
    tab.addEventListener('click', () => {
tabs.forEach(tab => {
tab.classList.contains('active') ? 
	tab.classList.remove('active') : null;
});
      tab.classList.add('active');
    });
  });
}





expand();
