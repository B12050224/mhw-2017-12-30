<?php
    header("Content-Type:text/json;charset=utf-8");
    //得到data.txt中的json数据
    $data=file_get_contents("data.txt");
    //返回数据
    echo $data;
?>