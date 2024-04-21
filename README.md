
# Open Web Portfolio

This project is a digital portfolio inspired by the aesthetics of old newspapers. Feel free to fork it and use it as your personal portfolio. Your contribution is also welcomed freely.

## Demo
Check out a demo on this page: https://arimakey.github.io/portfolio/

## Installation

Para instalar las dependencias necesarias usar:
To install dependencies, use:
```bash
    npm install
```
    
To run the development server, use:
```bash
    npm run dev
```

## Deployment

This project is set up for deployment on GitHub. Please review the `deploy.yml` file for more information. If you intend to deploy it on GitHub, make sure to edit the `site` and `base` parameters in `astro.config.mjs` as follows:

```javascript
  export default defineConfig({
    site: 'https://<USERNAME>.github.io',
    base: 'my-repo',
  })
```
Ensure that images and hrefs contain `/<base>/` before the file path.

Do not set a base parameter if:
- Your page is served from the root folder.
- Your repository is located at `https://github.com/<USERNAME>/<USERNAME>.github.io`


For further details, refer to https://docs.astro.build/en/guides/deploy/github/.
## Screenshots

![portfolio](https://raw.githubusercontent.com/ArimaKey/portfolio/main/public/full_page.jpg)

## Project Structure

```text
├── public/
│   └── resources/images
├── src/
│   └── components/
│   │   ├── index/
│   │   └── layout/
│   ├── content/
│   │   ├── blog/
│   │   └── projects/
│   ├── data/
│   ├── i18n/
│   ├── icons/
│   ├── layouts/
│   ├── styles/
│   └── pages/
│       ├── en/
│       └── es/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```
