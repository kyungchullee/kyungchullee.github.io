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
                <a>Kyungwon Lee<sup>1</sup></a>,<br />
                <a href="https://bme.duke.edu/faculty/roarke-horstmeyer">Roarke Horstmeyer<sup>2</sup></a>,
                <a href="https://www.image.cau.ac.kr/home">Byung-Woo Hong<sup>3,✉</sup></a>,
                <a href="https://biomedia.yonsei.ac.kr/">Seung Ah Lee<sup>1,✉</sup></a><br />
            </div>
            <div>
                <span><sup>1</sup> Yonsei University</span>
                <span><sup>2</sup> Duke University</span>
                <span><sup>3</sup> Chung-Ang University</span><br />
                <span><sup>✉</sup> Corresponding Authors</span>
            </div>
        </div>

    
        <!-- Abstract Section -->
        <section id="abstract">
            <hr>
            <p>
                My research centers on developing optical imaging systems by jointly designing optical hardware and image processing algorithms for applications ranging from the microscale (microscopes) to the macroscale (cameras). I am interested in all aspects of computational imaging, including (1) designing advanced computational algorithms, (2) optimizing programmable optical hardware, and (3) applying these innovations to real-world scenarios to maximize imaging throughput. More specifically, my work during Ph.D. has primarily focused on computational phase retrieval for designing and imaging phase profiles. I have invented a novel design and single-shot fabrication method of phase masks for mask-based lensless imaging and built various types of multiplexed imaging systems based on lensless imaging. Additionally, I have contributed to the development of high-speed phase imaging techniques based on Fourier ptychography, significantly reducing the large dataset requirements of conventional reconstruction methods. Detailed information about my experiences is summarized in the following sections. Some projects include:
                <ul>
                  <li><a href="#section1">Phase Mask Design for Lensless Cameras</a></li>
                  <li><a href="#section2">Single-shot Multiplexed Imaging via Customized Lensless Cameras</a></li>
                  <li><a href="#section3">Regularized Phase Retrieval for High-Speed Fourier Ptychography</a></li>
                  <li><a href="#section4">Smartphone Based Computational Microscope</a></li>
                  <li><a href="#section5">Virtual Staining for Digital Pathology</a></li>
                </ul>
                
                
            </p>
        </section>
    
        <!-- Contributions Section -->
        <section id="section1">
            <hr>
            <h2>Phase Mask Design for Lensless Cameras</h2>
            <h3>Problem Statement</h3>
            <p>
            Lensless cameras are a novel class of computational imaging devices, in which the lenses are replaced with a thin mask with 2D point spread functions (PSFs) to achieve ultra-compact and low-cost hardware. However, the high costs and limited scalability with conventional fabrication methods are not ideal for mass production of designed lensless cameras.
            </p>
            <h3>Methods</h3>
            <p>
            We propose a method for high-throughput fabrication of lensless cameras designed with arbitrary PSFs for various imaging tasks. The workflow of our method includes designing the smooth phase mask profiles for a given PSF pattern and then fabricating the mask in a single shot via the gray-scale lithography technique.
            </p>
            <h3>Results</h3>
            <p>
            We show that our method can be used for a flexible production of custom lensless cameras with various pre-designed PSFs and effectively obtain images of the scene via computational image reconstruction. We demonstrate the potential applications of our custom lensless cameras, including the deployment of the learned reconstruction networks for fast imaging and fingerprint detection via optical template matching.
            </p>
            <h3>Contributions</h3>
            <p>
            Our work provides for the first time a programmable and high-throughput way to construct lensless cameras with custom phase masks by combining a phase-retrieval-based design algorithm and the single-shot grayscale lithography. The experimental results shown in our work demonstrate a solid potential for manufacturing and deploying compact lensless cameras for diverse real-world imaging applications.
            </p>
            
            
            
            
            
            
            
            
            
        </section>
    </div>
    
    
</body>
