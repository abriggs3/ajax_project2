<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>${title}</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <script src="class_burrito.js"></script>
    <script src="burrito.js"></script>
</head>



<html>
<body>
<h2>Build Your Burrito</h2>
<form action="burritoCart" id="createBurritoForm">

    <label>Choose your burrito</label>
    <select name="burritoTypeSelect" id="burritoTypeSelect">
        <option value="chicken">Chicken - $6.20</option>
        <option value="steak">Steak - $6.75</option>
        <option value="carnitas">Carnitas - $6.60</option>
        <option value="barbacoa">Barbacoa - $6.60</option>
        <option value="vegetarian">Vegetarian -$6.20</option>
    </select><br>

    <label>Select a rice</label>
    <input type="radio" name="radioBtnRiceSelect" value="white rice" checked>White Rice
    <input type="radio" name="radioBtnRiceSelect" value="brown rice">Brown Rice<br>

    <label>Which type of beans</label>
    <input type="radio" name="radioBtnBeanSelect" value="pinto beans" checked>Pinto Beans
    <input type="radio" name="radioBtnBeanSelect" value="black beans">Black Beans<br>

    <label>Choose Salsa(s)</label>
    <input type="checkbox" name="chooseSalsa" value="Pico De Gallo">Pico De Gallo
    <input type="checkbox" name="chooseSalsa" value="Roasted Corn">Roasted Corn
    <input type="checkbox" name="chooseSalsa" value="Green Tomatillo">Tomatillo - Green
    <input type="checkbox" name="chooseSalsa" value="Red Tomatillo">Tomatillo - Red<br>

    <label>Add Guacamole $1.40</label>
    <input type="checkbox" id="addGuacamole" name="addGuacamole" value="addGuacamole"> <br>

    <input type="button" id="btnAddBurritoToOrder" value="add burrito to order">

</form><hr>
<div id="displayDivMain"></div>
</body>
</html>
<script>
    init();
</script>
