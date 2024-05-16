# Performance Monitoring

1. Performance Metrics

| Core web vitals                | metrics          | performance                                                     |
| ------------------------------ | ---------------- | --------------------------------------------------------------- |
| Largest Contentful Paint (LCP) | Loading          | Good: < 2.5s, Needs improvement: 2.5s >= 4.0s, poor: > 4.0s     |
| First Input Delay (FID)        | Interactivity    | Good: < 100ms, Needs improvement: 100ms >= 300ms, poor: > 300ms |
| Cumulative Layout Shift (CLS)  | Visual Stability | Good: < 0.1, Needs improvement: 0.1 >= 0.25, poor: > 0.25       |

## INP (Interaction to Next Painting)

- Time taken by the browser to respond to user input and paint the next frame.
- It should be less than 100ms.
- Time taken to interact with the page and the next paint.
- INP = FCP - TTI

| Browser Centric Metric    | User Centric Metric                |
| ------------------------- | ---------------------------------- |
| Time to first byte (TTFB) | First Contentful Paint (FCP)       |
| Network requests          | Largest Contentful Paint (LCP)     |
| DNS Resolution            | First Input Display (FID)          |
| Connection type           | Interaction to Next Painting (INP) |
| Page load                 | Total Blocking Time (TBT)          |
| DOM Content Loaded        | Cumulative Layout shift (CLS)      |

| Criteria                       | Browser Centric Metric                                            | User Centric Metric                                       |
| ------------------------------ | ----------------------------------------------------------------- | --------------------------------------------------------- |
| Focus                          | technical aspects of page load and render                         | user experience and interaction                           |
| measurement location           | within the browser                                                | user's device                                             |
| purpose                        | technical performance aspects within the browser                  | user experience and interaction                           |
| alignment with user perception | not directly aligned                                              | directly aligned                                          |
| evaluation of responsiveness   | focus on technical aspects                                        | focus on user interaction including metrics like FID, INP |
| Usage                          | identify technical bottlenecks (optimizing loading)               | measure user experience                                   |
| monitoring                     | useful for tracking technical performance                         | useful for tracking user experience                       |
| Best practices                 | identify and fix technical issues (optimizing loading processes ) | measure and improve user experience                       |
| Best practices                 | set performance budgets for key technical metrics                 | use tools like lighthouse, webpagetest                    |

## Core Web Vitals:

1.  `FCP (First Contentful Paint)`: Time taken for the first content to be painted on the screen.
2.  `FID (First Input Delay)`: Time taken for the browser to respond to the user's first interaction.
3.  `TTI (Time to Interactive)`: Time taken for the page to become fully interactive.
4.  `TBT (Total Blocking Time)`: Total amount of time the page is blocked from responding to user input.
5.  `CLS (Cumulative Layout Shift)`: Measures the visual stability of the page.

## Other Metrics:

6. `FMP (First Meaningful Paint)`: Time taken to render the first meaningful content on the page.
7. `LCP (Largest Contentful Paint)`: Time taken to render the largest piece of DOM content visible within the viewport.
8. `TTFB (Time to First Byte)`: Time taken to receive the first byte of response from the server.

## Performance Monitoring Tools:

- Developer Mode
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
  - [Network Panel](https://developer.chrome.com/docs/devtools/network/)
  - [Performance Panel](https://developer.chrome.com/docs/devtools/evaluate-performance/)
- Simulated Data

  - [WebPageTest](https://www.webpagetest.org/)

- Real User Monitoring

  - CRUX - Chrome User Experience Report,
  - page speed insights
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)

  - [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

- [WebPageTest](https://www.webpagetest.org/)
- [Sentry](https://sentry.io/)
- [MS Clarity](https://clarity.microsoft.com/)
- [Google Analytics](https://analytics.google.com/analytics/web/)
- [GTmetrix](https://gtmetrix.com/)
- [Pingdom](https://www.pingdom.com/)
- [Calibre](https://calibreapp.com/)
- [SpeedCurve](https://speedcurve.com/)
- [Dareboost](https://www.dareboost.com/)

## Performance Budget:

- Set limits on performance metrics.
- Monitor and enforce them.
- Budgets help maintain performance over time.

## Performance Budgeting Tools:

- [Performance Budget Calculator](https://perf-budget-calculator.surge.sh/)

## User-centric Performance Metrics:

1. `INP (Interaction to Next Painting)`: Time between the last interaction and the next painting event.
2. `FCP, FID, TTI, TBT, CLS`: Measures responsiveness and user experience.

## Performance Monitoring Best Practices:

- Set clear performance goals.
- Monitor core web vitals.
- Use performance monitoring tools.
- Optimize images, minify CSS/JavaScript.
- Reduce server response time.

## Performance Monitoring Techniques:

- Implement performance budgets.
- Analyze and optimize.
- Utilize tools and metrics effectively.
- By focusing on these metrics, using appropriate tools, and adhering to best practices, you can ensure that your website delivers a fast and seamless user experience.
