import React from "react";
import { createPortal } from "react-dom";
import { Home, Briefcase, User, Mail, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

const DATA = {
  navbar: [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "projects", icon: Code, label: "Projects" },
    { id: "contact", icon: Mail, label: "Contact" },
  ],
};

const BottomNav: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const dock = (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-[9999]"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 10px)" }}
    >
      <div className="bottom-nav-shell rounded-[32px]">
        <Dock
          direction="middle"
          magnification={44}
          distance={100}
          className="glass rounded-[32px] relative z-[2] flex justify-center items-center px-4 sm:px-12 py-5 sm:py-7 gap-3 sm:gap-5"
        >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <div className="relative group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full hidden group-hover:block text-white text-xs sm:text-sm tracking-wide pointer-events-none px-3 py-1">
                {item.label}
              </div>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-label={item.label}
                className={cn(
                  "nav-button h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-transparent text-zinc-400 hover:text-zinc-100",
                  "border-0 relative"
                )}
              >
                <span className="nav-button-bg absolute inset-0 rounded-full"></span>
                <item.icon className="relative z-10" style={{ width: '18px', height: '18px' }} />
              </button>
            </div>
          </DockIcon>
        ))}
        </Dock>
      </div>
    </div>
  );

  return createPortal(dock, document.body);
};

export default BottomNav;
