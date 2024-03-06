# Fonts Optimization
Fonts play a significant role in the design of a website, but using custom fonts in your project can affect performance if the font files need to be fetched and loaded.
![App Screenshot](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Ffont-layout-shift.png&w=1920&q=75&dpl=dpl_8JWihzhXtpkYanrPN4yhGPoiM2MX)
Next.js automatically optimizes fonts in the application when you use the `next/font` module. It downloads font files at build time and hosts them with your other static assets. This means when a user visits your application, there are no additional network requests for fonts which would impact performance.

Next.js 14 introduces significant enhancements for handling fonts in your web applications, providing an optimized and streamlined approach:

## next/font Module:
The core component for managing fonts in Next.js 14 Offers two primary functions for importing fonts:
* `next/font/google:` For integrating Google Fonts directly into your project.
* `next/font/local:` For using custom fonts stored locally in your project.

### Adding a primary font
To add a custom Google font in our application :

In your `/app/ui` folder, create a new file called `fonts.ts`. You'll use this file to keep the fonts that will be used throughout your application.
Import the `Inter` font from the `next/font/google` module - this will be your primary font. Then, specify what subset you'd like to load. In this case, `'latin'`:

> /app/ui/fonts.ts
```typescript
import { Inter } from 'next/font/google';
 export const inter = Inter({ subsets: ['latin'] });
```
Finally, add the font to the <body> element in `/app/layout.tsx`:
> /app/layout.tsx
```typescript
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```
By adding `Inter` to the `<body>` element, the font will be applied throughout your application. Here, you're also adding the Tailwind `antialiased` class which smooths out the font. It's not necessary to use this class, but it adds a nice touch.

# Image Optimization
Next.js can serve static assets, like images, under the top-level /public folder. Files inside /public can be referenced in your application.
With regular HTML, you would add an image as follows:
```html
<img
  src="/hero.png"
  alt="dekstop image"
/>
```
However, this means you have to manually:

- Ensure your image is responsive on different screen sizes.
- Specify image sizes for different devices.
- Prevent layout shift as the images load.
- Lazy load images that are outside the user's viewport.

### The <Image> component
The `<Image>` Component is an extension of the HTML `<img>` tag, and comes with automatic image optimization, such as:

- Preventing layout shift automatically when images are loading.
- Resizing images to avoid shipping large images to devices with a smaller viewport.
- Lazy loading images by default (images load as they enter the viewport).
- Serving images in modern formats, like WebP and AVIF, when the browser supports it.

## Adding the desktop hero image
In your `/app/page.tsx` file, import the component from `next/image`. Then, add the image under the comment:
> /app/page.tsx
```typescript
import Image from 'next/image';

export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/dekstop-photo.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="dekstop image"
      />
    </div>
    //...
  );
}
```
* Here, you're setting the `width` to `1000` and `height` to `760` pixels. It's good practice to set the width and height of your images to avoid layout shift, these should be an aspect ratio identical to the source image.
* You'll also notice the class hidden to remove the image from the DOM on mobile screens, and md:block to show the image on desktop screens.

## Adding the mobile hero image
Now it's your turn! Under the image you've just added, add another `<Image>` component for `hero-mobile.png`.

The image should have a `width` of `560` and `height` of `620` pixels.
It should be shown on mobile screens, and hidden on desktop - you can use dev tools to check if the desktop and mobile images are swapped correctly.
Once you're ready, expand the code snippet below to see the solution.
> /app/page.tsx
```typescript
      <Image
        src="/dekstop.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
```

