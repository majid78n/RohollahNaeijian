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
  photo: "/images/profile.jpg" as string | null,
  email: "rnaeijian@student.ethz.ch",
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
    { short: "ETH", name: "ETH Zürich", unit: "Chair of Space Geodesy", color: "#1f407a", href: "https://space.igp.ethz.ch/" },
    { short: "PM", name: "Politecnico di Milano", unit: "M.Sc. Geoinformatics Eng.", color: "#5b7a96", href: "https://www.polimi.it/" },
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
