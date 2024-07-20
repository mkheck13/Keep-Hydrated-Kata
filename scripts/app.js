// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5




// I choose this one because I'm pretty sick and it seemed like it wouldn't hurt my head to much

// to just of it is that we need to round down to the smallest value
// we are not returning any decimals
// Math.floor seems to be the way to go
// if we have it return time divided by 2 then it will return what we need
function litres(time){
    return Math.floor(time / 2);
}