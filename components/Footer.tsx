import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper/50 shadow-header-shadow">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-serif-jp font-bold text-ink">持たざる者の挑戦</p>
            <p className="text-xs text-ink/70 mt-1">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
               <a href="https://x.com/3537Hi" target="_blank" rel="noopener noreferrer" className="text-ink/70 hover:text-watercolor-pink transition-colors" aria-label="X profile">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
              </a>
              <a href="https://stand.fm/channels/6892ddc1b09e6a462a52dd21" target="_blank" rel="noopener noreferrer" className="text-ink/70 hover:text-watercolor-pink transition-colors" aria-label="stand.fm profile">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8h-1a6 6 0 11-12 0H3a7.001 7.001 0 006 6.93V17H7v1h6v-1h-2v-2.07z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <Link to="/terms" className="text-sm font-sans-jp text-ink/80 hover:text-watercolor-pink transition-colors">利用規約</Link>
            <Link to="/privacy" className="text-sm font-sans-jp text-ink/80 hover:text-watercolor-pink transition-colors">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;