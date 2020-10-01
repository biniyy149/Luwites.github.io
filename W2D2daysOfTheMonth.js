function  getDateAgo( date, n) {
    date.setDate(date.getDate() - n);
    return  date;
}


let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); 
console.log( getDateAgo(date, 2) ); 
console.log( getDateAgo(date, 365) ); 