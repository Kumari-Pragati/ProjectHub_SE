<?php
session_start();

$id = $_SESSION['user_id'];

$servername = "localhost";
$username = "root";
$password = "Meiko";
$dbname = "expense";


$conn = mysqli_connect($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



$amount = $_POST['amount'];
$date = $_POST['date'];
$description = $_POST['description'];
$mode = $_POST['mode'];
$category = $_POST['category'];


$sql = "INSERT INTO expenses (id,amount, date, description, mode_of_payment, expense_category)
        VALUES ($id,'$amount', '$date', '$description', '$mode', '$category')";

if ($conn->query($sql) === TRUE) {
    
    
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();


header('Location: http://localhost/Expense_final/Frontend/');
exit(); 
?>
