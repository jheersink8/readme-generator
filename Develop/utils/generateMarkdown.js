let licenseData = [{
  type: 'Apache License 2.0',
  badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  url: 'https://opensource.org/licenses/Apache-2.0',
  text: 'https://raw.githubusercontent.com/licenses/license-templates/master/templates/apache.txt',
},
{
  type: 'GNU General Public License v3.0',
  badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  url: 'https://www.gnu.org/licenses/gpl-3.0',
  text: 'https://www.gnu.org/licenses/gpl-3.0.txt',
},
{
  type: 'MIT License',
  badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  url: 'https://opensource.org/licenses/MIT',
  text: 'https://raw.githubusercontent.com/licenses/license-templates/master/templates/mit.txt',
},
{
  type: 'BSD 2-Clause "Simplified" License',
  badge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
  url: 'https://opensource.org/licenses/BSD-2-Clause',
  text: 'https://raw.githubusercontent.com/licenses/license-templates/master/templates/bsd2.txt',
},
{
  type: 'BSD 3-Clause "New" or "Revised" License',
  badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  url: 'https://opensource.org/licenses/BSD-3-Clause',
  text: 'https://raw.githubusercontent.com/licenses/license-templates/master/templates/bsd3.txt',
},
{
  type: 'Boost Software License 1.0',
  badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  url: 'https://www.boost.org/LICENSE_1_0.txt',
  text: 'https://www.boost.org/LICENSE_1_0.txt',
},
{
  type: 'Creative Commons Zero v1.0 Universal',
  badge: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
  url: 'http://creativecommons.org/publicdomain/zero/1.0/',
  text: 'https://github.com/licenses/license-templates/blob/master/templates/cc0.txt',
},
{
  type: 'Eclipse Public License 2.0',
  badge: '[Badge License]: https://img.shields.io/badge/License-EPL_2.0-2C2255?style=for-the-badge',
  url: 'https://www.eclipse.org/legal/epl-2.0/',
  text: 'https://www.eclipse.org/org/documents/epl-2.0/EPL-2.0.txt',
},
{
  type: 'GNU Affero General Public License v3.0',
  badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
  url: 'https://www.gnu.org/licenses/agpl-3.0',
  text: 'https://www.gnu.org/licenses/agpl-3.0.txt',
},
{
  type: 'GNU General Public License v2.0',
  badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
  url: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
  text: 'https://raw.githubusercontent.com/licenses/license-templates/master/templates/gpl2.txt',
},
{
  type: 'Mozilla Public License 2.0',
  badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  url: 'https://opensource.org/licenses/MPL-2.0',
  text: 'https://raw.githubusercontent.com/licenses/license-templates/master/templates/mpl.txt',
},
{
  type: 'The Unlicense ',
  badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  url: 'http://unlicense.org/',
  text: 'https://github.com/licenses/license-templates/blob/master/templates/unlicense.txt',
},
{
  type: 'Not Applicable',
  badge: ' ',
  url: ' ',
  text: ' ',
}];


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'BSD 2-Clause "Simplified" License':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Eclipse Public License 2.0':
      return '[Badge License]: https://img.shields.io/badge/License-EPL_2.0-2C2255?style=for-the-badge';
      break;
    case 'GNU Affero General Public License v3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU General Public License v2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    case 'Not Applicable':
      return ' ';
      break;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GNU General Public License v3.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'BSD 2-Clause "Simplified" License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      return 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Eclipse Public License 2.0':
      return 'https://www.eclipse.org/legal/epl-2.0/';
      break;
    case 'GNU Affero General Public License v3.0':
      return 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU General Public License v2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      return 'http://unlicense.org/';
      break;
    case 'Not Applicable':
      return ' ';
      break;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache License 2.0':
      return fetch('https://www.apache.org/licenses/LICENSE-2.0.txt')
        .then(response => response.text())
        .then(data => {
          return data;
        })
      break;
  };
};

// TODO: Create a function to generate markdown for README
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
