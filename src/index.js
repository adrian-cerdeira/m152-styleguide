import SmoothScroll from '../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.js';
import './index.scss';

// Smooth Scroll
new SmoothScroll('a[href*="#"]', {
    speed: 1100,
    speedAsDuration: true
});