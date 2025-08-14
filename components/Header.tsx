import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('home');
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionStates = useRef<Map<string, boolean>>(new Map());
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Story' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' },
  ], []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveLink(targetId);

    // If we are already on the homepage, just scroll smoothly
    if (location.pathname === '/') {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerEl = document.querySelector('header');
        const headerOffset = headerEl ? headerEl.offsetHeight : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to the homepage with the hash
      if (targetId === 'home') {
        navigate('/');
      } else {
        navigate(`/#${targetId}`);
        // Add a delay to ensure proper scrolling after navigation
        setTimeout(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const headerEl = document.querySelector('header');
            const headerOffset = headerEl ? headerEl.offsetHeight : 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  };
  
  useEffect(() => {
    // Observer should only be active on the homepage
    if (location.pathname !== '/') {
      if (observer.current) {
        observer.current.disconnect();
      }
      setActiveLink(''); // No active section link on subpages
      return;
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        sectionStates.current.set(entry.target.id, entry.isIntersecting);
      });

      // Always check scroll position first for more reliable detection
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // If we're at the very top of the page, show home
      if (scrollY < 100) {
        setActiveLink('home');
        return;
      }

      // Find the section that's currently in view
      let currentSection: string | null = null;
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 80;

      // Check sections in reverse order (bottom to top) to prioritize lower sections
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        
        // Check if section is in viewport
        if (rect.top <= headerHeight + 50 && rect.bottom > headerHeight + 50) {
          currentSection = item.id;
          break;
        }
      }

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    const headerEl = document.querySelector('header');
    const headerOffset = headerEl ? headerEl.offsetHeight : 80;
    
    // Use scroll event for more responsive detection
    const handleScroll = () => {
      handleIntersection([]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: `-${headerOffset}px 0px -20% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    
    const sections = document.querySelectorAll('#home, #story, #works, #contact');
    sections.forEach(section => {
      if (observer.current && section) {
        sectionStates.current.set(section.id, false);
        observer.current.observe(section);
      }
    });
    
    const timeoutId = setTimeout(() => {
        if(location.hash) {
          const id = location.hash.substring(1);
          if (navItems.find(item => item.id === id)) {
            setActiveLink(id);
            // Only scroll if we're not on the initial page load (avoid jumping after loading screen)
            const isInitialLoad = window.performance.navigation.type === 1 && window.scrollY === 0;
            if (!isInitialLoad) {
              const targetElement = document.getElementById(id);
              if (targetElement) {
                const headerEl = document.querySelector('header');
                const headerOffset = headerEl ? headerEl.offsetHeight : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }
          }
        } else {
          // If no hash and at top of page, ensure home is active
          if (window.scrollY < 100) {
            setActiveLink('home');
          } else if (observer.current) {
            handleIntersection(observer.current.takeRecords());
          }
        }
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [location.pathname, location.hash, navItems]);


  const getLinkClasses = (id: string) => {
    const baseClasses = "relative text-ink/70 hover:text-watercolor-pink font-medium font-sans-jp transition-all duration-300";
    const activeClasses = "text-watercolor-pink font-bold";
    return `${baseClasses} ${activeLink === id ? activeClasses : ''}`;
  };

  const getHref = (id: string) => id === 'home' ? '/' : `/#${id}`;

  return (
    <header className="bg-paper/70 backdrop-blur-md sticky top-0 z-50 shadow-header-shadow">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-serif-jp font-bold text-ink hover:text-watercolor-pink transition-colors duration-300">
          Hope in Challenge
        </a>
        <ul className="flex space-x-10 items-center">
           {navItems.map(item => (
            <li key={item.id}>
              <a href={getHref(item.id)} onClick={(e) => handleNavClick(e, item.id)} className={getLinkClasses(item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;