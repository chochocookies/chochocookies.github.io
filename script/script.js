// navbar


// typing effect
const words = [
    'Web Developer, ',
    'Web Design',
    'Front End Developer',
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
    const word = words[i];
    const speed = isDeleting ? 50 : 150;

    if (j < word.length && !isDeleting) {
    document.querySelector('.typing').innerHTML += word.charAt(j);
    j++;
    setTimeout(type, speed);
    } else if (isDeleting && j > 0) {
    document.querySelector('.typing').innerHTML = word.substring(0, j-1);
    j--;
    setTimeout(type, speed);
    } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
        i = (i + 1) % words.length;
    }
    setTimeout(type, isDeleting ? speed/2 : speed*2);
    document.querySelector('.typing').className = isDeleting ? 'typing deleted' : 'typing typed';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, 1000);
});
