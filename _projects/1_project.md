---
layout: page
title: project 1
description: Portable microscope on a smartphone via computational imaging
img: assets/img/smartphoneFP.jpg
importance: 1
category: work
---

**Portable Microscope Using Smartphone**

The reduction of the size and cost of microscopes creates new possibilities for disease screening and health care in resource-limited settings. Smartphones and mobile devices can be useful for the construction of compact and portable imaging devices, by replacing expensive and bulky optical instruments with state-of-the-art cameras, high-performance processors, and network connectivity in a compact footprint. The rapid dissemination of smartphones and their user-friendly interfaces can allow for microscopic imaging and evaluation of biological specimens to be accessible to the general public as well as trained health care professionals. As the technologies for image sensors, miniaturized optics, and mobile processors continue to develop, these smartphone-enabled devices are expected to change how medical tests and evaluations are conducted in the field, as well as in the lab.

**Fourier Ptychographic Microscopy (FPM) on a Smartphone**

Here, we report on a simple and portable microscopy system on a smartphone.  Our smartphone FPM is a true stand-alone imaging device that achieves both wide FOV and  the high resolution for field applications. Our device utilizes the front camera module as a part of the microscope train and the display screen as the illumination source for FPM. In this way, we leverage the computational power of smartphone processors and the high SBP of the smartphone cameras and achieve high resolution imaging over a very wide FOV.  

**Programmable Illumination Using OLED Screen**

The use of screen as an illumination not only allows the entire system to be simple and compact but also provides a large degree of freedom for illumination engineering. While conventional FPM uses 2D LED arrays for illumination, we can  easily vary the size and the positions of the bright spots on the screen and realize various illumination patterns for effective image reconstruction in Fourier ptychography. With the optical design, we also constructed a 3D printed module to mount the lenses and the smartphone. Users can easily assemble and turn their smartphone into a compact microscope. 

***In-situ* Reconstruction on a smartphone**

FPM reconstruction process heavily depends on the fast Fourier transform for propagating the complex field back and forth between the sample and the image plane. The algorithm is implemented on our custom Android application using the open CV library. In the application, we recover about 150 µm x 150 µm region at a time, which takes about 30 seconds including the loading time of the saved images. 

The entire process of image acquisition, calculations for the image reconstruction and the display of the images are performed on the smartphone with a custom built Android application. Total time of 1 minute is required for capturing and saving 69 low resolution images. Once the capturing is finished, the high resolution image can be reconstructed on the smartphone which takes about 30s for the selected region of interest. 

**Imaging Results**

We applied our system to observe a biological sample. We imaged unstained blood smear with our device and acquired a high-resolution image over a large area as shown in this slide.  We can observe much sharper features of white blood cell and red blood cell from reconstructed amplitude and reconstructed phase. Also, color images can be reconstructed with our device. For color FPM imaging, each color channel is captured and reconstructed separately. The full FOV reconstruction result of the Pap smear sample shows a much sharper features of the sample.

**Demo**

[![demo](https://img.youtube.com/vi/71nAhFhXI4A/0.jpg)](https://youtu.be/71nAhFhXI4A)





