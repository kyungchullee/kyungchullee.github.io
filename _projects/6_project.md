---
layout: page
title: Fourier Ptychographic Phase Retrieval With Convex Optimization
description: 
img: assets/img/smear.jpg
importance: 2
category: computational microscopy
---

<!-- External Libraries -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Titillium+Web:400,600,300" rel="stylesheet">
<link rel="stylesheet" href="./static/css/bulma.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">

<!-- Custom Styling -->
<style>
    body {
        font-family: "Titillium Web", sans-serif;
        font-weight: 300;
        font-size: 17px;
        margin: auto;
        max-width: 980px;
    }

    h1, h2, h3 {
        font-weight: 300;
    }
    
    h1 {
        text-align: center;
        font-size: 40px;
    }
    
    h2 {
        font-size: 1.75em;
        margin: 16px 0 4px;
    }
    
    p, ul {
        line-height: 1.5em;
        text-align: justify;
    }
    
    .container {
        margin: auto;
        padding: 16px;
    }
    
    .paper-btn {
        display: inline-block;
        margin: 8px;
        padding: 8px;
        background-color: #665f5c;
        color: white !important;
        font-size: 16px;
        font-weight: 600;
        border-radius: 4px;
        text-align: center;
        text-decoration: none;
    }
    
    .paper-btn:hover {
        opacity: 0.85;
    }
</style>

<body>
    <div class="container">
        <!-- Authors Section -->
        <div id="authors" style="text-align: center;">
            <div>
                <a href="https://kyungchullee.com/">Kyung Chul Lee<sup>1,2</sup></a>,
                <a>Hyesuk Chae<sup>1</sup></a>,
                <a>Shiqi Xu<sup>2</sup></a>,
                <a>Kyungwon Lee<sup>1</sup></a>,
                <a href="https://bme.duke.edu/faculty/roarke-horstmeyer">Roarke Horstmeyer<sup>2</sup></a>,
                <a href="https://www.image.cau.ac.kr/home">Byung-Woo Hong<sup>3,✉</sup></a>,
                <a href="https://biomedia.yonsei.ac.kr/">Seung Ah Lee<sup>1,✉</sup></a>
            </div>
            <div>
                <span><sup>1</sup> Yonsei University</span>
                <span><sup>2</sup> Duke University</span>
                <span><sup>3</sup> Chung-Ang University</span><br />
                <span><sup>✉</sup> Corresponding Authors</span>
            </div>
        </div>

        <!-- Buttons Section -->
        <div style="text-align: center; margin-top: 20px;">
            <a class="paper-btn" href="https://opg.optica.org/oe/fulltext.cfm?uri=oe-32-14-25343&id=552914">
                <i class="fas fa-file-alt"></i> Paper
            </a>
            <a class="paper-btn" href="https://github.com/OISL-Yonsei/FP_ADMM">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    
        <!-- Abstract Section -->
        <section id="abstract">
            <hr>
            <h2>Abstract</h2>
            <p>
                Fourier ptychography (FP) is a powerful computational imaging technique that provides both super-resolution 
                and quantitative phase imaging capabilities by scanning samples in Fourier space with angle-varying illuminations. 
                However, the image reconstruction in FP is inherently ill-posed, particularly when the measurements are noisy 
                and have insufficient data redundancy in the Fourier space. To improve FP reconstruction in high-throughput 
                imaging scenarios, we propose a regularized FP reconstruction algorithm utilizing anisotropic total variation 
                (TV) and Tikhonov regularizations for the object and the pupil functions, respectively. Our approach, based on 
                the alternating direction method of multipliers (ADMM), successfully recovers high-quality images with sparsely 
                sampled and/or noisy measurements.
            </p>
        </section>
    
        <!-- Contributions Section -->
        <section id="contributions">
            <hr>
            <h2>What We Contribute?</h2>
            <ul>
                <li>Derivation of the algorithm for TV-regularized FP reconstruction using ADMM.</li>
                <li>Validation of Tikhonov regularization on the pupil function to ensure a smooth pupil phase profile.</li>
                <li>Demonstration of performance under extremely low measurement SNR and Fourier-space subsampling.</li>
                <li>Application to real experimental data, showing the effectiveness of TV-regularizer for biological specimens.</li>
            </ul>
        </section>
    </div>
    
    <!-- jQuery Functionality -->
    <script>
        $(document).ready(function () {
            $('.toggle-button').on('click', function () {
                $(this).next('.content').toggle();
            });
        });
    </script>
</body>
