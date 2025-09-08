import React, { useState } from 'react';
import { usePWA } from '../hooks/usePWA';

const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, isOnline, installPWA } = usePWA();
  const [isVisible, setIsVisible] = useState(true);
  const [isInstalling, setIsInstalling] = useState(false);

  const handleInstall = async () => {
    setIsInstalling(true);
    const success = await installPWA();
    if (success) {
      setIsVisible(false);
    }
    setIsInstalling(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    // 1日後に再表示するためのローカルストレージ設定
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  // すでに却下されている場合は表示しない（1日以内）
  const dismissedTime = localStorage.getItem('pwa-install-dismissed');
  if (dismissedTime && Date.now() - parseInt(dismissedTime) < 86400000) {
    return null;
  }

  if (!isInstallable || !isVisible) {
    return null;
  }

  return (
    <>
      {/* オフライン通知 */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 z-50">
          <p className="text-sm font-medium">オフラインモードで表示中</p>
        </div>
      )}

      {/* PWAインストールプロンプト */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-white border border-watercolor-border rounded-2xl shadow-2xl z-50 overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <img
              src="/images/favicon.jpg"
              alt="Mohiro Portfolio"
              className="w-12 h-12 rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="font-serif-jp font-bold text-ink text-lg mb-2">
                アプリとしてインストール
              </h3>
              <p className="text-ink/70 text-sm mb-4">
                このサイトをアプリとしてインストールして、より快適にご利用いただけます。オフラインでも閲覧可能になります。
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleInstall}
                  disabled={isInstalling}
                  className="bg-watercolor-pink text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {isInstalling ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      インストール中...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      インストール
                    </>
                  )}
                </button>
                <button
                  onClick={handleDismiss}
                  className="text-ink/60 px-4 py-2 text-sm hover:text-ink transition-colors"
                >
                  後で
                </button>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-ink/40 hover:text-ink/60 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* プログレスバーのような装飾 */}
        <div className="h-1 bg-gradient-to-r from-watercolor-pink via-watercolor-blue to-watercolor-green"></div>
      </div>
    </>
  );
};

export default PWAInstallPrompt;