const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
   if (this.checked)
   {
    document.body.classList.toggle('dark')
   } 


});