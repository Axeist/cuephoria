# Google Search Console Setup Guide for Cuephoria

## Sitemap URL
**Submit this URL to Google Search Console:**
```
https://www.cuephoria.in/sitemap.xml
```

## Step-by-Step Setup Instructions

### 1. Verify Your Website
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" and enter: `https://www.cuephoria.in`
4. Verify ownership using one of these methods:
   - **HTML file upload** (recommended)
   - **HTML tag** (add to index.html)
   - **DNS record** (if you have domain access)
   - **Google Analytics** (if connected)

### 2. Submit Your Sitemap
1. Once verified, go to **Sitemaps** in the left sidebar
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Wait for Google to process (usually 24-48 hours)

### 3. Request Indexing for Key Pages
After submitting sitemap, manually request indexing for:
- Homepage: `https://www.cuephoria.in/`
- Booking page: `https://www.cuephoria.in/book`
- Blog main: `https://www.cuephoria.in/blog`

### 4. Additional SEO Optimizations Already Implemented

✅ **Structured Data (Schema.org)**
- LocalBusiness schema with complete business info
- Opening hours, location, contact details
- Service offerings (PS5, Pool, VR, etc.)
- Already included in index.html and SEOMetadata component

✅ **Meta Tags**
- Title tags optimized for each page
- Meta descriptions with keywords
- Open Graph tags for social sharing
- Twitter Card tags

✅ **Robots.txt**
- Properly configured at: `https://www.cuephoria.in/robots.txt`
- Points to sitemap location

✅ **Canonical URLs**
- Set on all pages to prevent duplicate content

✅ **Mobile-Friendly**
- Responsive design implemented
- Viewport meta tag configured

### 5. Key Pages Included in Sitemap

**High Priority (Priority 0.9-1.0):**
- Homepage
- Booking page
- Games section
- Student gaming pages
- Cuephoria Lite announcement

**Medium Priority (Priority 0.7-0.8):**
- Blog posts
- About section
- Gallery
- Contact

**SEO-Optimized Anchor Links:**
- PS5 gaming Trichy
- 8-ball pool Trichy
- Student discounts
- NIT student gaming
- Cuephoria Lite

### 6. Monitoring & Maintenance

**Check Regularly:**
- Coverage report (indexed pages)
- Performance (search queries, clicks, impressions)
- Mobile usability
- Core Web Vitals

**Update Sitemap When:**
- Adding new blog posts
- Adding new pages
- Major content updates
- Cuephoria Lite opens (update dates)

### 7. Important Notes

- **Domain:** Use `www.cuephoria.in` consistently (not `cuephoria.in`)
- **HTTPS:** Ensure SSL certificate is active
- **Last Modified:** Sitemap updated on 2025-01-15
- **Change Frequency:** Set based on content update frequency
- **Priority:** Higher priority for important pages

### 8. Additional Recommendations

1. **Google My Business**: Create/claim listing for local SEO
2. **Bing Webmaster Tools**: Submit sitemap there too
3. **Analytics**: Connect Google Analytics to Search Console
4. **Backlinks**: Build quality backlinks from local directories
5. **Content**: Regularly update blog with fresh content

## Sitemap Statistics

- **Total URLs**: 40+
- **Last Updated**: 2025-01-15
- **Format**: XML Sitemap 0.9
- **Includes**: Images, blog posts, service pages, anchor links

## Need Help?

If you encounter issues:
1. Check sitemap is accessible: `https://www.cuephoria.in/sitemap.xml`
2. Verify robots.txt allows crawling
3. Check for crawl errors in Search Console
4. Ensure all pages return 200 status code

