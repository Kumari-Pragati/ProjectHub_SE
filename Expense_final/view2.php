<?php
session_start();

$id = $_SESSION['user_id'];

$servername = "localhost";
$username = "root";
$password = "Meiko";
$dbname = "expense";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT expense_category, SUM(amount) AS total_amount FROM expenses where id = $id GROUP BY expense_category";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}


$conn->close();


header('Content-Type: application/json');
echo json_encode($data);
?>
