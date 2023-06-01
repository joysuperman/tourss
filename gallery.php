<?php
session_start();
error_reporting(0);
include('includes/config.php');
if(strlen($_SESSION['alogin'])==0)
    {   
header('location:index.php');
}
else{ 
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
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
    <link rel="stylesheet" href="gallerystyle.css">
</head>
<body>
    <!-- top-header -->
    <?php include('includes/header.php');?>
    <div class="banner-1 ">
        <div class="container">
            <h1 class="wow zoomIn animated animated"  style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"> Happy Holiday</h1>
        </div>
    </div>
    <!--- /banner-1 ---->
    
    <div class="container">
        <h3>Photo Gallery</h3>

        <div class="text-center">
            <?php 
                $sql = "SELECT * FROM imagecategory";
                $query = $dbh->prepare($sql);
                $query->execute();
                $categories = $query->fetchAll(PDO::FETCH_ASSOC);
                
                foreach ($categories as $category) {
                    echo '<label for="check2"> <a href="?category='.$category['id'].'">'.$category['categoryname'].'</a></label>';
                }
            ?>
        </div>

    </div>

    <div class="photo-gallery">
        <?php 
            $sql = "";
            if ($_GET['category'] && $_GET['category']!= "") {
                $sql = "SELECT * FROM tblgallery WHERE imgcategory={$_GET['category']}";
            }else{
                $sql = "SELECT * FROM tblgallery";
            }
            $query = $dbh->prepare($sql);
            $query->execute();
            $items = $query->fetchAll(PDO::FETCH_ASSOC);
            
            if (count($items)>0) {
                foreach ($items as $item) {
                    echo '<div class="pic place">
                        <img src="'.PRODUCT_IMG_SITE_PATH."gallery-img/".$item['galleryimage'].'" alt="">
                    </div>';
                }
            }else{
                echo 'No Item Found!';
            }
        ?>
    </div>
</body>
</html>

<?php } ?>