let number = 0;
let imgNumber = 7;
let points = document.getElementsByClassName('point');
let images = document.getElementsByClassName('img');

points[number].classList.add('select');
number++;


function next() {
    points[number].classList.add('select');
    points[number - 1].classList.remove('select');
    images[imgNumber].classList.add('hid-img');
    images[imgNumber].classList.remove('show-img');
    if (number == 7) {
        document.getElementById('next').classList.add('btn-secondary')
    } else {
        document.getElementById('prev').classList.remove('btn-secondary');
    }
    number++;
    imgNumber--;
}

function prev() {
    if (number > 1) {
        points[number - 1].classList.remove('select');
        points[number - 2].classList.add('select');
        images[imgNumber + 1].classList.add('show-img');
        number--;
        imgNumber++;
        if (number == 1) {
            document.getElementById('prev').classList.add('btn-secondary');
        } else {
            document.getElementById('next').classList.remove('btn-secondary');
        }
    }
}