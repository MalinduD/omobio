<?php
echo("file");

require('connection.php');
 
$email=$_POST['email'];
$rgpwd=$_POST['password'];

//inserting data into users table
$query ="INSERT INTO users(email,password) values('$email','$rgpwd')";
if (mysqli_query($conn,$query)){
	echo("data inserted");
}else{
	echo("Error");
}




?>
