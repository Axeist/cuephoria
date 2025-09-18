import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import WhyWeStartedCuephoria from './BlogPost1';
import UltimateStudentHangout from './BlogPost2';
import NervousBeginnerToPoolPro from './BlogPost3';
import LateNightGamingSessions from './BlogPost4';
import ParentsAskWhatsSpecial from './BlogPost5';
import ArtOfPerfectBreak from './BlogPost6';

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();

  const blogComponents: { [key: string]: React.ComponentType } = {
    'why-we-started-cuephoria': WhyWeStartedCuephoria,
    'ultimate-student-hangout': UltimateStudentHangout,
    'nervous-beginner-to-pool-pro': NervousBeginnerToPoolPro,
    'late-night-gaming-sessions': LateNightGamingSessions,
    'parents-ask-whats-special': ParentsAskWhatsSpecial,
    'art-of-perfect-break': ArtOfPerfectBreak,
  };

  const BlogComponent = postId ? blogComponents[postId] : null;

  if (!BlogComponent) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogComponent />;
};

export default BlogPost;
