<?php

$to = "takututu95@gmail.com" . "\r\n";
$subjec = "это с вашего сайта";
if(empty($_POST['name'] )) {
    $message = $_POST['name'] . "\r\n";
}
if(empty($_POST['telephone'] )) {
    $message .= $_POST['telephone'] . "\r\n";
}
if(empty($_POST['text'] )) {
    $message .= $_POST['text'] . "\r\n";
}
if(empty($_POST['email'] )) {
    $message .= $_POST['email'] . "\r\n";
}
if(empty($_POST['comment'] )) {
    $message .= $_POST['comment'] . "\r\n";
}




mail ($to, $message, $subjec);
?>

<script>
    setTimeout(() => {
        location.repalce("/");
    },1000);
</script>