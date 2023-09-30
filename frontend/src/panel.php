<?php
header('Access-Control-Allow-Origin: *');
$connection = mysqli_connect("localhost", "root", "", "CSE");
$tb = $_GET['tb']; // Get the value of 'tb' from the query parameters
$sql = "SELECT * FROM $tb";
$res = mysqli_query($connection, $sql);
$json = array();

while ($row = mysqli_fetch_assoc($res)) {
    $json[] = $row;
}

echo json_encode($json);

?>
