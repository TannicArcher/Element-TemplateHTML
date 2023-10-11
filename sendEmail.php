<?php

$name = trim($_POST['name']);
$email = $_POST['email'];
$subject = $_POST['subject'];
$site_owners_email = 'example@example.com'; // Replace this with your own email address
$message = $_POST['message'];

if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
    if ($phone == "") {
        $error['phone'] = "Please enter your phone";
    }
}

$msg = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>ROSETTA</h2>\r\n";
$msg .= "<p><strong>From:</strong> " . $name . "</p>\r\n";
$msg .= "<p><strong>Email:</strong> " . $email . "</p>\r\n";
if (isset($phone)) {
    $msg .= "<p><strong>Phone:</strong> " . $phone . "</p>\r\n";
}
$msg .= "<p><strong>Message:</strong> <br /> " . $message . " </p>";
$msg .= "</body></html>";

$headers = "From: " . $name . " <" . $email . "> \r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

if ($name == "") {
    $error['name'] = "Please enter your name";
}

if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
    $error['email'] = "Please enter a valid email address";
}

if ($message == "") {
    $error['message'] = "Please leave a comment.";
}
if ($subject == "") {
    $error['subject'] = "Please leave a subject.";
}

if (!$error) {
    $mail = mail($site_owners_email, $subject, $msg, $headers);
    
    echo "<div class='success'>" . $name . ". We've received your email. We'll be in touch with you as soon as possible! </div>";
} # end if no error
else {

    foreach ($error as $er) {
        echo '<div>' . $er . '</div>';
    }
} # end if there was an error sending
?>