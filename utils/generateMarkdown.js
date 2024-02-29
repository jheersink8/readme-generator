const port = require('./licenseObj')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// This references the 2D array from licenseObj.js and returns a license badge
function renderLicenseBadge(license) {
  for (let i = 0; i < port.licenseData.length; i++)
    switch (license) {
      case port.licenseData[i].type:
        return port.licenseData[i].badge;
        break;
    };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// This references the 2D array from licenseObj.js and returns a license url
function renderLicenseLink(license) {
  for (let i = 0; i < port.licenseData.length; i++)
    switch (license) {
      case port.licenseData[i].type:
        return port.licenseData[i].url;
        break;
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// This references the 2D array from licenseObj.js and returns the license 
function renderLicenseSection(license) {
  for (let i = 0; i < port.licenseData.length; i++)
    switch (license) {
      case port.licenseData[i].type:
        return port.licenseData[i].text;
        break;
    };
};

// TODO: Create a function to generate markdown for README
// This function consists of the layout for the readme. 
function generateMarkdown(data) {
  return `# ${data.title} 
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseLink(data.license)}


  ${renderLicenseSection(data.license)}



  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For questions, please reference my GitHub profile at https://github.com/${data.github} or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
