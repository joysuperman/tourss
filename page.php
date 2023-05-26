<?php
session_start();
// error_reporting(0);
include('includes/config.php');

?>
<!DOCTYPE HTML>
<html>
<head>
<title>Happy Holiday</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Tourism Management System In PHP" />
<script type="applijewelleryion/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<link href="css/style.css" rel='stylesheet' type='text/css' />
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,700,600' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
<link href="css/font-awesome.css" rel="stylesheet">
<!-- Custom Theme files -->
<script src="js/jquery-1.12.0.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!--animate-->
<link href="css/animate.css" rel="stylesheet" type="text/css" media="all">
<script src="js/wow.min.js"></script>
	<script>
		 new WOW().init();
	</script>
  <style>
		.errorWrap {
    padding: 10px;
    margin: 0 0 20px 0;
    background: #fff;
    border-left: 4px solid #dd3d36;
    -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
.succWrap{
    padding: 10px;
    margin: 0 0 20px 0;
    background: #fff;
    border-left: 4px solid #5cb85c;
    -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
		</style>
</head>
<body>
<!-- top-header -->
<div class="top-header">
<?php include('includes/header.php');?>
<div class="banner-1 ">
	<div class="container">
		<h1 class="wow zoomIn animated animated"  style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"> Happy Holiday</h1>
	</div>
</div>
<!--- /banner-1 ---->
<!--- privacy ---->
<div class="privacy">
	<div class="container">
										<?php 
$pagetype=$_GET['type'];
$sql = "SELECT type,detail from tblpages where type=:pagetype";
$query = $dbh -> prepare($sql);
$query->bindParam(':pagetype',$pagetype,PDO::PARAM_STR);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $result)
{		

?>
	<h3 class="wow fadeInDown animated animated" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInDown; text-transform:uppercase; "><?php 	echo $_GET['type'] ?></h3>
		
	<?php if ($_GET['type'] == 'contact') {?>
		<?php 
		if(isset($_POST['submit10']))
		{
			$name=$_POST['contact_name'];
			$email=$_POST['contact_email'];
			$message=$_POST['contact_message'];
			$contact_date = date("Y-m-d h:i:s");
			if ($name != "" && $email != "" && $message !="" && $contact_date !="" ) {
				
				$sql="INSERT INTO  tblcontact(name,email,message,contact_date) VALUES(:name, :email, :message, :contact_date)";
				$query = $dbh->prepare($sql);
				$query->bindParam(':name',$name,PDO::PARAM_STR);
				$query->bindParam(':email',$email,PDO::PARAM_STR);
				$query->bindParam(':message',$message,PDO::PARAM_STR);
				$query->bindParam(':contact_date',$contact_date,PDO::PARAM_STR);
				$query->execute();

				$lastInsertId = $dbh->lastInsertId();
				if($lastInsertId)
				{
					echo "<script type='text/javascript'>alert('successfully Send!')</script>";
				}
				else 
				{
					echo "<script type='text/javascript'>alert('Not Send!')</script>";
				}
			}else{

			}

		}
		?>
		<div class="row">
			<div class="col-md-6">
				<p>
				<?php 	echo $result->detail; ?>
				</p> 
			</div>
			<div class="col-md-6">
				<form name="kaksdf" method="POST">
					<div class="form-group">
					    <label for="exampleInputName">Name</label>
					    <input type="text" name="contact_name" class="form-control" id="exampleInputName" placeholder="Name" required>
					</div>
					<div class="form-group">
					    <label for="exampleInputEmail1">Email address</label>
					    <input type="email" name="contact_email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required>
					    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div class="form-group">
					    <label for="exampleFormControlTextarea1">Message</label>
					    <textarea class="form-control" name="contact_message" id="exampleFormControlTextarea1" rows="3" placeholder="Message" required></textarea>
					</div>
					 <button type="submit" name="submit10" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	<?php }else{ ?>
	<p>
	<?php 	echo $result->detail; ?>
	</p> 
<?php } } }?>
	

		
	</div>
</div>
<!--- /privacy ---->
<!--- footer-top ---->
<!--- /footer-top ---->
<?php include('includes/footer.php');?>
<!-- signup -->
<?php include('includes/signup.php');?>			
<!-- //signu -->
<!-- signin -->
<?php include('includes/signin.php');?>			
<!-- //signin -->
<!-- write us -->
<?php include('includes/write-us.php');?>
</body>
</html>