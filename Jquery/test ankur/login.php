<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <?php
    session_start();
if(isset($_POST['sub']))
{
$email = $_POST['email'];
$password =$_POST['password'];
// echo $password;
include("con.php");
$query ="select name from tbl where email='$email' AND password='$password'";
$res =mysqli_query($con,$query);
$row =mysqli_fetch_array($res);
if($row>0)
{
    $_SESSION['name']=$row['name'];
    header("location:welcome.php");
}
else{
    echo "login or passowrd is wrong";
}

}

?>
    <form action="" method="post">
    <label for="email">Email</label><br>
    <input type="text" name ="email"><br>
    <label for="password">Password</label><br>
    <input type="text" name ="password"><br>
    <input type="submit" value="login" name='sub'>

    </form>
</body>
</html>