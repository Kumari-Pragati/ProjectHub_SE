<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>home</title>
        <!-- swiper css link -->
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <!-- font awesome cdn link -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
        <!-- custom css file link -->
        <link rel="stylesheet" href="stlye.css">
</head>
<body>

<!-- header section starts-->
<section class="header">

    <a href="tour_home.php" class="logo" >Travel Bliss</a>

    <nav class="navbar">
        <a href="../SE Hotel Management Part/home.php">home</a>
        <a href="tour_home.php">explore</a>
        <a href="about.php">about</a>
        <a href="package.php">package</a>
        <a href="book.php">book</a>
    </nav>
    <div id="menu-btn" class="fas fa-bars"></div>
</section>
<!-- header section ends -->

<!-- home section starts -->
<section class="home">
    <div class="swiper home-slider">
        <div class="swiper-wrapper" >
            <div class="swiper-slide slide" style="background:url(home-slide-1.jpg) no-repeat">
                <div class="content">
                    <span>explore, discover, travel</span>
                    <h3>travel around the world</h3>
                    <a href="package.php" class="btn">discover more</a>
                </div>
            </div>
            <div class="swiper-slide slide" style="background:url(home-slide-2.jpg) no-repeat">
                <div class="content">
                    <span>explore, discover, travel</span>
                    <h3>discover the new places</h3>
                    <a href="package.php" class="btn">discover more</a>
                </div>
            </div>
            <div class="swiper-slide slide" style="background:url(home-slide-3.jpg) no-repeat">
                <div class="content">
                    <span>explore, discover, travel</span>
                    <h3>make your tour worthwhile</h3>
                    <a href="package.php" class="btn">discover more</a>
                </div>
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
    
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="script.js"></script>

</section>
<!-- home section ends -->


<!-- services section starts -->
<section class="services">
    <h1 class="heading-title"> our services </h1>
    <div class="box-container">
        <div class="box">
            <img src="icon-1.png" alt="">
            <h3>adventure</h3>
        </div>
        <div class="box">
            <img src="icon-2.png" alt="">
            <h3>tour guide</h3>
        </div>
        <div class="box">
            <img src="icon-3.png" alt="">
            <h3>trekking</h3>
        </div>
        <div class="box">
            <img src="icon-4.png" alt="">
            <h3>camp fire</h3>
        </div>
        <div class="box">
            <img src="icon-5.png" alt="">
            <h3>off-road</h3>
        </div>
    </div>
</section>
<!--services section ends-->

<section class="home-about">
<div class="image" >
    <img src="about-img.jpg" alt="">
</div>
<div class="content"> 
    <h3>about us</h3>
    <p>We've developed this travel booking platform 
    as part of our CS266 Project, enabling users to 
    explore and book trips to diverse destinations.</p>
<a href="about.php" class="btn">read more</a>
</div>
<section>


<!--home packages section starts -->

<section class="home-packages"> 
    <h1 class="heading-title"> our packages </h1>
    <div class="box-container">
        <div class="box">
            <div class="image">
                <img src="Package-8.jpg" alt="">
            </div>
            <div class="content">
                <h3>adventure & tour</h3>
                <p>3 days & 4 night in Bali</p>
                <a href="book.php" class="btn">book now</a>
            </div>
        </div>
        <div class="box">
            <div class="image">
                <img src="Package-7.jpg" alt="">
            </div>
            <div class="content">
                <h3>adventure & tour</h3>
                <p>3 days & 2 night in Jaipur</p>
                <a href="book.php" class="btn">book now</a>
            </div>
        </div>
    </div>
    <div class="load-more"><a href="package.php" class="btn"> load more</a></div>
</section>

<!--home packages section ends -->

<!--home offer section starts -->
<section class="home-offer">
    <div class="content">
        <h3>upto 20% off</h3>
        <p>Hurry up discount valid till may 2024</p>
        <a href="book.php" class="btn">book now</a>
    </div>
</section>
<!--home offer section ends -->




<!-- footer section starts-->
<section class="footer">
    <div class="box-container">
        <div class="box">
            <h3>quick links</h3>
            <a href="home.php"> <i class="fas fa-angle-right"></i> home</a>
            <a href="about.php"> <i class="fas fa-angle-right"></i> about</a>
            <a href="package.php"> <i class="fas fa-angle-right"></i> package</a>
            <a href="book.php"> <i class="fas fa-angle-right"></i> book</a>
        </div>
        <div class="box">
            <h3>extra links</h3>
                <a href="#"> <i class="fas fa-angle-right"></i> ask questions</a>
                <a href="#"> <i class="fas fa-angle-right"></i> about us</a>
                <a href="#"> <i class="fas fa-angle-right"></i> privacy policy</a>
                <a href="#"> <i class="fas fa-angle-right"></i> terms of use</a>
        </div>
        <div class="box">
            <h3>contact info</h3>
                <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
                <a href="#"> <i class="fas fa-map"></i> Diu, india - 362520 </a>
        </div>
    </div>
    <div class="credit"> created by <span> CS206 Group </span> | all rights reserved | </div>
</section>
<!-- footer section ends-->




<!-- swiper js link -->
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
<!-- custom js file link-->
<script src="script.js"></script>
</body>
</html>       