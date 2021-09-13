<?php
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];

$result = 0;
if($username=='admin' && $password=='123456'){
    $result = 1;
}
echo $result;
exit;