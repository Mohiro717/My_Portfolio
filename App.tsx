
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  if (!isAppReady) {
    return <LoadingScreen onFinished={() => setIsAppReady(true)} />;
  }

  return (
    <div className="animate-fade-in-app">
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
      </HashRouter>
    </div>
  );
}

export default App;