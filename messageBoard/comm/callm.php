<?php
    require_once 'comm.php';

    function addmessage($c_content){
        $insertStr = "INSERT INTO message VALUES (null,'$c_content') ";

        $rs = execUpdate($insertStr);//执行操作
        return $rs;//返回执行结果
    }

    function showmessages(){
        $strQuery = "SELECT * FROM message";
        $result = array();
        $result = execQuery($strQuery);//调用comm.php中execQuery()函数
        return $result;
    }

    function findmessageBycid($c_id){
        $strQuery = "select * from message where c_id= '$c_id'";
        $rs = execQuery($strQuery);//执行查询操作
        if(count($rs)>0){
            return $rs[0];
        }
        return $rs;

    }

    function countmessages(){
        $strQuery = "select count(*) as nums from message";
        $rs = execQuery($strQuery);//执行统计
        $value = 0;
        if(count($rs)>0){//判断是否成功执行
            $value = $rs[0]["nums"];
        }
        return $value;
    }
?>