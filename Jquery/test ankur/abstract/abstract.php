<?php
abstract class flower{
    public $best ="flower";// we can declare data member
  
    public function tulip()// we can use non-abstract method and can implement
    {
        echo $this->best;
    }
 abstract function rose();// we can declare here only but cannot implement
}
class b extends flower{
    function rose()
    {
        echo "hiii <br>";
    }
}

// Interface
Interface a{
    public function c();//we cannot declare data member
}
class d implements a{
    public function c()// to define interface method we have to implement in another class
    {
        echo "hii i am implemented";
    }
}
$obj =new b();

$obj->rose();
$obj->tulip();
 
// interface object

$obj1 =new d;
$obj1->c();

?>
