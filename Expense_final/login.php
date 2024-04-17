<?php


$servername = "localhost"; 
$username = "root"; 
$password = "Meiko"; 
$dbname = "expense"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username  = $_POST['username'];
    $user_password = $_POST['password'];

    $sql = "SELECT id FROM users WHERE user_name = ? AND user_password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $user_password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {

        $row = $result->fetch_assoc();
        $_SESSION['user_id'] = $row['id'];
        echo "Login successful!";
        header('Location: http://localhost/Expense_final/Frontend/1.html');
        exit(); 
    } else {
        echo "Incorrect username or password!";
    }
}
$conn->close();
?>
