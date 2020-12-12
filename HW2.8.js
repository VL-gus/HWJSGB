let val = +prompt('ВВеди число','');
let pow = +prompt('ВВеди степень','');
function power(val , pow){
    if (pow !== 1){
        return val*power(val, pow-1);

    }
    return val;

}
alert(power(2,3));