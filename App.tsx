
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import LoadingScreen from './components/LoadingScreen';
import SEO from './components/SEO';
import PWAInstallPrompt from './components/PWAInstallPrompt';

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  const handleLoadingFinished = () => {
    setIsAppReady(true);
    // Ensure we start at the top of the page after loading and clear any hash
    window.location.hash = '';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  };

  if (!isAppReady) {
    return <LoadingScreen onFinished={handleLoadingFinished} />;
  }

  return (
    <div className="animate-fade-in-app">
      <SEO />
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans-jp text-ink">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog/:slug" element={<PostPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <PWAInstallPrompt />
      </HashRouter>
    </div>
  );
}

export default App;