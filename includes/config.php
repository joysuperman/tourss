<?php 
// DB credentials.
define('DB_HOST','localhost');
define('DB_USER','root');
define('DB_PASS','mysql');
define('DB_NAME','tms');
// Establish database connection.
try
{
$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
}
catch (PDOException $e)
{
exit("Error: " . $e->getMessage());
}

define('SERVER_PATH',$_SERVER['DOCUMENT_ROOT'].'/tourss/');
define('SITE_PATH','http://localhost/tourss/');

define('PRODUCT_IMG_SERVER_PATH',SERVER_PATH.'images/');
define('PRODUCT_IMG_SITE_PATH',SITE_PATH.'images/');

?>