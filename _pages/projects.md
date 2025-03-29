---
layout: page
title: research
permalink: /research/
description: 
nav: true
nav_order: 1
display_categories: [computational cameras, computational microscopy, artistic project]
horizontal: false
---

<!-- External Libraries -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<link href="https://fonts.googleapis.com/css?family=Google+Sans|Noto+Sans|Titillium+Web:400,600,300" rel="stylesheet">
<link rel="stylesheet" href="./static/css/bulma.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">

<!-- Custom Styling -->

<style>
	.main-text{
        font-family: "Titillium Web", sans-serif;
        font-weight: 300;
        font-size: 17px;
        margin: auto;
        max-width: 1100px;
    }
    img {
      width: 100%; /* makes the image responsive, adjusting to the width of its container */
      height: auto; /* maintains the aspect ratio of the image */
  }
   .video-responsive {
    position: center;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}





    h1, h2, h3 {
        font-weight: 600;
    }
    
    h1 {
        text-align: center;
        font-size: 40px;
    }
    
    h2 {
        font-size: 1.5em;
        margin: 16px 0 4px;
    }
    
    p, ul {
        line-height: 1.5em;
        text-align: justify;
    }
    
    h4 {
    		font-weight: 600;
        font-size: 1em;
        margin: 16px 0 4px;
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
    .video-container {
        text-align: center;  /* Centering the content inside */
    }
    
    iframe {
        display: block;  /* Change from inline to block */
        margin-left: auto;
        margin-right: auto;
    }

</style>



<!-- pages/projects.md --> 



<div class="main-text">

<div class="main-text">

<div class="main-text">
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



<section id="section1">
    <hr>
    <h2>Phase Mask Design for Lensless Cameras</h2>
      <p>
      Lensless cameras are a novel class of computational imaging devices, in which the lenses are replaced with a thin mask with 2D point spread functions (PSFs) to achieve ultra-compact and low-cost hardware. However, the high costs and limited scalability with conventional fabrication methods are not ideal for mass production of designed lensless cameras. We propose a method for high-throughput fabrication of lensless cameras designed with arbitrary PSFs for various imaging tasks. The workflow of our method includes designing the smooth phase mask profiles for a given PSF pattern and then fabricating the mask in a single shot via the gray-scale lithography technique. We have shown that our method can be used for a flexible production of custom lensless cameras with various pre-designed PSFs and effectively obtain images of the scene via computational image reconstruction. We demonstrate the potential applications of our custom lensless cameras, including the deployment of the learned reconstruction networks for fast imaging and fingerprint detection via optical template matching. The experimental results shown in our work demonstrate a solid potential for manufacturing and deploying compact lensless cameras for diverse real-world imaging applications.
      </p>
  <h4>Relevant publications</h4>
    <ul>
      <li>Kyung Chul Lee, Junghyun Bae, Nakkyu Baek, Jaewoo Jung, Wook Park, and Seung Ah Lee. Design and single-shot fabrication of lensless cameras with arbitrary point spread functions. Optica, 10(1):72–80, 2023. [<a href="https://doi.org/10.1364/OPTICA.466072">Link</a>] </li>
      <li>Yujin Lee, Hyesuk Chae, Kyung Chul Lee, Nakkyu Baek, Taeyoung Kim, Jaewoo Jung, and Seung Ah Lee. Fabrication of integrated lensless cameras via uv-imprint lithography. IEEE Photonics Journal, 14(2):1–8, 2022. [<a href="https://ieeexplore.ieee.org/document/9730042">Link</a>]</li>
    </ul>
  <img src="/assets/img/research_preview/phasemask.jpg" alt="Sized Image">
  <img src="/assets/img/research_preview/phasemask.gif" alt="Sized Image">
</section>




<section id="section2">
    <hr>
    <h2>Single-shot Multiplexed Imaging via Customized Lensless Cameras</h2>
      <p>
      Lensless imaging with 2D PSFs decouples one-to-one mapping between each position in the scene and the sensor pixels, enabling single-shot multiplexed measurements without using superpixels. We have built various type of customized lensless cameras to obtain multiplexed information from the single shot lensless measurments.
      </p>
    <h4>High Speed Eyetracker with Lensless Imaging</h4>
    <p>
    We have developed a goggle-type eye tracker featuring a low-cost, high-speed lensless camera designed to monitor eye movements in individuals with neurodegenerative diseases. By combining a rolling shutter image sensor with lensless computational imaging, the system reconstructs a sequence of time-resolved images from a single snapshot, significantly enhancing the camera's frame rate from 15 Hz to 480 Hz.
    </p>
    <h4>Snapshot Hyperspectral Imaging with Lensless Camera</h4>
    <p>
    Our device combines a linear variable filter and a phase mask to encode spectral information onto a monochromatic image sensor, enabling the recovery of hyperspectral image stacks from a single measurement. This is achieved by leveraging the spectral information encoded in different regions of the 2D point spread function. Using our prototype, we demonstrate the acquisition of hyperspectral images spanning wavelengths from 410 to 800 nm through single-shot lensless measurements.
    </p>
    <h4>Privacy Preserving Imaging via Shift-Variant Lensless Camera</h4>
    <p>
    Cameras serve as essential tools for collecting information from the surrounding environment and providing feedback to users, yet they pose a risk to privacy. Here, we propose a method to encrypt the scene at the hardware level by designing the forward model of a lensless camera with engineered shift-variant transfer function and to decode the encrypted scene with a physics-based neural network.
    </p>
<h4>Relevant publications</h4>
<ul>
<li>Taeyoung Kim, Kyung Chul Lee, Kyungwon Lee, Nakkyu Baek, Jaewoo Jung, Eosu Kim, Bobae Park, Junghee Ha, Keun You Kim, Young-Seok Seo, and Seung Ah Lee. High-speed lensless eye tracker for microsaccade measurement. In SPIE Advanced Biophotonics Conference, 2024. [<a href="https://doi.org/10.1117/12.3017964">Link</a>]
  </li>
    <li>Taeyoung Kim, Kyung Chul Lee, Nakkyu Baek, Hyesuk Chae, and Seung Ah Lee. Aperture-encoded snapshot hyperspectral imaging with a lensless camera. APL Photonics, 8(6), 2023. [<a href="https://doi.org/10.1063/5.0150797">Link</a>]
</li>
		<li>Kyung Chul Lee, Donggeun Bae, and Seung Ah Lee. Privacy-preserving imaging via ultra-thin lensless cameras with arbitrary shift-variant point spread function. Manuscript Prep.
		</li>
    </ul>    
    <img src="/assets/img/research_preview/lensless.jpg" alt="Sized Image">
</section>




<section id="section3">
    <hr>
    <h2>Regularized Phase Retrieval for High-Speed Fourier Ptychography</h2>
    <p>
    Fourier ptychography (FP) is a powerful computational imaging technique that provides super-resolution and quantitative phase imaging capabilities by scanning samples in Fourier space with angle-varying illuminations. However, the image reconstruction in FP is inherently ill-posed, particularly when the measurements are noisy and have insufficient data redundancy in the Fourier space. To improve FP reconstruction in high-throughput imaging scenarios, we propose a regularized FP reconstruction algorithm utilizing anisotropic total variation (TV) and Tikhonov regularizations for the object and pupil functions, respectively. We have demonstrated the effectiveness of our method on the real experimental FP microscopy images, where the TV regularizer effectively suppresses the measurement noise while maintaining the edge information in the biological specimen and helps retrieve the correct amplitude and phase images even under insufficient sampling.
        </p>
    <h4>Relevant publications</h4>
    <ul>
    <li>Kyung Chul Lee, Hyesuk Chae, Shiqi Xu, Kyungwon Lee, Roarke Horstmeyer, Seung Ah Lee, and Byung-Woo Hong. Anisotropic regularization for sparsely sampled and noise-robust fourier ptychography. Optics Express, 32(14):25343–25361, 2024. [<a href="https://doi.org/10.1364/OE.529023">Link</a>]
</li>
    <li>Hyeongyu Kim, Kyungwon Kim, Kyung Chul Lee, Seung Ah Lee, and Dosik Hwang. Hybrid physics informed machine learning for fourier ptychography. Under Review, 2024</li>
    </ul>       
    <img src="/assets/img/research_preview/regularization.jpg" alt="Sized Image">
    </section>



<section id="section4">
    <hr>
    <h2>Smartphone Based Computational Microscope</h2>
    <p>
    The reduction of the size and cost of microscopes creates new possibilities for disease screening and health care in resource-limited settings. Smartphones and mobile devices can be useful for the construction of compact and portable imaging devices, by replacing expensive and bulky optical instruments with state-of-the-art cameras, high-performance processors, and network connectivity in a compact footprint. We propose a smartphone-mountable computational microscope that achieves wide-field and high-resolution imaging, based on the Fourier ptychographic (FP) microscopy technique. Our device uses the smartphone’s built-in camera for microscopy imaging, the display screen for programmable illumination, and the computational power of the smartphone processors for FP image reconstruction. Our device achieves a half-pitch resolution of 870 nm over a wide field-of-view of 2.1 × 1.6 mm² with amplitude, phase, and color imaging capabilities. As global health issues continue to persist and new epidemic challenges arise, we believe that our smartphone microscopy technology can effectively address the clinical needs in point-of-care environments.
    </p>
<h4>Relevant publications</h4>
<ul>
<li>Kyung Chul Lee, Kyungwon Lee, Jaewoo Jung, Se Hee Lee, Donghyun Kim, and Seung Ah Lee. A smartphone-based fourier ptychographic microscope using the display screen for illumination. ACS Photonics, 8(5):1307–1315, 2021. [<a href="https://doi.org/10.1021/acsphotonics.1c00350">Link</a>]</li>
<li>Shiqi Xu, Xi Yang, Paul Ritter, Xiang Dai, Kyung Chul Lee, Lucas Kreiss, Kevin C Zhou, Kanghyun Kim, Amey Chaware, Jadee Neff, et al. Tensorial tomographic fourier ptychography with applications to muscle tissue imaging. Advanced Photonics, 6(2):026004–026004, 2024. [<a href="https://doi.org/10.1117/1.AP.6.2.026004">Link</a>]</li>
</ul>    
<img src="/assets/img/research_preview/smartphone.jpg" alt="Sized Image">
<iframe width="560" height="315" src="https://www.youtube.com/embed/71nAhFhXI4A?si=GOdraXenvdKo4IVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>




​    
<section id="section5">
    <hr>
    <h2>Virtual Staining for Digital Pathology</h2>
    <p>
    Virtual staining techniques now enable the transformation of label-free images into clinically standard stained images; however, the extensive costs and time requirements of labelled dataset generation impede its widespread use in clinical settings. We aim to implement semi-supervised learning for virtual staining to enable high-fidelity results while reducing the need for labor-intensive dataset generation. To achieve this, we designed a neural network architecture that digitally stains label-free images of unstained tissue by minimizing style feature differences between the outputs of stained and unstained raw images. Our approach is particularly valuable for computational microscopy techniques that enable various label-free imaging applications, where generating paired datasets is challenging, such as in 3D pathology and immunohistochemistry staining.
    </p>
<h4>Relevant publications</h4>
<ul>
  <li>Kyung Chul Lee, Hyesuk Che, Roarke Horstmeyer, and Seung Ah Lee. Semi-supervised virtual staining for high-throughput and label-free histopathology. Under Review, 2024
  <li>Lucas Kreiss, Shaowei Jiang, Xiang Li, Shiqi Xu, Kevin C Zhou, Kyung Chul Lee, Alexander Mu ̈hlberg, Kanghyun Kim, Amey Chaware, Michael Ando, et al. Digital staining in optical microscopy using deep learning-a review. PhotoniX, 4(1):34, 2023. [<a href="https://doi.org/10.1186/s43074-023-00113-4">Link</a>]</li>
	<li>Hyesuk Chae, Jongho Kim, Joonsung Jeon, Kyungwon Lee, Kyung Chul Lee, Ji Ung Choi, Suki Kang, Soyoung Choi, Geunbae Bang, Jong Ha Lee, et al. Restoring H&E stain in faded slides via phase-to-color virtual staining in near-infrared. APL Photonics, 9(10), 2024. [<a href="https://doi.org/10.1063/5.0226277">Link</a>]</li>
	<img src="/assets/img/research_preview/vs.jpg" alt="Sized Image">
</div>    




