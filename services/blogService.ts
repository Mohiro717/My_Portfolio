import { sanityClient, blogQueries } from './sanity';
import { convertSanityPosts, convertSanityPost } from './sanityUtils';
import { posts as localPosts } from '../data/posts';
import type { Post, ConvertedPost, SanityPost } from '../types';

// ブログ投稿取得の統合サービス
export class BlogService {
  private static useSanity = false; // 本番環境ではtrue

  // Sanity使用の切り替え（環境変数で制御）
  static setSanityMode(useSanity: boolean) {
    BlogService.useSanity = useSanity;
  }

  // 全てのブログ投稿を取得
  static async getAllPosts(): Promise<Post[]> {
    try {
      if (BlogService.useSanity) {
        const sanityPosts: SanityPost[] = await sanityClient.fetch(blogQueries.getAllPosts);
        return convertSanityPosts(sanityPosts);
      } else {
        // Sanityが利用できない場合はローカルデータを使用
        return localPosts;
      }
    } catch (error) {
      console.warn('Sanityデータの取得に失敗しました。ローカルデータを使用します:', error);
      return localPosts;
    }
  }

  // 特定のslugの投稿を取得
  static async getPostBySlug(slug: string): Promise<Post | null> {
    try {
      if (BlogService.useSanity) {
        const sanityPost: SanityPost = await sanityClient.fetch(blogQueries.getPostBySlug(slug));
        return sanityPost ? convertSanityPost(sanityPost) : null;
      } else {
        return localPosts.find(post => post.slug === slug) || null;
      }
    } catch (error) {
      console.warn('Sanityデータの取得に失敗しました。ローカルデータを検索します:', error);
      return localPosts.find(post => post.slug === slug) || null;
    }
  }

  // 最新の投稿を指定件数取得
  static async getRecentPosts(limit: number = 3): Promise<Post[]> {
    try {
      if (BlogService.useSanity) {
        const sanityPosts: SanityPost[] = await sanityClient.fetch(blogQueries.getRecentPosts(limit));
        const convertedPosts = convertSanityPosts(sanityPosts);
        return convertedPosts;
      } else {
        return localPosts.slice(0, limit);
      }
    } catch (error) {
      console.warn('Sanityデータの取得に失敗しました。ローカルデータを使用します:', error);
      return localPosts.slice(0, limit);
    }
  }
}

// 環境変数をチェックしてSanityモードを設定
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
if (projectId && projectId !== 'your_project_id_here') {
  BlogService.setSanityMode(true);
  // Sanity mode enabled
} else {
  // Using local data
}