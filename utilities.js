document.addEventListener('DOMContentLoaded', function() {
      ScrollReveal().reveal('.page', {delay: 1000});

    const themeButton = document.getElementById('theme-toggle');

    themeButton.addEventListener('click', function() {

        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            themeButton.textContent = 'Light Mode';
        } else {
            themeButton.textContent = 'Dark Mode';
        }

    });

});
    


  /*  
    let clickOMatic = function() {
        alert('Clicked');
    };

    const click = document.getElementById('click');

    click.addEventListener('click', function() {
        clickOMatic();
    });
*/

