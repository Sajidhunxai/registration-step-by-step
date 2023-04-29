<?php

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  // Get the form data
  $age = $_POST["age"];
  $gender = $_POST["gender"];
  $location = $_POST["location"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  
  // Set the recipient email address
  $to = $email;
  
  // Set the email subject
  $subject = "New Form Submission";
  
  // Set the email message
  $message = "Age: " . $age . "\n\n";
  $message .= "Gender: " . $gender . "\n\n";
  $message .= "Location: " . $location . "\n\n";
  $message .= "Email Address: " . $email . "\n\n";
  $message .= "Password: " . $password . "\n\n";
  
  // Set the email headers
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  
  // Send the email
  if (mail($to, $subject, $message, $headers)) {
    echo "Thank you for your submission!";
  } else {
    echo "Oops! Something went wrong.";
  }
}

?>