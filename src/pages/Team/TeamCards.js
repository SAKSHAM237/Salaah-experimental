import React, { useEffect, useRef } from "react";
import "./TeamCards.css";

const hasText = (val) => typeof val === "string" && val.trim().length > 0;

/* LinkedIn SVG icon — inline so no extra dependency is needed */
const LinkedInIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* Shared detail fields rendered only when non-empty */
const CardDetails = ({ company, position, linkedin }) => (
  <>
    {hasText(company) && <div className="workplace-tag">@ {company}</div>}
    {hasText(position) && <div className="pos-detail">{position}</div>}
    {hasText(linkedin) && (
      <a
        href={linkedin}
        className="acc-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon /> LinkedIn
      </a>
    )}
  </>
);

/* ── Card #11 : Diagonal Clip-Path Wipe (Name Below Photo) ── */
export const Card11 = ({ name, title, img, position, company, linkedin }) => {
  const showOverlay = hasText(company) || hasText(position) || hasText(linkedin);

  return (
    <div className="p11">
      <div className="photo-box">
        <img src={img} alt={name} loading="lazy" />
        {showOverlay && (
          <div className="diag-layer">
            <CardDetails company={company} position={position} linkedin={linkedin} />
          </div>
        )}
      </div>
      <div className="info-below">
        <div className="p-name">{name}</div>
        {hasText(title) && <div className="p-role">{title}</div>}
      </div>
    </div>
  );
};

/* ── Card #22 : Holographic Light Sweep + On-Photo Drawer ── */
export const Card22 = ({ name, title, img, position, company, linkedin }) => {
  const showDrawer = hasText(company) || hasText(position) || hasText(linkedin);

  return (
    <div className="p22">
      <img src={img} alt={name} loading="lazy" />
      <div className="holo-cap">
        <div className="p-name">{name}</div>
        {hasText(title) && <div className="p-role">{title}</div>}
        {showDrawer && (
          <div className="extra-on">
            <CardDetails company={company} position={position} linkedin={linkedin} />
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Card #25 : Hybrid (#01 Pop-Out Extension + #19 3D Cursor Tilt & Photo Glow) ── */
export const Card25 = ({ name, title, img, position, company, linkedin }) => {
  const cardRef = useRef(null);
  const showDrawer = hasText(company) || hasText(position) || hasText(linkedin);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onEnter = () => {
      card.style.transition =
        "transform 0.14s ease-out, box-shadow 0.35s ease, background 0.3s ease, border-radius 0.3s ease";
    };
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -10;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      card.style.transform = `perspective(900px) scale(1.26) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const onLeave = () => {
      card.style.transition =
        "transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, background 0.3s ease, border-radius 0.3s ease";
      card.style.transform =
        "perspective(900px) scale(1) rotateX(0deg) rotateY(0deg)";
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="p25-slot">
      <div className="p25" ref={cardRef}>
        <div className="photo-box">
          <img src={img} alt={name} loading="lazy" />
        </div>
        <div className="info-below">
          <div className="p-name">{name}</div>
          {hasText(title) && <div className="p-role">{title}</div>}
          {showDrawer && (
            <div className="reveal-below">
              <CardDetails company={company} position={position} linkedin={linkedin} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Legacy default export kept for backward compatibility ── */
const TeamCards = (props) => <Card11 {...props} />;
export default TeamCards;
