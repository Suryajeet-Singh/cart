
<!DOCTYPE html>
<html lang="en">
<head>
   
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registeration</title>
</head>
<body>
    <?php
    if(isset($_POST['sub']))
    {
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];
// echo $email;
include("con.php");
$query ="insert into tbl(name,email,password) values('$name','$email','$password')";
mysqli_query($con,$query);
    }
    ?>

    <h1>Registeration Form</h1>
    <div id="main">
    <form action="" method="post">
    <label for="name">Name</label><br>
    <input type="text" name ="name"><br>
    <label for="email">Email</label><br>
    <input type="text" name ="email"><br>
    <label for="password">Password</label><br>
    <input type="text" name ="password"><br>
    <input type="submit" value="register" name='sub'><button><a href="login.php">Login</a></button><span>if already a user ?</span>
    </form>
    </div>
</body>
</html>