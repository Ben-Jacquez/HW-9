// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License](https://img.shields.io/badge/License-MIT-blue)`
  } 
  else if (license === "GPLv3") {
    return `![License](https://img.shields.io/badge/License-GPLv3-blue)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/license/mit/`
  }
  else if (license === "GPLv3") {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This Project Is Under The [MIT License](https://opensource.org/license/mit/)`
  }
  else if (license === "GPLv3") {
    return `This Project Is Under The [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)` 
  }
  else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}
  
## Deployed Website
[Deployed Version Here]()
![Website Screenshot]()
  
## Table of Contents
- [Description](#description)
- [Deployed Website](#deployed-website)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
  
## Installation 
${data.installation}

## Usage
${data.usage}  
  
## Contribute
${data.contributing}
  
## Tests
${data.tests}

## Questions
If You Have Any Questions You Can Reach Me On [Github](https://github.com/${data.github}) Or Email Me: ${data.email}

## License
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
