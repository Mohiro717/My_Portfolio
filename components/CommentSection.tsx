import React, { useState, useEffect } from 'react';
import { Comment } from '../types';

interface CommentSectionProps {
  postSlug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postSlug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    author: '',
    email: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // コメント読み込み（ローカルストレージから）
    const savedComments = localStorage.getItem(`comments-${postSlug}`);
    if (savedComments) {
      try {
        const parsed = JSON.parse(savedComments);
        setComments(parsed.map((c: any) => ({
          ...c,
          timestamp: new Date(c.timestamp)
        })));
      } catch (error) {
        // エラーログは削除（本番環境では適切なエラーハンドリングを実装）
      }
    }
  }, [postSlug]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.author.trim() || !newComment.content.trim()) {
      return;
    }

    setIsSubmitting(true);

    // 新しいコメントを作成
    const comment: Comment = {
      id: Date.now().toString(),
      postSlug,
      author: newComment.author.trim(),
      email: newComment.email.trim(),
      content: newComment.content.trim(),
      timestamp: new Date(),
      approved: true, // シンプルな実装として自動承認
      replies: []
    };

    // コメントを追加
    const updatedComments = [...comments, comment];
    setComments(updatedComments);

    // ローカルストレージに保存
    localStorage.setItem(`comments-${postSlug}`, JSON.stringify(updatedComments));

    // フォームをリセット
    setNewComment({
      author: '',
      email: '',
      content: ''
    });

    setIsSubmitting(false);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="mt-16 space-y-8">
      <div>
        <h3 className="text-2xl font-serif-jp font-bold text-ink mb-6">
          コメント ({comments.length})
        </h3>

        {/* コメント一覧 */}
        <div className="space-y-6 mb-12">
          {comments.length === 0 ? (
            <p className="text-ink/60 italic text-center py-8">
              まだコメントがありません。最初のコメントを投稿してください！
            </p>
          ) : (
            comments.map((comment) => (
              <div 
                key={comment.id}
                className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-watercolor-pink/20 hover:border-watercolor-pink/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-serif-jp font-bold text-ink text-lg">
                      {comment.author}
                    </h4>
                    <time className="text-ink/60 text-sm">
                      {formatDate(comment.timestamp)}
                    </time>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none">
                  <p className="text-ink/80 leading-relaxed whitespace-pre-line">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* コメント投稿フォーム */}
        <div className="bg-watercolor-blue/10 backdrop-blur-sm rounded-lg p-6 border border-watercolor-blue/20">
          <h4 className="text-xl font-serif-jp font-bold text-ink mb-6">
            コメントを投稿する
          </h4>
          
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="author" className="block text-ink/80 font-medium mb-2">
                  お名前 <span className="text-watercolor-pink">*</span>
                </label>
                <input
                  type="text"
                  id="author"
                  value={newComment.author}
                  onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-watercolor-blue/30 bg-white/70 focus:border-watercolor-pink focus:outline-none focus:ring-2 focus:ring-watercolor-pink/20 transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-ink/80 font-medium mb-2">
                  メールアドレス（公開されません）
                </label>
                <input
                  type="email"
                  id="email"
                  value={newComment.email}
                  onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-watercolor-blue/30 bg-white/70 focus:border-watercolor-pink focus:outline-none focus:ring-2 focus:ring-watercolor-pink/20 transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="content" className="block text-ink/80 font-medium mb-2">
                コメント <span className="text-watercolor-pink">*</span>
              </label>
              <textarea
                id="content"
                rows={4}
                value={newComment.content}
                onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-watercolor-blue/30 bg-white/70 focus:border-watercolor-pink focus:outline-none focus:ring-2 focus:ring-watercolor-pink/20 transition-all duration-300 resize-none"
                placeholder="記事についての感想や質問をお聞かせください..."
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || !newComment.author.trim() || !newComment.content.trim()}
                className="inline-flex items-center gap-2 bg-watercolor-pink text-white px-6 py-3 rounded-lg hover:bg-opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 font-serif-jp font-bold"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    投稿中...
                  </>
                ) : (
                  <>
                    コメントを投稿
                    <span>✍️</span>
                  </>
                )}
              </button>
            </div>
          </form>
          
          <p className="text-xs text-ink/60 mt-4">
            ※ コメントは表示前に確認される場合があります。適切な内容でコメントをお願いいたします。
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;