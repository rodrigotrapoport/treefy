

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Treefy - People`s Carbon Market</title>
   <link rel="stylesheet" href="./css/styles.css">
   <link rel="stylesheet" href="./css/estilos.css">
</head>

<body>
    <?php
    //Llamando campos 
    $mail = $_POST['email'];
    
    
    $header = 'From: ' . $mail . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";
    
    $mensaje = "This user asks us and I authorize us to add him to the withelist " . $mail . ",\r\n";
    $mensaje .= "The e-mail is: " . $mail . " \r\n";
    
    $mensaje .= "Enviado el " . date('d/m/Y', time());
    
    $para = 'info@treefy.io';
    $asunto = 'New user';
    
    mail($para, $asunto, utf8_decode($mensaje), $header);
    // header("Location: http://treefy.io/we_send.html");
?>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="./images/Landing/Treefy-Shadow.svg" alt="treefy"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#services">Roadmap</a></li>
                    <li class="nav-item"><a class="nav-link" href="./aboutus.html">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">FAQ</a></li>
                    <li class="nav-item"><a class="nav-link" href="calltoaction.html">Get Started</a></li>
                    <!-- <li class="nav-item"><a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a></li> -->
                    <li class="nav-item"><a class="nav-link" href="#contact">EN</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="masthead">
        <div class="container">
            <div class="masthead-heading"> Thanks to enjoy to our green list!</div>
            
            
        </div>
    </header>
    
        <!-- Our Partners -->
        <section class="page-section partners-section py-5 text-white">
            <div class="gx-4 gx-lg-5 justify-content-center text-center">
                <h2 class="text-white mt-0">
                    Our Partners
                </h2>
            </div>
            <div class="container">
                <div class="row partners-icon-row">
                    <div class="col-lg-5">
                        <img class="mx-auto partners-icon" src="./images/Landing/Lemon-Icon.svg" alt="">
                    </div>
                    <div class="col-lg-5">
                        <img class="mx-auto partners-icon" src="./images/Landing/Ecohouse-Icon.svg" alt="">
                    </div>
                    <div class="col-lg-5">
                        <img class="mx-auto partners-icon" src="./images/Landing/SistemaB-Icon.svg" alt="">
                    </div>
                    <div class="col-lg-5">
                        <img class="mx-auto partners-icon" src="./images/Landing/BioGuia-Icon.svg" alt="">
                    </div>
                    <div class="col-lg-5">
                        <img class="mx-auto partners-icon" src="./images/Landing/SSF-Icon.svg" alt="">
                    </div>
                </div>
            </div>
            <br>
            <footer>
                <div class="container">
                    <siv class="row">
                        <div class="col-lg-6 col-md-6 col-xs-12">
                            <div class="container">
                                <div class="row">
                                    <div class="col-1">
                                        <img class="footer-logo"src="./images/Landing/Treefy-Shadow.svg" alt="treefy">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xs-12">
                            <div class="container">
                                <div class="row">
                                    <div class="col-1">
                                        <img src="./images/Landing/Twitter-Icon.svg" alt="treefy">
                                    </div>
                                    <div class="col-1">
                                        <img src="./images/Landing/Instagram-Icon.svg" alt="treefy">
                                    </div>
                                    <div class="col-1">
                                        <img src="./images/Landing/Linkedin-Icon.svg" alt="treefy">
                                    </div>
                                    <div class="col-1">
                                        <img src="./images/Landing/Youtube-Icon.svg" alt="treefy">
                                    </div>
                                    <div class="col-1">
                                        <img src="./images/Landing/Facebook-Icon.svg" alt="treefy">
                                    </div>
                                    <div class="col-1">
                                        <img src="./images/Landing/TikTok-Icon.svg" alt="treefy">
                                    </div>
                                    <div class="col-1">
                                        <img src="./images/Landing/Telegram-Icon.svg" alt="treefy">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </siv>
                </div>
            </footer>
        </section>
    </div>
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
    <script
        type='text/javascript'>(function ($) { window.fnames = new Array(); window.ftypes = new Array(); fnames[0] = 'EMAIL'; ftypes[0] = 'email'; }(jQuery)); var $mcj = jQuery.noConflict(true);</script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
        crossorigin="anonymous"></script>
    <!-- <script src="./js/fronScript.js"></script> -->
</body>
    
</html>