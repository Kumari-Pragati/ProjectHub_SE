<?php
session_start();
    
    $id = $_SESSION['user_id'];
    

$servername = "localhost"; 
$username = "root"; 
$password = "Meiko"; 
$database = "expense"; 

$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT amount, date, description, mode_of_payment, expense_category FROM expenses where id = $id";
$result = $conn->query($sql);



$conn->close();


header('Content-Type: application/json');
echo json_encode($result->fetch_all(MYSQLI_ASSOC));
?>
