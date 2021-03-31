<?php  
 require('connection.php');

if (isset($_POST['email']) and isset($_POST['password'])){
	
// Assigning POST values to variables.
$username = $_POST['email'];
$password = $_POST['password'];

//avoid sql injection
$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

// CHECK FOR THE RECORD FROM TABLE
$query = "SELECT * FROM `users` WHERE email='$username' and Password='$password'";
 
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);

if ($count == 1){
//echo "Login Credentials verified";
echo "logged in";

}else{
	echo("invalid login");
}
?>