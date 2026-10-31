---
title: ZTD QGIS Plugin
summary: QGIS plugin that turns sparse GNSS zenith tropospheric delays into dense, terrain-resolved ZTD maps using the (Augmented) Iterative Tropospheric Decomposition strategy.
affiliation: Politecnico di Milano
date: 2026-06-01
image: /images/projects/ztd-qgis-plugin.jpg
imageAlt: ZTD-AITD Map Generator plugin window in QGIS with turbulent-delay and atmospheric-phase-screen output maps over a ZTD map of northern Italy
tags: [Python, PyQGIS, GDAL, GNSS]
links:
  code: https://github.com/majid78n/ZTD_QGIS_Plugin
---

Geoinformatics Project at Politecnico di Milano (Prof. Giovanna Venuti). **ZTD-AITD Map Generator** is a QGIS plugin, written from scratch, that implements the ITD and AITD strategies of Song, Venuti, Monti-Guarnieri & Manzoni (2025, *Environmental Modelling & Software* 194, 106669).

### Motivation

The zenith tropospheric delay (ZTD) is the largest unmodelled atmospheric error in GNSS positioning and InSAR deformation maps. It also carries information about water vapour that is useful for meteorology. Physical and empirical models (Saastamoinen, GPT3, HGPT2, …) give the delay at a single site or on a coarse grid. They do not give a dense, terrain-resolved map built from a sparse GNSS network, and this plugin produces exactly that.

### Method

Each ZTD observation is split into two physically meaningful parts:

- **Stratified (height-dependent):** S(h) = L · exp(−B · h), fitted by least squares to the stations inside a moving decorrelation window.
- **Turbulent (horizontal):** the spatially correlated residual T(x), interpolated with inverse-distance weighting.

**ITD** iterates the fit and the interpolation for every DEM pixel. This can produce bullseye artefacts on irregular networks, because the set of stations inside the window changes abruptly from one pixel to the next. **AITD** avoids this. It decomposes the delay at the stations only, then interpolates the smooth L and B parameter fields and the residuals to the DEM using a modified IDW weight, w = 1 / (1 + d²/α). The original paper reports that this removes the artefacts and runs about twice as fast, with comparable leave-one-out accuracy.

### What the plugin does

1. **Read:** loads GNSS ZTD tables (CSV, TSV or whitespace-delimited) with automatic column detection, including multi-epoch files.
2. **Prepare:** builds the bounding box, then downloads and mosaics a DEM from the open AWS Terrain Tiles dataset (no API key needed), or uses a local or already-loaded raster.
3. **Decompose and interpolate:** runs ITD, AITD or both, with metric distances in an automatically selected UTM zone.
4. **Output:** writes styled GeoTIFFs for the total ZTD, stratified, turbulent and DEM layers, plus a station GeoPackage. All outputs load into QGIS automatically.

### Engineering highlights

- **Fully responsive UI:** processing runs on a background thread (QgsTask) with a progress bar and log, and can be cancelled at any time.
- **Exact ITD speed-up:** DEM pixels that share the same set of nearby stations are solved once, so ITD stays practical on grids with millions of pixels.
- **Height-datum handling:** an optional ellipsoidal-to-mean-sea-level conversion (EGM2008 or EGM96), and sea or lake pixels clamped to 0 m so they don't inflate the delay.
- **Time series and APS maps:** processes many epochs in one run and produces epoch-minus-reference difference maps, mirroring how the method is compared with InSAR.
- **Reliability masks:** an optional clip to the stations' convex hull, plus a flag on pixels higher than the highest station, so extrapolated areas are clearly marked.
- **Clean architecture:** separate GUI, worker and core layers. The core is independent of PyQGIS so it can be tested on its own, and the plugin relies only on QGIS's bundled libraries (NumPy, SciPy, GDAL/OGR).
