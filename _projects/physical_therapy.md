---
layout: page
title: At-Home Physical Therapy
description: Wearable systems for physical therapy monitoring and guidance
img: assets/img/physical_therapy.jpg
importance: 2
category: Active
images:
  slider: true
---

## At-Home Physical Therapy

### Research Overview

The Wearable Computing Group is developing wearable systems to support remote physical therapy monitoring and guidance, enabling patients to perform exercises at home with real-time feedback and movement correction. Our work addresses the critical challenge of providing effective physical therapy guidance outside of clinical settings, where traditional frequent in-person visits can be costly, time-consuming, and inaccessible for many patients.

<swiper-container
  keyboard="true"
  navigation="true"
  pagination="true"
  pagination-clickable="true"
  pagination-dynamic-bullets="true"
  rewind="true"
  loop="true"
  centered-slides="true"
  space-between="20"
  slides-per-view="1"
  breakpoints='{"768": {"slidesPerView": 2, "spaceBetween": 20}, "1200": {"slidesPerView": 3, "spaceBetween": 24}}'
  lazy="true"
  zoom="true"
  autoplay='{"delay": 4000, "disableOnInteraction": false}'
>
  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/physical_therapy.jpg"
      class="img-fluid rounded z-depth-1"
      zoomable=true
      caption="Wearable systems for at-home physical therapy monitoring."
    %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/julia-vas.jpg"
      class="img-fluid rounded z-depth-1"
      zoomable=true
      caption="Julia Larson presenting at Virginia Academy of Science"
    %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/ncur1.jpg"
      class="img-fluid rounded z-depth-1"
      zoomable=true
      caption="Megan Caulfield and Justin Blevins presenting at NCUR."
    %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/ncur2.jpg"
      class="img-fluid rounded z-depth-1"
      zoomable=true
      caption="Megan Caulfield demonstrating wearable guidance prototypes."
    %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/sophia-tyler-capwic.png"
      class="img-fluid rounded z-depth-1"
      zoomable=true
      caption="Sophia Cronin and Tyler Webster presenting at CAPWIC 2021."
    %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid
      loading="eager"
      path="assets/img/custom-pcb.jpg"
      class="img-fluid rounded z-depth-1"
      zoomable=true
      caption="Custom haptic driver board."
    %}
  </swiper-slide>
</swiper-container>

### Key Research Directions

Our research explores multiple approaches to movement correction and guidance. Early work by Sanarea Ali (Engineering '20) established the foundation by examining how wearable computing can support clinicians in understanding patient injuries and improving recovery outcomes. Building on this, Sophia Cronin and Tyler Webster developed combined haptic and visual feedback systems, presenting at the ACM Capital Region Celebration of Women in Computing (CAPWIC) in 2021, providing both tactile and visual cues to help patients understand and correct their movement patterns. Megan Caulfield and Justin Blevins demonstrated how haptic "instructions" can guide motion, presenting their work at the National Conference on Undergraduate Research (NCUR) in 2023. Julia Larson (Engineering '26) has extended this work examining whether feedback at the site of muscle activation is more effective than methods targeting individual limb or joint movement. 

Other work has explored computational methods to evaluate exercise performance and various feedback modalities. Riley White (Computer Science '23) developed a method to decompose repetitive activities into sub-motions, with the goal of breaking complex actions into smaller pieces that a computer system could more easily guide users between, enabling more precise and effective movement correction during physical therapy exercises. 

### Grant Support and Technical Capabilities

This work has been supported by multiple grants from 4-VA and the JMU College of Integrated Science and Engineering:

- **4-VA Grant** ($30,000, awarded 2022): "Supporting College Students with Impaired Vision in a Shared Housing Through Haptic-Guided Peripersonal Navigation" with [Dr. Sol Lim](https://www.ise.vt.edu/people/faculty/lim.html) (Virginia Tech, PI) and Dr. Michael Stewart (JMU, Co-PI)
- **4-VA Grant** ($10,000, awarded 2021): "Designing Wearable Systems for Movement Correction in Physical Therapy Applications" with [Dr. Tom Martin](https://www.faculty.ece.vt.edu/tlmartin/) (Virginia Tech, Co-PI), enabling prototyping and high-resolution motion capture validation at the [ICAT studios](https://icat.vt.edu/studios.html)
- **JMU CISE Faculty Development Fund** ($5,000, awarded 2021): Wearable systems design with [Dr. Heather Kirkvold](https://www.jmu.edu/cise/engineering/people/all-people/kirkvold-heather.shtml)
- **JMU CISE Faculty Development Fund** ($2,500, awarded 2019): "A Wearable Computing System to Increase Access to Healthcare and Patient Outcomes in Physical Rehabilitation Exercises" with Dr. Michael Stewart

Our lab maintains motion capture systems, wearable data capture and feedback systems, real-time IMU streaming, and deep learning infrastructure to support this research.