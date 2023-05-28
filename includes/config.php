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



require_once("phpMailer/PHPmailer.php");
require_once("phpMailer/Exception.php");
require_once("phpMailer/SMTP.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function send_mail($address, $subject, $body){
	$pm = new PHPMailer(true);
	try{

	    $pm->SMTPDebug = 2;
	    $pm->isSMTP(true);
	    $pm->Host = "mail.email.com";
	    $pm->SMTPAuth = true;
	    $pm->Username = "mail@email.com";
	    $pm->Password = "Password";
	    $pm->SMTPSecure = "ssl";
	    $pm->Port = 465;

	    $pm->setFrom("test@mail.com");
	    $pm->addAddress($address);
	    $pm->Subject = $subject;
	    $pm->Body = $body;
	    $pm->AltBody = "Here is the invoice from your last purchase";
	    $pm->isHTML(true);
	    $pm->send();
	}catch (Exception $e){
	    echo "Failed ".$pm->ErrorInfo;
	}

}
?>