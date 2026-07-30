# SEO & Open Graph Configuration Guide

## ✅ What's Already Configured

### 1. **Open Graph Metadata** (app/layout.tsx)
- ✅ Site title and description
- ✅ Open Graph tags for Facebook, LinkedIn
- ✅ Twitter Card tags
- ✅ Keywords for search engines
- ✅ Canonical URLs
- ✅ Robots meta tags

### 2. **Page-Specific Metadata**
- ✅ `/give` - Give page metadata
- ✅ `/sermons` - Sermons page metadata
- ✅ `/gallery` - Gallery page metadata

### 3. **SEO Files**
- ✅ `robots.txt` - Search engine crawling rules
- ✅ `sitemap.ts` - Dynamic sitemap generation

## ⚠️ Action Required

### Create Open Graph Image
You need to create an image: **`public/og-image.jpg`**

**Specifications:**
- Size: **1200 x 630 pixels**
- Format: JPG or PNG
- File size: Under 1MB

**Content Ideas:**
1. **Option 1: Branded Card**
   - Church logo
   - "Wind and Fire Church A/G"
   - "Tamale, Ghana"
   - Fire and wind imagery
   - Use brand colors (Red & Blue)

2. **Option 2: Church Photo**
   - Worship service photo
   - Congregation gathering
   - Church building
   - Prayer meeting

**Tools to Create:**
- [Canva](https://canva.com) - Free templates
- [Figma](https://figma.com) - Design tool
- Photoshop or GIMP

### Update Configuration Values

**In `app/layout.tsx`, update:**

1. **metadataBase URL** (line 26)
   ```typescript
   metadataBase: new URL("https://YOUR-ACTUAL-DOMAIN.com"),
   ```

2. **Twitter handle** (line 47)
   ```typescript
   creator: "@YOUR_TWITTER_HANDLE",
   ```

3. **Google Search Console verification** (line 57)
   ```typescript
   verification: {
     google: "YOUR-GOOGLE-VERIFICATION-CODE",
   },
   ```

## 🧪 How to Test

### 1. Facebook/LinkedIn Sharing
Test your Open Graph tags:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Paste your URL and click "Debug"
- See preview and clear cache if needed

### 2. Twitter Card Validator
Test your Twitter cards:
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- Enter your URL to see preview

### 3. General Meta Tags
- [OpenGraph.xyz](https://www.opengraph.xyz/)
- Comprehensive preview across platforms

## 📊 What Gets Shared

When someone shares your site on social media, they'll see:

**Title:** Wind and Fire Church A/G | Tamale, Ghana
**Description:** Experience the power of worship and revival...
**Image:** Your og-image.jpg
**Type:** Website

## 🎯 SEO Benefits

✅ **Better Social Sharing** - Beautiful previews on Facebook, Twitter, LinkedIn
✅ **Improved SEO** - Proper meta tags and sitemap
✅ **Search Engine Indexing** - Robots.txt and structured data
✅ **Google Search Console** - Ready for verification
✅ **Rich Snippets** - Structured metadata for search results

## 📝 Next Steps

1. ✅ Create `og-image.jpg` (1200x630px)
2. ✅ Place it in `/public` folder
3. ✅ Update domain URL in `app/layout.tsx`
4. ✅ Update Twitter handle (if you have one)
5. ✅ Test with Facebook Debugger
6. ✅ Submit sitemap to Google Search Console

## 🌐 Your Sitemap

Once deployed, your sitemap will be at:
`https://your-domain.com/sitemap.xml`

Submit this to:
- Google Search Console
- Bing Webmaster Tools

## 📱 Mobile Optimization

All meta tags are mobile-friendly and include:
- Responsive viewport settings
- Mobile-optimized descriptions
- Large image previews for mobile sharing

---

**Need Help?** Check the detailed image guide in `/public/og-image-info.md`
