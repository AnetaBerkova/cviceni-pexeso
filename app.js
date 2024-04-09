console.log('Funguju!')

function otocKarticku() {
this.classList.toggle('otocena')}

const karticky = document.querySelectorAll('.karticka')

karticky.forEach(karticka => {
karticka.addEventListener('click', otocKarticku)})