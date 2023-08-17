This project has been built using [MaterialUI](https://mui.com/) and [React](https://react.dev/).

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Quick start

Quick start intructions:

- Clone this repository - instruction on how to do that can be found [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
- Once you have cloned the repository to your machine, open it up in your preferred IDE (we recommend [VSCode](https://code.visualstudio.com/)).
- Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
- Navigate to the root ./ directory of the project, run `yarn install` or `npm install` to install the project dependencies.
- Run `npm run build` or `yarn run build` to build the project.
- Run `npm run start` or `yarn run start` to start the webpage and visit `http://localhost:3000/` in your browser to see it up and running.

## Measuring the emissions of the page

You will need to use Chrome as your browser for this task.

- To start measuring the emissions of your page please download our Sustainability Calculator Chrome extension - available [here](https://chrome.google.com/webstore/detail/sustainability-calculator/mdecmmmlfhgjmdhkginjjnpbnlobkhom/related).
- You might find it useful to [pin the chrome extension to your toolbar](https://www.wikihow.com/Pin-Extensions-in-Chrome) while completing this task.
- To measure the emissions associated with a webpage, open Sustainability Calculator Chrome extension and click 'start recording'. You can click 'pause recording' as soon as the page has fully reloaded.
- Please test out the settings within the chrome extension, but only use the generic settings for the purposes of the task. The emissions associated with an average user will be what we are using for this task.

## How to improve the emissions score of your webpage

There are obviously many different ways to make a piece of software more sustainable. The Sustainability Calculator Chrome extension calculates a score by looking at the size of the files that a user is having to download to see a webpage. So if you want to get a better score on your web page, the objective is to make your front end lighter!

You can check out our cheat sheet to get some ideas about how to do that.

You can also test the Chrome extension out on some real web pages:

Low Carbon Websites:

[Sustainable Web Design](https://sustainablewebdesign.org/ )

[Google Homepage](https://www.google.co.uk/)

Higher Carbon Websites:

[Visit Provence](https://www.myprovence.fr/)

[Dromoland Castle](https://www.dromoland.ie/)

The Chrome extension uses the Green Software Foundation's [Software Carbon Intensity Specifications](https://github.com/Green-Software-Foundation/sci/blob/dev/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md) to calculate your score. It is a open source project, you can see the source code [here](https://github.com/Theodo-UK/sustainability-calculator).

### What's included

Within the download you'll find the following directories and files:

```
material-kit-2-react
    ├── public
    │   ├── apple-icon.png
    │   ├── favicon.png
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   │   ├── images
    │   │   ├── theme
    │   │   │   ├── base
    │   │   │   ├── components
    │   │   │   ├── functions
    │   │   └── └── index.js
    │   ├── components
    │   │   ├── MKAlert
    │   │   ├── MKAvatar
    │   │   ├── MKBadge
    │   │   ├── MKBox
    │   │   ├── MKButton
    │   │   ├── MKDatePicker
    │   │   ├── MKInput
    │   │   ├── MKPagination
    │   │   ├── MKrogress
    │   │   ├── MKSocialButton
    │   │   └── MKTypography
    │   ├── examples
    │   │   ├── Breadcrumbs
    │   │   ├── Cards
    │   │   ├── Footer
    │   │   └── Navbars
    │   ├── layouts
    │   │   ├── pages
    │   │   │    └── presentation
    │   │   ├── sections
    │   │   │    ├── attention-catchers
    │   │   │    ├── components
    │   │   │    ├── elements
    │   │   │    ├── input-areas
    │   │   │    ├── navigation
    │   │   └──  └── page-sections
    │   ├── pages
    │   │   └── Presentation
    │   ├── App.js
    │   ├── index.js
    │   ├── footer.routes.js
    │   └── routes.js
    ├── .eslintrc.json
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLATE.md
    ├── jsconfig.json
    ├── package.json
    └── README.md
```

## After the workshop

- Please leave a review for the extension on the Sustainability Calculator Chrome extension on [Chrome Web Store](https://chrome.google.com/webstore/detail/sustainability-calculator/mdecmmmlfhgjmdhkginjjnpbnlobkhom/related)! All reviews will be considered for version 2 of the project, and will make it more likely that the extension is used for more projects in future.

## Thank you to our sponsors

...