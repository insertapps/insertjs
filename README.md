# InsertSs

JavaScriot modul for web component

- Insert toggle : Singgle aor multiple open/close toggle buttons
- Insert date To day : Convert data to days
- Insert Shadow effect : Add shadow effect after mouse scroll down 

## Install

```bash
npm install -D esbuild
```

## Bundle

```bash
npm run bundle
```

How to use

## Insert toggle

Super simple javascript toggle button. 

Include set focus feature to the input field when opening the search bar.

```css

.close {
    display: none;
}

.open {
    display: block;
}
```

```html

<button class="insert-toggle" data-target="sidenav">
    ☰
</button>

<div id="sidenav" class="close">
    <!-- your navigation -->
</div>

```
## Insert date To day

```html
<time class="text-sm" datetime="2024-04-04T14:34:44+07:00">2024-04-04</time>
```

## Insert Shadows

How to use

Add css

```css
/* # TailwindCSS  */

@layer utilities {
	.close {
        	display: none;
	}

	.open {
		display: block;
	}
}
```

```css
/* # Vanila CSS  */


.py-6 {
    padding-top:1.5rem;
    padding-bottom:1.5rem
}

.insert-transition {
    transition:.4s;
}
.insert-shadow {
    padding-top:1rem;
    padding-bottom:1rem
    box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);
}
```
HTML Implementation

```html
<div id="headerian" class="insert-transition py-6">
    <!-- your navigation -->
</div>
```

