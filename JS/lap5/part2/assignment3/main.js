let enterAgain;

clcarea();
function clcarea() {
    let shape = prompt(`Enter the shape name.
EX: circle, triangle, square, rectangle, parallelogram, trapezium, ellipse`);

    if (shape == 'circle') {
        let radius = prompt('Enter radius of circle.')
        enterAgain = confirm(`Area of circle = ${Math.PI * Math.pow(radius, 2)}

Calc area to another shape?`);
    }else if (shape == 'triangle') {
        let base = prompt('Enter base of triangle.');
        let height = prompt('Enter height of triangle.');
        enterAgain = confirm(`Area of triangle = ${0.5 * base * height}

Calc area to another shape?`);
    }else if (shape == 'square') {
        let length = prompt('Enter length of square side.');
        enterAgain = confirm(`Area of square = ${Math.pow(length, 2)}

Calc area to another shape?`);
    }else if (shape == 'rectangle') {
        let length = prompt('Enter length of rectangle.');
        let width = prompt('Enter width of rectangle.');
        enterAgain = confirm(`Area of rectangle = ${length * width}

Calc area to another shape?`);
    }else if (shape == 'parallelogram') {
        let base = prompt('Enter base of parallelogram.');
        let height = prompt('Enter vertical height of parallelogram.');
        enterAgain = confirm(`Area of parallelogram = ${base * height}

Calc area to another shape?`);
    }else if (shape == 'trapezium') {
        let side1 = prompt('Enter Side1 length of trapezium.');
        let side2 = prompt('Enter Side2 length of trapezium.');
        let height = prompt('Enter height of trapezium.');
        enterAgain = confirm(`Area of trapezium = ${0.5 * (side1 + side2) * height}

Calc area to another shape?`);
    }else if (shape == 'ellipse') {
        let a = prompt('Enter ½ minor axis of ellipse.');
        let b = prompt('Enter ½ minor axis of ellipse.');
        enterAgain = confirm(`Area of ellipse = ${Math.PI * a * b}

Calc area to another shape?`);
    }
    entershapeagain();
}

function entershapeagain() {
    if (enterAgain) {
        clcarea();
    }
}