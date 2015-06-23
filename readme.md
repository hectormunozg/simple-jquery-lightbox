# Ultra simple jQuery lightbox
## How to use it
### 1. Create in your css a `div id="overlay"` like this:
```css
#overlay {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.95);
	display: none;
	z-index: 999;
} 
```
You can style the image shown inside the overlay as well:
```css
#overlay img {
	width: 70%;
	height: auto;
	display: block;
	text-align: center;
	margin: 20px auto;
}
```
### 2. Change your image path modifying the app.js
```javascript
var imagePath = '#gallery > .container > .row > div > a > img';
```
### 3. Enjoy!