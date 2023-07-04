let count = 0;

const value = document.querySelector('#value');
const button = document.querySelectorAll('.btn');

button.forEach(function(btn) {
    btn.addEventListener('click', function(b) {
        const style = b.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        } else if(style.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        if(count > 0){
            value.style.color = '#50c878';
        }
        if(count < 0) {
            value.style.color = '#ff2400';
        }
        if(count === 0) {
            value.style.color = '#1706f8';
        }
        value.textContent = count;
    });
});