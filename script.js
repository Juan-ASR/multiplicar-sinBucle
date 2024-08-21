function generarTabla(){
    let numero = document.getElementById('num').value

    document.getElementById('i1').innerText = numero + " x 1 = " + (numero*1);
    document.getElementById('i2').innerText = numero + " x 2 = " + (numero*2);
    document.getElementById('i3').innerText = numero + " x 3 = " + (numero*3);
    document.getElementById('i4').innerText = numero + " x 4 = " + (numero*4);
    document.getElementById('i5').innerText = numero + " x 5 = " + (numero*5);
    document.getElementById('i6').innerText = numero + " x 6 = " + (numero*6);
    document.getElementById('i7').innerText = numero + " x 7 = " + (numero*7);
    document.getElementById('i8').innerText = numero + " x 8 = " + (numero*8);
    document.getElementById('i9').innerText = numero + " x 9 = " + (numero*9);
    document.getElementById('i10').innerText = numero + " x 10 = " + (numero*10);
}