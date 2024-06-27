---
layout: page
title: Phase Retrieval With Convex Optimization
description: 
img: assets/img/smear.jpg
importance: 2
category: computational microscopy
---



<script type="text/javascript" charset="utf-8"
    src="https://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">


<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Castoro" rel="stylesheet">

<link rel="stylesheet" href="./static/css/bulma.min.css">
<link rel="stylesheet" href="./static/css/bulma-carousel.min.css">
<link rel="stylesheet" href="./static/css/bulma-slider.min.css">
<link rel="stylesheet" href="./static/css/fontawesome.all.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css">
<link rel="stylesheet" href="./static/css/index.css">
<link rel="icon" href="./static/images/shail_logo.jpeg">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script defer src="./static/js/fontawesome.all.min.js"></script>
<script src="./static/js/bulma-carousel.min.js"></script>
<script src="./static/js/bulma-slider.min.js"></script>
<script src="./static/js/index.js"></script>


<style type="text/css">
    body {
        font-family: "Titillium Web", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
        font-weight: 300;
        font-size: 17px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 980px) {
        body {
            width: 980px;
        }
    }
    
    h1 {
        font-weight: 300;
        line-height: 1.15em;
    }
    
    h2 {
        font-size: 1.75em;
    }
    
    a:link,
    a:visited {
        color: #5364cc;
        text-decoration: none;
    }
    
    a:hover {
        color: #208799;
    }
    
    h1 {
        text-align: center;
    }
    
    h2,
    h3 {
        text-align: left;
    }
    
    h1 {
        font-size: 40px;
        font-weight: 500;
    }
    
    h2 {
        font-weight: 400;
        margin: 16px 0px 4px 0px;
    }
    
    h3 {
        font-weight: 600;
        margin: 16px 0px 4px 0px;
    }
    
    .paper-title {
        padding: 1px 0px 1px 0px;
    }
    
    section {
        margin: 32px 0px 32px 0px;
        text-align: justify;
        clear: both;
    }
    
    .col-5 {
        width: 20%;
        float: left;
    }
    
    .col-4 {
        width: 25%;
        float: left;
    }
    
    .col-3 {
        width: 33%;
        float: left;
    }
    
    .col-2 {
        width: 50%;
        float: left;
    }
    
    .col-1 {
        width: 100%;
        float: left;
    }
    
    .author-row,
    .affil-row {
        font-size: 26px;
    }
    
    .author-row-new {
        text-align: center;
    }
    
    .author-row-new a {
        display: inline-block;
        font-size: 20px;
        padding: 4px;
    }
    
    .author-row-new sup {
        color: #313436;
        font-size: 12px;
    }
    
    .affiliations-new {
        font-size: 18px;
        text-align: center;
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    
    .row {
        margin: 16px 0px 16px 0px;
    }
    
    .authors {
        font-size: 26px;
    }
    
    .affiliatons {
        font-size: 18px;
    }
    
    .affil-row {
        margin-top: 18px;
    }
    
    .teaser {
        max-width: 100%;
    }
    
    .text-center {
        text-align: center;
    }
    
    .screenshot {
        width: 256px;
        border: 1px solid #ddd;
    }
    
    .screenshot-el {
        margin-bottom: 16px;
    }
    
    hr {
        height: 1px;
        border: 0;
        border-top: 1px solid #ddd;
        margin: 0;
    }
    
    .material-icons {
        vertical-align: -6px;
    }
    
    p {
        line-height: 1.25em;
    }
    
    .caption {
        font-size: 16px;
        color: #062817;
        margin-top: 4px;
        margin-bottom: 10px;
    }
    
    video {
        display: block;
        margin: auto;
    }
    
    figure {
        display: block;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    #bibtex pre {
        font-size: 14px;
        background-color: #eee;
        padding: 16px;
    }
    
    .blue {
        color: #2c82c9;
        font-weight: bold;
    }
    
    .orange {
        color: #d35400;
        font-weight: bold;
    }
    
    .flex-row {
        display: flex;
        flex-flow: row wrap;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    .paper-btn-coming-soon {
        position: relative;
        top: 0;
        left: 0;
    }
    
    .coming-soon {
        position: absolute;
        top: -15px;
        right: -15px;
    }
    
    .paper-btn {
        position: relative;
        text-align: center;
    
        display: inline-block;
        margin: 8px;
        padding: 8px 8px;
    
        border-width: 0;
        outline: none;
        border-radius: 4px;
    
        background-color: #665f5c;
        color: white !important;
        font-size: 16px;
        /* width: 100px; */
        font-weight: 600;
    }
    
    .paper-btn-parent {
        display: flex;
        justify-content: center;
        margin: 16px 0px;
    }
    
    .paper-btn:hover {
        opacity: 0.85;
    }
    
    .container {
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;
    }
    
    .venue {
        font-size: 23px;
    }
    
    .topnav {
        background-color: #EEEEEE;
        overflow: hidden;
    }
    
    .topnav div {
        max-width: 1070px;
        margin: 0 auto;
    }
    
    .topnav a {
        display: inline-block;
        color: black;
        text-align: center;
        vertical-align: middle;
        padding: 16px 16px;
        text-decoration: none;
        font-size: 18px;
    }
    
    .topnav img {
        padding: 2px 0px;
        width: 100%;
        margin: 0.2em 0px 0.3em 0px;
        vertical-align: middle;
    }
    
    pre {
        font-size: 0.9em;
        padding-left: 7px;
        padding-right: 7px;
        padding-top: 3px;
        padding-bottom: 3px;
        border-radius: 3px;
        background-color: rgb(235, 235, 235);
        overflow-x: auto;
    }
    
    .download-thumb {
        display: flex;
    }
    
    @media only screen and (max-width: 620px) {
        .download-thumb {
            display: none;
        }
    }
    
    .paper-stuff {
        width: 50%;
        font-size: 20px;
    }
    
    @media only screen and (max-width: 620px) {
        .paper-stuff {
            width: 100%;
        }
    }
    
    * {
        box-sizing: border-box;
    }
    
    .column {
        text-align: center;
        float: left;
        width: 16.666%;
        padding: 5px;
    }
    
    .column3 {
        text-align: center;
        float: left;
        width: 33.333%;
        padding: 5px;
    }
    
    .border-right {
        border-right: 1px solid black;
    }
    
    .border-bottom {
        border-bottom: 1px solid black;
    }


    /* Clearfix (clear floats) */
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
    
    /* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 500px) {
        .column {
            width: 100%;
        }
    }
    
    @media screen and (max-width: 500px) {
        .column3 {
            width: 100%;
        }
    }
    
    .expandable-section .content {
        display: none;
        padding: 10px;
        border: 1px solid #ccc;
        margin-top: 5px;
    }
    
    .toggle-button {
        cursor: pointer;
    }
</style>

<script type="text/javascript" src="../js/hidebib.js"></script>
<link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,600,400italic,600italic,300,300italic'
    rel='stylesheet' type='text/css'>



<body>

    <div class="topnav" id="myTopnav">
    </div>

    <div class="container">
    
        <div id="authors">
            <center>
                <div class="author-row-new">
                    <a href="https://kyungchullee.com/">Kyung Chul Lee<sup>1,2</sup></a>,
                    <a>Hyesuk Chae<sup>1</sup></a>,
                    <a>Shiqi Xu<sup>2</sup></a>,
                    <a>Kyungwon Lee<sup>1</sup></a>,
                    <a href="https://bme.duke.edu/faculty/roarke-horstmeyer">Roarke Horstmeyer<sup>2</sup></a>
                    <a href="https://www.image.cau.ac.kr/home">Byung-Woo Hong<sup>3</sup></a>
                    <a href="https://https://biomedia.yonsei.ac.kr/">Seung Ah Lee<sup>1</sup></a>                
                    
                    
                </div>
            </center>
            <center>
                <div class="affiliations">
                    <span><sup>1</sup> Yonsei University </span> &nbsp
                    <span><sup>2</sup> Duke University
                    <span><sup>3</sup> Chung-Ang University
                    </span> <br />
                    <span><sup>✉</sup> Corresponding Authors</span> &nbsp <br />
                </div>


            </center>
    
            <div style="clear: both">
                <div class="paper-btn-parent">
                    <a class="paper-btn" href="https://opg.optica.org/oe/browse.cfm">
                        <span class="material-icons"> description </span>
                        Paper
                    </a>
                    <div class="paper-btn-coming-soon">
                        <a class="paper-btn" href="https://github.com/OISL-Yonsei/FP_ADMM">
                            <!-- <span class="material-icons"> code </span> -->
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                            Code
                        </a>
                    </div>
                </div>
            </div>


    <!--
    <section id="teaser-image">
                <center>
                    <figure>
                        <a>
                            <img width="100%" src="asserts/Teaser.png">
                        </a>
                    </figure>
                </center>
            </section>
    -->
          
    
            <section id="abstract" />
            <hr>
            <h2>Abstract</h2>
            <div class="flex-row">
                <p>
                    Fourier ptychography (FP) is a powerful computational imaging technique that provides both super-resolution and quantitative phase imaging capabilities by scanning samples in Fourier space with angle-varying illuminations. However, the image reconstruction in FP is inherently ill-posed, particularly when the measurements are noisy and have insufficient data redundancy in the Fourier space. To improve FP reconstruction in high-throughput imaging scenarios, we propose a regularized FP reconstruction algorithm utilizing anisotropic total variation (TV) and Tikhonov regularizations for the object and the pupil functions, respectively. To solve this regularized FP problem, we formulate a reconstruction algorithm using alternating direction method of multipliers and show that our approach successfully recovers high-quality images with sparsely sampled and/or noisy measurements. The results are quantitatively and qualitatively compared against various FP reconstruction algorithms to analyze the effect of regularization under harsh imaging conditions. In particular, we demonstrate the effectiveness of our method on the real experimental FP microscopy images, where the TV regularizer effectively suppresses the measurement noise while maintaining the edge information in the biological specimen and helps retrieve the correct amplitude and phase images even under insufficient sampling. 
                </p>
            </div>
            </section>
            <section id="method" />
            <hr>
            <h2>What We Contribute?</h2>
            <b>TL;DR:</b> derivation of the algorithm for TV-regularized FP reconstruction algorithm via ADMM.
            
    validation of Tikhonov regularization on the pupil function that ensures a smooth pupil phase profile.
    
    demonstration of the performance of our method with extremely low measurement SNR and Fourier-space subsampling for reduced number of measurements. 
    application of our algorithm using real experimental data, which shows the effectiveness of TV-regularizer for both super-resolution and phase imaging of biological specimens under challenging imaging conditions.
    
    







<!--

        </div>
        </section>
    
        <section id="results">
            <hr>
            <h2>Some Results (Expand it if you want to see the results)</h2>


            <h3> Learn the lithography system.</h3>
    
            <div class="expandable-section">
                <button class="toggle-button"> Expand</button>
                <div class="content">
                    <!-- Learning the lithography system.
             -->
    
                    <center>
                        <figure>
                            <!-- <video class="centered" width="100%" autoplay loop muted playsinline class="video-background " >
                    <source src="assets/gen_airplane.mp4#t=0.001" type="video/mp4">
                    Your browser does not support the video tag.
                </video> -->
                            <a>
                                <img width="80%" src="asserts/litho_fitting.png">
                            </a>
                            <p class="caption">
                                We experimentally collect a dataset to learn the neural lithography simulator.
                            </p> <br>
                        </figure>
                    </center>


                    <center>
                        <figure>
                            <!-- <video class="centered" width="100%" autoplay loop muted playsinline class="video-background " >
                    <source src="assets/gen_airplane.mp4#t=0.001" type="video/mp4">
                    Your browser does not support the video tag.
                </video> -->
                            <a>
                                <img width="80%" src="asserts/forward_prediction_results.png">
                            </a>
                            <p class="caption">
                                <b> Predicting capability of the learned neural lithography simulator on three models we
                                    explored in neural lithography. The PBL (see details in the paper) performs the best
                                    and thus is used throughout the paper.</b> Top: The training and validation loss
                                curves correspond to the three models explored in our work. Bottom: The corresponding
                                average validation error map and the mean error value across the map.
                            </p> <br>
                        </figure>
                    </center>
    
                    <!-- <center>
            <figure>
                <video class="centered" width="100%" loop muted autoplay playsinline class="video-background " >
                    <source src="assets/gen_bottle.mp4#t=11" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p class="caption">
                    Generated point clouds and reconstructed meshes of bottles (model trained on only 340 shapes).             
                </p> <br>
            </figure>
            </center> -->
                </div>
            </div>


            <hr>
            <h3> Mitigate the design to manufacturing gap.</h3>
    
            <h4> Results on holographic optical elements.</h4>
            <div class="expandable-section">
                <button class="toggle-button">Expand</button>
                <div class="content">
                    <div>
                        <center>
                            <figure style="width: 100%;">
                                <a>
                                    <img width="80%" src="asserts/HOE_results.png">
                                </a>
                                <p class="caption" style="margin-bottom: 24px;"><br>
                                    We show improvement in performance when design the holographic optical elements(HOE)
                                    w/ our learned litho model.
                                </p>
                            </figure>
                        </center>
                    </div>
                    <div>
    
                        <center>
                            <figure style="width: 100%;">
                                <a>
                                    <img width="80%" src="asserts/D2_HOE_quantative.png">
                                </a>
                                <p class="caption" style="margin-bottom: 24px;"><br>
                                    We <b>quantitatively</b> show improvement in performance when design the holographic
                                    optical elements(HOE) w/ our learned litho model.
                                </p>
                            </figure>
                        </center>
                    </div>
    
                </div>
            </div>
    
            <h4> Results on multi-level diffractive lenses which can be used in direct and computational imaging.</h4>
    
            <div class="expandable-section">
                <button class="toggle-button">Expand</button>
                <div class="content">
                    <div>
                        <center>
                            <figure style="width: 100%;">
                                <a>
                                    <img width="60%" src="asserts/ imaging.png">
                                </a>
                                <p class="caption" style="margin-bottom: 24px;"><br>
                                    <b>Imaging performance with the designed MDL</b>. A: Sketch of the setup for
                                    characterizing the performance of MDL. B: We show our measured PSFs and direct
                                    imaging results (i.e., w/o deconvolution) corresponding to design w/o and w/ PBL
                                    litho model. The end of this row shows the line profiles of PSFs designed w/o or w/
                                    different litho models. C: Computational/Indirect Imaging result of the MDL. The
                                    lower right compares the Fourier spectrum of the designed PSFs. <b>Our method's
                                        design enhances the contrast in direct imaging (B) and the high-frequency
                                        imaging performance in computational imaging (C)</b>.
                                </p>
                            </figure>
                        </center>
                    </div>
                    <div>
    
                        <center>
                            <figure style="width: 100%;">
                                <a>
                                    <img width="80%" src="asserts/psf.png">
                                </a>
                                <p class="caption" style="margin-bottom: 24px;"><br>
                                    <b>Comparison of PSFs generated by MDLs in the design and real experiment.</b> In
                                    both the direct and indirect/computational imaging setting, the naive design w/o
                                    lithography model has a larger deviation between the shape from the designed and
                                    experimental PSF. In contrast, the deviation is small when we apply neural
                                    lithography.
                                </p>
                            </figure>
                        </center>
                    </div>
    
                </div>
            </div>

-->


    </div>


    <script>
        $(document).ready(function () {
            $('.toggle-button').on('click', function () {
                $(this).next('.content').toggle();
            });
        });
    </script>

</body>









