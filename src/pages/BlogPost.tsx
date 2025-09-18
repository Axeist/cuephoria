import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import WhyWeStartedCuephoria from './blog/WhyWeStartedCuephoria';
import UltimateStudentHangout from './blog/UltimateStudentHangout';
import NervousBeginnerToPoolPro from './blog/NervousBeginnerToPoolPro';
import LateNightGamingSessions from './blog/LateNightGamingSessions';
import ParentsAskWhatsSpecial from './blog/ParentsAskWhatsSpecial';
import ArtOfPerfectBreak from './blog/ArtOfPerfectBreak';

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
