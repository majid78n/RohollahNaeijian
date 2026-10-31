// Global profile settings. Lists (publications, projects, news, education,
// experience) live as Markdown files in src/content/ instead.
export const site = {
  name: "Rohollah Naeijian",
  // Surname as it appears in author lists; highlighted in publications.
  authorKey: "Naeijian",
  role: "M.Sc. Researcher · Space Geodesy & Machine Learning",
  affiliationLine: "Chair of Space Geodesy, ETH Zürich · Politecnico di Milano",
  description:
    "Geoinformatics researcher working on deep learning for GNSS geodesy, Earth observation and geospatial data science.",
  location: "Zürich, Switzerland",
  // Path under /public, or null to show initials.
  photo: "/images/rohollah-naeijian.jpg" as string | null,
  email: "naeijianrohollah@gmail.com",
  // Put the PDF at public/cv.pdf and set this to "/cv.pdf" to show the button.
  cv: null as string | null,
  status: "Open to PhD positions",

  links: [
    { label: "Google Scholar", href: "" },
    { label: "GitHub", href: "https://github.com/majid78n" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rohollah-naeijian" },
    { label: "ORCID", href: "" },
  ],

  affiliations: [
    // Shown left to right in the hero. `height` balances the logos' visual weight;
    // `mono` logos are single-colour and are drawn white in dark mode.
    { name: "ETH Zürich", logo: "/images/logos/eth-zurich.svg", height: 30, mono: true, href: "https://ethz.ch/" },
    { name: "Chair of Space Geodesy, ETH Zürich", logo: "/images/logos/space-geodesy-chair.png", height: 56, mono: false, href: "https://space.igp.ethz.ch/" },
    { name: "Politecnico di Milano", logo: "/images/logos/polimi.svg", height: 40, mono: true, href: "https://www.polimi.it/" },
  ],

  highlight: {
    label: "Upcoming talk",
    title: "Swiss Geoscience Meeting 2026",
    detail: "Nov 2026 · Fribourg · Oral",
  },

  interests: [
    { icon: "◎", title: "GNSS geodesy", text: "Loading signals, tropospheric delay, station time series" },
    { icon: "∿", title: "Deep learning for time series", text: "Signal separation, transformers, distribution shift" },
    { icon: "▦", title: "Earth observation", text: "Sentinel-1/2, Landsat, MODIS, InSAR deformation" },
    { icon: "⌖", title: "Geospatial AI", text: "Foundation models and transferable representations" },
  ],
} as const;

export type Site = typeof site;
