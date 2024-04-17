<?php

$servername = "localhost"; 
$username = "root"; 
$password = "Meiko"; 
$dbname = "expense"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $user_name = $_POST['username'];
    $user_password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    
    if ($user_password !== $confirm_password) {
        echo "Error: Passwords do not match";
    } else {
        
        $check_sql = "SELECT * FROM users WHERE user_name = ?";
        $check_stmt = $conn->prepare($check_sql);
        $check_stmt->bind_param("s", $user_name);
        $check_stmt->execute();
        $result = $check_stmt->get_result();

        if ($result->num_rows > 0) {
            
            echo "<script>
                    alert('User already exists. Please login.');
                    window.location.href = 'http:
                  </script>";
            exit; 
        } else {
            
            $sql = "INSERT INTO users (user_name, user_password) VALUES (?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ss", $user_name, $user_password);

            
            if ($stmt->execute()) {
                echo "<script>
                        alert('User registered successfully!');
                        window.location.href = 'http:
                      </script>";
                exit; 
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }
}


$conn->close();
?>