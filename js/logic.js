// console.log(document);

var N = 11.5;

if (N % 2 === 1) {
    document.getElementById('title').innerText = N + ':Toq son'
} else if (N % 2 === 0) {
    document.getElementById('title').innerText = N + ':Juft son'
} else {
    document.getElementById('title').innerText = N + ':Juft ham, toq ham emas!'
}


var age = 10;
while (age < 18) {
    console.log('Sizning yoshingiz 18 yoshdan kichik: ' + age)
    age++;
}

document.getElementById('ageInfo').innerHTML = 'Siz 18 yoshdasiz!'

for (i = 1; i <= 10; i += 2) {
    if (i === 5) {
        break;
    }
    console.log(i)
}


for (n = 10; n <= 18; n++) {
    console.log('Yosh: ' + n)
}

for (i = 7; i <= 25; i += 7) {
    console.log(i);
}

var number = 7;
var tubmi = true;

if (number === 2) {
    console.log('Tub son: ' + number)
} else if (number > 2) {
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            tubmi = false;
            break;
        }
    }
} else {
    console.log('Son tub emas!: ' + number)
}

if (tubmi) {
    console.log('Tub son: ' + number)
} else {
    console.log('Tub son emas: ' + number)
}
