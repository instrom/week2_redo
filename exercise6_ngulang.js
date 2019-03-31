console.log('LOOPING PERTAMA')
var x = 0;
while (x <= 20) {
    x += 2
    console.log(x + ' - I love Coding')
}
console.log('LOOPING KEDUA')
var y = 22;
while ( y > 2) {
    y -= 2
    console.log(y + ' - I will become fullstack developer')
}

console.log('LOOPING PERTAMA')
for (var i=1; i <= 20; i++) {
    console.log(i + ' - I love coding')
}
console.log('LOOPING KEDUA')
for (var i=20; i > 0; i--) {
    console.log(i + ' - I will become fullstack developer')
}

for (var i=1; i < 100; i++) {
    if(i%2 === 0) {
        console.log ('GENAP')
    } else if (i%2 !== 0) {
        console.log('GANJIL')
    }
}

for (var i=1; i <= 100; i += 2) {
    if(i%3 === 0) {
        console.log( i + ' KELIPATAN ' + i)
    }
}

for (var i=1; i <= 100; i += 5) {
    if(i%6 === 0) {
        console.log(i + ' KELIPATAN ' + i)
    }
}

for (var i=1 ; i <= 100; i += 9) {
    if(i%10 === 0) {
        console.log(i + ' KELIPATAN ' + i)
    }
}