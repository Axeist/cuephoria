import reviewsData from '../data/reviews.json';

export interface ProcessedReview {
  title: string;
  url: string;
  stars: number;
  name: string;
  reviewUrl: string;
  text: string;
  category?: string;
  verified?: boolean;
}

export interface ReviewData {
  reviewId: string;
  reviewUrl: string;
  reviewer: {
    numberOfReviews: number;
    reviewerId: string;
    reviewerName: string;
    reviewerUrl: string;
    isLocalGuide: boolean;
  };
  rating: number;
  reviewText: string;
  publishedAtDate: string;
  publishAt: string;
  likesCount: number;
  reviewImageUrls: string[];
  response: null | any;
  responseFromOwnerDate: null | string;
  responseFromOwnerText: null | string;
}

const REVIEW_CATEGORIES = {
  ATMOSPHERE: ['ambience', 'atmosphere', 'vibe', 'environment', 'mood', 'space'],
  GAMING: ['ps5', 'playstation', 'gaming', 'games', 'billiards', 'pool', 'snooker'],
  SERVICE: ['staff', 'service', 'friendly', 'helpful', 'team', 'workers'],
  VALUE: ['price', 'affordable', 'cheap', 'value', 'budget', 'student', 'discount'],
  EXPERIENCE: ['experience', 'time', 'fun', 'enjoy', 'love', 'great', 'amazing', 'perfect']
};

function categorizeReview(text: string): string {
  const lowerText = text.toLowerCase();
  
  for (const [category, keywords] of Object.entries(REVIEW_CATEGORIES)) {
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      return category.toLowerCase();
    }
  }
  return 'general';
}

function getQualityScore(review: any): number {
  let score = 0;
  
  // Text quality
  if (review.text && review.text.length > 50) score += 3;
  else if (review.text && review.text.length > 20) score += 2;
  else if (review.text && review.text.length > 0) score += 1;
  
  // Rating diversity bonus (prioritize non-5 star reviews)
  if (review.stars < 5) score += 4;
  else score += 1;
  
  // Add some randomness for variety
  score += Math.random() * 2;
  
  return score;
}

export function processReviews(): ProcessedReview[] {
  const typedReviews = reviewsData as any[];
  
  // Filter and score reviews
  const scoredReviews = typedReviews
    .filter(review => review.text && review.text.trim().length > 0)
    .map(review => ({
      review,
      score: getQualityScore(review),
      category: categorizeReview(review.text)
    }))
    .sort((a, b) => b.score - a.score);
  
  // Ensure we include all non-5 star reviews
  const nonFiveStarReviews = scoredReviews.filter(item => item.review.stars < 5);
  
  // Select best 5-star reviews for diversity
  const fiveStarReviews = scoredReviews
    .filter(item => item.review.stars === 5)
    .slice(0, 45); // Take top 45 five-star reviews
  
  // Combine and limit total
  const selectedReviews = [...nonFiveStarReviews, ...fiveStarReviews].slice(0, 50);
  
  return selectedReviews.map(item => ({
    title: item.review.title || `${item.review.stars} star review`,
    url: item.review.url,
    stars: item.review.stars,
    name: item.review.name,
    reviewUrl: item.review.reviewUrl,
    text: item.review.text,
    category: item.category,
    verified: true
  }));
}

export function getReviewStats() {
  const typedReviews = reviewsData as any[];
  const totalReviews = typedReviews.length;
  
  const ratingCounts = {
    5: typedReviews.filter(r => r.stars === 5).length,
    4: typedReviews.filter(r => r.stars === 4).length,
    3: typedReviews.filter(r => r.stars === 3).length,
    2: typedReviews.filter(r => r.stars === 2).length,
    1: typedReviews.filter(r => r.stars === 1).length,
  };
  
  const averageRating = typedReviews.reduce((sum, r) => sum + r.stars, 0) / totalReviews;
  
  return {
    totalReviews,
    averageRating: Number(averageRating.toFixed(1)),
    ratingDistribution: ratingCounts
  };
}