# Elite Car Rentals - Advanced Optimization Tips

## 🎯 Getting 100/100 PageSpeed Score

This guide provides additional tips to achieve perfect scores on PageSpeed Insights.

---

## 1. Image Optimization

### Current Setup
- WebP format with PNG fallback ✅
- Responsive images with `srcset` ✅
- Lazy loading for below-the-fold images ✅

### Advanced Tips

#### A. Use AVIF Format
```jsx
<picture>
  <source srcSet="/image.avif" type="image/avif" />
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.png" alt="..." />
</picture>
```

**Benefits:**
- AVIF is 20-30% smaller than WebP
- 95%+ browser support (2024+)

#### B. Optimize Image Dimensions
```bash
# Use Sharp CLI to convert and compress
npx sharp -i /path/to/image.jpg -o /path/to/image.webp -q 75

# Create multiple sizes
npx sharp -i /path/to/image.jpg -o /path/to/image-[width].webp -s 640,1280 -q 75
```

#### C. Dynamic Image Sizing
```jsx
// Use sizes attribute for responsive images
<Image
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
  // ...
/>
```

---

## 2. Font Optimization

### Current Setup
- System fonts with web font fallback ✅
- `font-display: swap` ✅
- Preloaded critical font ✅

### Advanced Tips

#### A. Self-Host Fonts
```bash
# Download fonts locally instead of Google Fonts
# Saves DNS lookup + HTTP request
wget https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHAPMtMKvwEA.woff2
```

#### B. Use Variable Fonts
```css
@font-face {
  font-family: 'Inter Variable';
  src: url('/fonts/inter-variable.woff2') format('font-variation-settings');
  font-weight: 100 900; /* Single file covers all weights */
}
```

#### C. Font Subsetting
Only include characters you use:

```bash
# Create subset with only needed characters
pyftsubset /path/to/font.ttf --unicodes=U+0020-U+007E
```

---

## 3. Critical CSS Extraction

### Current Setup
- Minimal inline CSS ✅
- Deferred non-critical CSS ✅

### Advanced Implementation

```javascript
// lib/extractCriticalCSS.ts
import * as critical from 'critical';

export async function extractCriticalCSS() {
  const result = await critical.generate({
    base: process.cwd(),
    src: 'index.html',
    target: {
      css: 'critical.css',
      html: 'index-critical.html'
    },
    width: 1920,
    height: 1080,
    timeout: 30000
  });
  
  return result.css;
}
```

---

## 4. JavaScript Performance

### Current Setup
- Minimal JS (2.5KB) ✅
- Debounced scroll handlers ✅
- No third-party scripts ✅

### Advanced Tips

#### A. Code Splitting
```javascript
// Dynamic imports for heavy components
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div>Loading...</div>,
});
```

#### B. Web Workers for Heavy Tasks
```javascript
// Long-running calculations in background
const worker = new Worker('/workers/calculator.js');
worker.postMessage({ data: largeDataset });
worker.onmessage = (e) => console.log(e.data);
```

#### C. Request Idle Callback
```javascript
// Defer non-critical initialization
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Initialize analytics, etc.
  });
} else {
  setTimeout(() => {
    // Fallback for older browsers
  }, 2000);
}
```

---

## 5. Network Optimization

### DNS Prefetch
```html
<!-- Prefetch third-party domains -->
<link rel="dns-prefetch" href="//www.google-analytics.com" />
<link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
```

### Resource Hints
```html
<!-- Preconnect to critical origins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Prefetch non-critical resources -->
<link rel="prefetch" href="/images/section-2.webp" />
<link rel="prefetch" href="/about.html" />
```

### HTTP/2 Server Push
```javascript
// next.config.mjs
export default {
  async headers() {
    return [{
      source: '/index.html',
      headers: [{
        key: 'Link',
        value: '</fonts/inter-600.woff2>; rel=preload; as=font; crossorigin'
      }]
    }];
  },
};
```

---

## 6. Third-Party Scripts

### Analytics Optimization

**Current:** Analytics loaded after 5 seconds

**Better approach:**
```javascript
// Defer non-critical analytics
if (document.readyState === 'complete') {
  loadAnalytics();
} else {
  window.addEventListener('load', loadAnalytics, { once: true });
}
```

### Ad Scripts
```html
<!-- Load ads after initial render -->
<div id="ads"></div>
<script>
  setTimeout(() => {
    const script = document.createElement('script');
    script.src = 'https://adservice.google.com/...';
    document.body.appendChild(script);
  }, 5000);
</script>
```

---

## 7. Compression & Caching

### Brotli Compression
```bash
# On Vercel (automatic)
# On custom server, enable in nginx:

gzip on;
gzip_comp_level 6;
gzip_types text/plain text/css application/json application/javascript;
```

### Long-Term Caching
```javascript
// next.config.mjs
export default {
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [{
          key: 'cache-control',
          value: 'public, max-age=31536000, immutable',
        }],
      },
    ];
  },
};
```

---

## 8. Core Web Vitals Monitoring

### Real User Monitoring (RUM)
```javascript
// Measure real-world Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### SendBeacon API
```javascript
// Send metrics to analytics without blocking page
navigator.sendBeacon('/api/metrics', JSON.stringify({
  LCP: lcpValue,
  INP: inpValue,
  CLS: clsValue,
}));
```

---

## 9. Browser Caching Strategy

### Static Assets
```
Cache-Control: public, max-age=31536000, immutable
```

### HTML Pages
```
Cache-Control: public, max-age=3600, must-revalidate
```

### API Responses
```
Cache-Control: private, max-age=300, must-revalidate
```

---

## 10. Rendering Strategy

### Streaming HTML (Next.js 13+)
```javascript
// Already enabled in App Router
// Streams HTML chunk-by-chunk for faster FCP
```

### Partial Pre-Rendering (PPR)
```javascript
// next.config.mjs
export default {
  experimental: {
    ppr: true,
  },
};
```

---

## Measurement Tools

1. **PageSpeed Insights**
   - https://pagespeed.web.dev/

2. **Lighthouse**
   - Chrome DevTools > Lighthouse tab

3. **WebPageTest**
   - https://www.webpagetest.org/

4. **GTmetrix**
   - https://gtmetrix.com/

5. **CrUX Report**
   - https://crux.webmasters.googleblog.com/

---

## Performance Budget

Maintain these limits:

| Metric | Target |
|--------|--------|
| LCP | < 1.5s (desktop), < 2.5s (mobile) |
| INP | < 100ms (desktop), < 200ms (mobile) |
| CLS | < 0.05 (desktop), < 0.1 (mobile) |
| JavaScript | < 50KB (gzipped) |
| CSS | < 30KB (gzipped) |
| HTML | < 50KB (gzipped) |
| Total Images | < 500KB (all formats) |

---

## Checklist for 100/100 Score

- [ ] LCP image is priority loaded
- [ ] All images have aspect ratios
- [ ] Images are in WebP/AVIF format
- [ ] Fonts use `font-display: swap`
- [ ] Critical CSS is inlined
- [ ] No render-blocking resources
- [ ] JavaScript is deferred/async
- [ ] No layout shifts
- [ ] Cache headers configured
- [ ] Compression enabled (gzip/brotli)
- [ ] No 3xx redirect chains
- [ ] HTTPS enabled
- [ ] No mixed content (HTTP/HTTPS)
- [ ] Lighthouse score ≥ 90
- [ ] Core Web Vitals passed

---

## Real-World Examples

### Hero Section LCP
```jsx
// What we do RIGHT:
<Image priority src="/hero.webp" alt="..." width={500} height={400} />

// What NOT to do:
<Image src="/hero.png" alt="..." /> // Missing priority, priority
```

### Scroll Handler INP
```jsx
// What we do RIGHT:
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
  let timeout;
  const handleScroll = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100); // Throttled
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
}, []);

// What NOT to do:
window.addEventListener('scroll', () => {
  setIsScrolled(window.scrollY > 50); // Every pixel fires update
});
```

### Image Aspect Ratio CLS
```jsx
// What we do RIGHT:
<div style={{ aspectRatio: '16 / 9' }}>
  <Image src="..." fill objectFit="cover" />
</div>

// What NOT to do:
<Image src="..." /> // No aspect ratio = layout shift
```

---

## Support

For more info, check:
- `/PERFORMANCE_GUIDE.md` - Core optimizations
- `/SUPABASE_SETUP.md` - Database setup
- Next.js docs: https://nextjs.org/docs
