# navigation-standard

**Introduction**: This navigation is built to handle up to five simple links and keep them displayed to the user at all times. The link text should be short yet descriptive and have a corresponding icon that is displayed on mobile and tablet.

**WARNING**: Using link text that is lengthy or has multiple words could result in unexpected spacing or line breaks.

## How To Use

1. Copy the `<header>` HTML from the index.html file

2. Copy the CSS from the style.css file

**Note:** The style sheet includes variables which must be copied in order for all the default styles to be applied. The body style is not required.

3. Copy the JavaScript from config.js. Everything is contained within the "init" function which is performed when the page loads. If you already have a window load function you may place the contents of the "init" function inside of your current load function.

4. Edit the bannerLinks skip to contain a link to the main content of your website.

5. Edit the bannerLinks variable to include your desired logo.

**Note:** An extra text variable has been added incase your logo is or contains an image. To use it simply comment out the original and uncomment the one containing the image and edit as needed.

6. Edit navigationLinks to contain the correct text, links and images.

**Note:** The current version uses SVG in order to have full control over the icons. If you use another image format you may need to write some additional CSS.
