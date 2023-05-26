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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    <link rel="stylesheet" href="gallerystyle.css">
</head>
<body>
    <input type="radio" name="photos" id="check1" checked>
    <input type="radio" name="photos" id="check2">
    <input type="radio" name="photos" id="check3">
    <input type="radio" name="photos" id="check4">
    <input type="radio" name="photos" id="check5">
    
    <div class="container">
        <h1>Our Photo Gallery</h1>
        <div class="top-content"></div>
        <h3>Photo Gallery</h3>


        <?php 
            $sql = "SELECT * FROM imagecategory";
            $query = $dbh->prepare($sql);
            $query->execute();
            $categories = $query->fetchAll(PDO::FETCH_ASSOC);
            
            foreach ($categories as $category) {
                echo '<label for="check2"> <a href="#">'.$category['categoryname'].'</a></label>';
            }
        ?>

    </div>

    <div class="photo-gallery">
        <?php 
            $sql = "SELECT * FROM tblgallery";
            $query = $dbh->prepare($sql);
            $query->execute();
            $categories = $query->fetchAll(PDO::FETCH_ASSOC);
            
            foreach ($categories as $category) {
                echo '<label for="check2"> <a href="#">'.$category['categoryname'].'</a></label>';
            }
        ?>
        <div class="pic place" >
            <img src="1.jpg" alt="">
        </div>
    </div>
</body>
</html>

<?php } ?>