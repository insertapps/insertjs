# InsertSs

JavaScriot modul for web component

- Insert toggle: Open : Close toggle buttons
- Insert date To day : Convert data to days
- Insert Shadow effect : Add shadow effect after scroll 

## Install

```bash
npm install -D esbuild
```

## Bundle

```bash
npm run bundle
```

## Insert toggle

Sumper simple javascript toggle button

```css

.close {
    display: none;
}

.open {
    display: block;
}
```

```html

<button class="rounded-full p-2" data-target="sidenav">
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

```css
/* # TailwindCSS  */

.insert-shadow {
    @apply shadow-md py-3;
}

.insert-transition {
    @apply transition-all duration-300 delay-0 ease-[ease];
}
```

```css
/* # Vanila CSS  */

.insert-transition {
  transition:.4s;
}
.insert-shadow {
  box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04);
}
```
