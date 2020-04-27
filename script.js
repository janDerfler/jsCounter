let counter = 0;

$('#increaseButton').click(() => {
    counter++;
    $('#counter').text(counter);
})

$('#decreaseButton').click(() => {
    counter--;
    $('#counter').text(counter);
})