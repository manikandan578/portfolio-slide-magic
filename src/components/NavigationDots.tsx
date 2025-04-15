
import { useEffect, useState } from 'react';

interface NavigationDotsProps {
  sections: string[];
}

const NavigationDots = ({ sections }: NavigationDotsProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const isInView = (top <= windowHeight * 0.5) && (bottom >= windowHeight * 0.5);
          
          if (isInView) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-10 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-4">
        {sections.map((section) => (
          <button
            key={section}
            aria-label={`Navigate to ${section} section`}
            onClick={() => scrollToSection(section)}
            className={`slide-indicator ${activeSection === section ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationDots;
