---
layout: page
title: Phase Mask Design for Lensless Camera
description: 
img: assets/img/PM.jpg
importance: 2
category: computational cameras
---

Advances in image sensor technology and miniaturized optics have enabled the development of ultra-compact and high-quality cameras for everyday use. However, while the pixel resolution of cameras continues to increase, there are physical limits to reducing the size and cost of the entire camera module. As an alternative approach, various lensless imaging methods, which replace the lenses with thin light-modulating masks, have been recently developed. In lensless cameras, the entire module can be miniaturized by reducing the thickness of the lens elements as well as the focusing distance of the lenses. The masks modulate the incident light from the scene, and the image sensors capture the intensity distribution of the modulated light field. With the knowledge of the mask’s transfer function, the encoded intensity information of the scene can be recovered through computational processing of the raw measurement that is otherwise unidentifiable.



In these lensless cameras, the overall field of view (FOV) and image quality are primarily determined by the light modulating properties of the phase mask originating from the locally varying microscopic structures on the mask. The mask and the resulting PSF inherently define the transfer function of the imaging system; further, the contrast and density of the PSF affect the multiplexing capability and reconstruction quality of the image under a finite bit depth of the image sensor. Inevitably, the ability to design and generate phase masks and the resulting PSFs are crucial for manufacturing and deploying lensless cameras for various applications.



We developed a method for the high-throughput fabrication of lensless cameras designed with arbitrary point spread functions and showed real-world imaging applications including deep-learning based image reconstruction and optical template matching.



![lensless camera](/assets/img/lensless_camera.png){: width="100%" }{: .align-center}






**Reference**

* Lee, Kyung Chul, et al. "[Design and single-shot fabrication of lensless cameras with arbitrary point spread functions.](https://opg.optica.org/optica/fulltext.cfm?uri=optica-10-1-72&id=525050)" *Optica* 10.1 (2023): 72-80.

