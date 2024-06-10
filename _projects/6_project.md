---
layout: page
title: Phase Retrieval With Convex Optimization
description: 
img: assets/img/smear.jpg
importance: 2
category: computational microscopy
---

Fourier ptychography (FP) is a powerful computational imaging technique that provides both super-resolution and quantitative phase imaging capabilities by scanning samples in Fourier space with angle-varying illuminations. However, the image reconstruction in FP is inherently ill-posed, particularly when the measurements are noisy and have insufficient data redundancy in the Fourier space. To improve FP reconstruction in high-throughput imaging scenarios, we propose a regularized FP reconstruction algorithm utilizing anisotropic total variation (TV) and Tikhonov regularizations for the object and the pupil functions, respectively. To solve this regularized FP problem, we formulate a reconstruction algorithm using alternating direction method of multipliers and show that our approach successfully recovers high-quality images with sparsely sampled and/or noisy measurements. The results are quantitatively and qualitatively compared against various FP reconstruction algorithms to analyze the effect of regularization under harsh imaging conditions. In particular, we demonstrate the effectiveness of our method on the real experimental FP microscopy images, where the TV regularizer effectively suppresses the measurement noise while maintaining the edge information in the biological specimen and helps retrieve the correct amplitude and phase images even under insufficient sampling. 

