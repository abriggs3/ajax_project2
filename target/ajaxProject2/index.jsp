<%@include file="tagLibrary.jsp"%>
<c:set var="title" value="Order" />
<%@include file="head.jsp"%>
<html>
<body>
<h2>Build Your Burrito</h2>
<form action="/burritoCart">

    <label>Choose your burrito</label>
    <select id="burritoTypeSelect">
        <option value="chicken">Chicken - $6.20</option>
        <option value="steak">Steak - $6.75</option>
        <option value="carnitas">Carnitas - $6.60</option>
        <option value="barbacoa">Barbacoa - $6.60</option>
        <option value="vegetarian">Vegetarian -$6.20</option>
    </select><br>

    <label>Select a rice</label>
    <input type="radio" name="radioBtnRiceSelect" value="riceWhite" checked>White Rice
    <input type="radio" name="radioBtnRiceSelect" value="riceBrown">Brown Rice<br>

    <label>Which type of beans</label>
    <input type="radio" name="radioBtnBeanSelect" value="beanPinto" checked>Pinto Beans
    <input type="radio" name="radioBtnBeanSelect" value="beanBlack">Black Beans<br>

    <label>Choose Salsa(s)</label>
    <input type="checkbox" name="chooseSalsa" value="picoDeGallo">Pico De Gallo
    <input type="checkbox" name="chooseSalsa" value="roastedCorn">Roasted Corn
    <input type="checkbox" name="chooseSalsa" value="tomatilloGreen">Tomatillo - Green
    <input type="checkbox" name="chooseSalsa" value="tomatilloRed">Tomatillo - Red<br>

    <label>Add Guacamole</label>
    <input type="checkbox" name="addGuacamole" value="addGuacamole"> <br>

    <input type="button" value="add burrito to order">
    <input type="submit" value="submit order to servlet">
</form>

</body>
</html>
