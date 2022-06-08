/*Titulos*/
h1{
    font-family: 'Inknut Antiqua', serif;
    line-height: 130%;
}

.body-num{
    background: url("../../../Ejercicios-JavaScript/images/fondo_numeros.jpg");
    background-size: cover;
}

.centrado{
    margin: auto;
}

.div-conver{
    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 20px;
    max-width: 430px;
    text-align: center;
    margin: 10px auto;
    padding: 10px 10px;
    margin-top: 50px;
}

.color-div{
    background: #feab5a;
    max-width: 500px;
}

.operacionesMat input{
    max-width: 40px;
}

/*Formulario*/
input{
    border-radius: 2px;
    box-shadow: 5px 5px 10px #7a8aac;
}

input:focus {
    border-color: #19ac67;
}

.ejer{
    border:1px solid #000000;
    background: rgba(240, 255, 105, 0.47);
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    border: 1px solid #555;
}

li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
    font-family: 'Inknut Antiqua', serif;
    font-size: 10px;
}

li {
    text-align: center;
    border-bottom: 1px solid #555;
}

li:last-child {
    border-bottom: none;
}

li a.active {
    background-color: #4CAF50;
    color: white;
}

li a:hover:not(.active) {
    background-color: #555;
    color: white;
}