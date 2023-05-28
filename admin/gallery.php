<?php
session_start();
error_reporting(0);
include('includes/config.php');
if(strlen($_SESSION['alogin'])==0)
	{	
header('location:index.php');
}
else{ 
	if(isset($_POST['submit13']))
		{
			$categoryName=$_POST['categoryName'];
			if ($categoryName != "") {
				
				$sql="INSERT INTO  imagecategory(categoryname) VALUES(:categoryName)";
				$query = $dbh->prepare($sql);
				$query->bindParam(':categoryName',$categoryName,PDO::PARAM_STR);
				$query->execute();

				$lastInsertId = $dbh->lastInsertId();
				if($lastInsertId)
				{
					echo "<script type='text/javascript'>alert('Category successfully Added!')</script>";
				}
				else 
				{
					echo "<script type='text/javascript'>alert('Category Not Added!')</script>";
				}
			}
		}

		if(isset($_POST['submit14']))
		{
			$imgtitle=$_POST['imgtitle'];
			$imgcategory=$_POST['imgcategory'];
			$galleryimage=$_FILES["galleryimage"]["name"];
			$allowTypes = array(
		        'image/png',
		        'image/jpg',
		        'image/jpeg'
		    );
		    if ($_FILES['galleryimage']) {
		        if (in_array($_FILES['galleryimage']['type'], $allowTypes) != false && $_FILES['galleryimage']['size'] < 2*1024*1024 ) {
		            move_uploaded_file($_FILES['galleryimage']['tmp_name'], PRODUCT_IMG_SERVER_PATH."/gallery-img/".$_FILES['galleryimage']['name']);
		            $galleryimage = $_FILES['galleryimage']['name'];
		        }else{
		            $msg = "file not support";
		        }
		    }

			$adddate = date("Y-m-d h:i:s");

			if ($imgtitle != "" && $imgcategory != "" && $galleryimage != "" ) {
				
				$sql="INSERT INTO  tblgallery(imgtitle, imgcategory, galleryimage, adddate) VALUES(:imgtitle, :imgcategory, :galleryimage, :adddate )";
				$query = $dbh->prepare($sql);
				$query->bindParam(':imgtitle',$imgtitle,PDO::PARAM_STR);
				$query->bindParam(':imgcategory',$imgcategory,PDO::PARAM_STR);
				$query->bindParam(':galleryimage',$galleryimage,PDO::PARAM_STR);
				$query->bindParam(':adddate',$adddate,PDO::PARAM_STR);
				$query->execute();

				$lastInsertId = $dbh->lastInsertId();
				if($lastInsertId)
				{
					echo "<script type='text/javascript'>alert('Category successfully Added!')</script>";
				}
				else 
				{
					echo "<script type='text/javascript'>alert('Category Not Added!')</script>";
				}
			}
		}


		if (isset($_GET['delete'])) {
				$imgID = $_GET['delete'];

				$sql = "DELETE FROM tblgallery WHERE id = :imgID";
				$query = $dbh->prepare($sql);
				$query->bindParam(':imgID', $imgID, PDO::PARAM_INT);
				$query->execute();

				if ($query->rowCount() > 0) {
				    echo "<script type='text/javascript'>alert('Image successfully deleted!');
				    </script>";
				    header("Location: /tourss/admin/gallery.php");
				} else {
				    echo "<script type='text/javascript'>alert('Image not found or not deleted!')</script>";
				}
		}

	?>
<!DOCTYPE HTML>
<html>
<head>
<title>Happy Holiday | Admin manage Users</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.min.css" rel='stylesheet' type='text/css' />
<!-- Custom CSS -->
<link href="css/style.css" rel='stylesheet' type='text/css' />
<link rel="stylesheet" href="css/morris.css" type="text/css"/>
<!-- Graph CSS -->
<link href="css/font-awesome.css" rel="stylesheet"> 
<!-- jQuery -->
<script src="js/jquery-2.1.4.min.js"></script>
<!-- //jQuery -->
<!-- tables -->
<link rel="stylesheet" type="text/css" href="css/table-style.css" />
<link rel="stylesheet" type="text/css" href="css/basictable.css" />
<script type="text/javascript" src="js/jquery.basictable.min.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
      $('#table').basictable();

      $('#table-breakpoint').basictable({
        breakpoint: 768
      });

      $('#table-swap-axis').basictable({
        swapAxis: true
      });

      $('#table-force-off').basictable({
        forceResponsive: false
      });

      $('#table-no-resize').basictable({
        noResize: true
      });

      $('#table-two-axis').basictable();

      $('#table-max-height').basictable({
        tableWrapper: true
      });
    });
</script>
<!-- //tables -->
<link href='//fonts.googleapis.com/css?family=Roboto:700,500,300,100italic,100,400' rel='stylesheet' type='text/css'/>
<link href='//fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<!-- lined-icons -->
<link rel="stylesheet" href="css/icon-font.min.css" type='text/css' />
<!-- //lined-icons -->
</head> 
<body>
   <div class="page-container">
   <!--/content-inner-->
<div class="left-content">
	   <div class="mother-grid-inner">
            <!--header start here-->
				<?php include('includes/header.php');?>
				     <div class="clearfix"> </div>	
				</div>
<!--heder end here-->
<ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a><i class="fa fa-angle-right"></i>Manage Gallery</li>
            </ol>

            <div class="row">
            	<div class="col-md-4">
            		<div class="card agile-tables">
            			<h5>Add Category</h5>
            			<form class="form" method="POST">
            				<div class="form-group">
            					<input type="text" class="form-control" name="categoryName" placeholder="Category" required>
            				</div>
            				<div class="text-right">
            					<button class="btn btn-sucess" type="submit" name="submit13">Add</button>
            				</div>
            			</form>
            		</div>

            		<div class="card agile-tables">
            			<h5>Add Image</h5>
            			<form class="form" method="POST" enctype="multipart/form-data">
            				<div class="form-group">
            					<input type="text" class="form-control" name="imgtitle" placeholder="Title">
            				</div>

							<div class="form-group">
								<!-- Get Category Name -->
            					<select class="form-control" name="imgcategory">
								    <option value="" disabled selected>Select Category</option>
								    <?php 
								        $sql = "SELECT * FROM imagecategory";
								        $query = $dbh->prepare($sql);
								        $query->execute();
								        $categories = $query->fetchAll(PDO::FETCH_ASSOC);
								        
								        foreach ($categories as $category) {
								            echo "<option value=".$category['id'].">".$category['categoryname']."</option>";
								        }
								    ?> 
								</select>
								<!-- Get Category Name -->
            				</div>

            				<div class="form-group">
							    <input type="file" name="galleryimage">
							</div>

            				<div class="text-right">
            					<button class="btn btn-sucess" type="submit" name="submit14">Add</button>
            				</div>
            			</form>
            		</div>
            	</div>
            	<div class="col-md-8">
            			<div class="agile-grids">	
				<!-- tables -->
				
				<div class="agile-tables">
					<div class="w3l-table-info">
					  <h2>Manage Gallery</h2>
					    <table id="table">
						<thead>
						  <tr>
						  	<th>#</th>
							<th>Title</th>
							<th>Category</th>
							<th>Image</th>
							<th>Date</th>
							<th>Action</th>
						  </tr>
						</thead>
						<tbody>
<?php $sql = "SELECT * from tblgallery";
$query = $dbh -> prepare($sql);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $result)
{				?>		
						  <tr>
							<td><?php echo htmlentities($cnt);?></td>
							<td><?php echo htmlentities($result->imgtitle);?></td>
							<td>
								<?php 
								        $sql = "SELECT * FROM imagecategory";
								        $query = $dbh->prepare($sql);
								        $query->execute();
								        $categories = $query->fetchAll(PDO::FETCH_ASSOC);
								        
								        foreach ($categories as $category) {
								        	if ($result->imgcategory == $category['id']) {
								            	echo $category['categoryname'];
								        	}
								        }
								    ?> 
							</td>
							<td><img src="<?php echo PRODUCT_IMG_SITE_PATH."gallery-img/".htmlentities($result->galleryimage);?>" alt="img" style="height: 100px; width: 100px; object-fit: cover;"></td>
							<td><?php echo htmlentities($result->adddate);?></td>
							<td>
								<a href="?delete=<?php echo htmlentities($result->id);?>" class="btn btn-danger">Delete</a>
							</td>
						  </tr>
						 <?php $cnt=$cnt+1;} }?>
						</tbody>
					  </table>
					</div>
				  </div>

				
			</div>
            	</div>
            </div>

<!-- script-for sticky-nav -->
		<script>
		$(document).ready(function() {
			 var navoffeset=$(".header-main").offset().top;
			 $(window).scroll(function(){
				var scrollpos=$(window).scrollTop(); 
				if(scrollpos >=navoffeset){
					$(".header-main").addClass("fixed");
				}else{
					$(".header-main").removeClass("fixed");
				}
			 });
			 
		});
		</script>
		<!-- /script-for sticky-nav -->
<!--inner block start here-->
<div class="inner-block">

</div>
<!--inner block end here-->
<!--copy rights start here-->
<?php include('includes/footer.php');?>
<!--COPY rights end here-->
</div>
</div>
  <!--//content-inner-->
		<!--/sidebar-menu-->
						<?php include('includes/sidebarmenu.php');?>
							  <div class="clearfix"></div>		
							</div>
							<script>
							var toggle = true;
										
							$(".sidebar-icon").click(function() {                
							  if (toggle)
							  {
								$(".page-container").addClass("sidebar-collapsed").removeClass("sidebar-collapsed-back");
								$("#menu span").css({"position":"absolute"});
							  }
							  else
							  {
								$(".page-container").removeClass("sidebar-collapsed").addClass("sidebar-collapsed-back");
								setTimeout(function() {
								  $("#menu span").css({"position":"relative"});
								}, 400);
							  }
											
											toggle = !toggle;
										});
							</script>
<!--js -->
<script src="js/jquery.nicescroll.js"></script>
<script src="js/scripts.js"></script>
<!-- Bootstrap Core JavaScript -->
   <script src="js/bootstrap.min.js"></script>
   <!-- /Bootstrap Core JavaScript -->	   

</body>
</html>
<?php } ?>