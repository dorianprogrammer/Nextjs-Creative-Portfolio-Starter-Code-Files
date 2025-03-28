import Link from "next/link";
import React from "react";

const getIcons = (icon) => {
  switch (icon) {
    case "home":
      return <HomeIcon />;
    case "about":
      return <AboutIcon />;
    case "projects":
      return <ProjectsIcon />;
    case "contact":
      return <ContactIcon />;
    case "github":
      return <GithubIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    case "twitter":
      return <TwitterIcon />;
    case "resume":
      return <ResumeIcon />;
    default:
      return <HomeIcon />;
  }
};
const NavButtton = ({ x, y, link, icon, newTab, label }) => {
  return (
    <div className="absolute cursor-pointer z-50" style={{ transform: `translate(${x}, ${y})` }}>
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full flex items-center justify-center"
        aria-label={label}
        name={label}
      >
        <span>{icon}</span>
      </Link>
    </div>
  );
};

export default NavButtton;
