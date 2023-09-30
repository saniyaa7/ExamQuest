<?php
$connection=mysqli_connect("localhost","root","","Project");
$sql="SELECt * from panel_members";
$res=mysqli_query($connection,$sql);

while($res=mysqli_fetch_assoc($res))
{
    $json[]=$row;
}
echo json_encode($json);
?>