import { makeBadge } from 'badge-maker';

//pairing license to links
const licenseLinks = {
  'GNU Affero General 3.0': 'https://choosealicense.com/licenses/agpl-3.0/',
  'GNU General 3.0': 'https://choosealicense.com/licenses/gpl-3.0/',
  'GNU Lesser General 3.0': 'https://choosealicense.com/licenses/lgpl-3.0/',
  'Mozilla 2.0': 'https://choosealicense.com/licenses/mpl-2.0/',
  'Apache 2.0': 'https://choosealicense.com/licenses/apache-2.0/',
  'MIT': 'https://choosealicense.com/licenses/mit/',
  'Boost Software 1.0': 'https://choosealicense.com/licenses/bsl-1.0/',
  'The Unlicense': 'https://choosealicense.com/licenses/unlicense/',
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    //data needed to make license badge
    const format = {
      label: 'LICENSE',
      message: license,
      color: 'blue',
    };

    return `${makeBadge(format)}`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `## License
\n[${license} license](${licenseLinks[license]})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Tests
${data.test}

${renderLicenseSection(data.license)}

## Questions
If there are any questions or concerns, please reach out at:
\nGithub: https://github.com/${data.username}
\nEmail: ${data.email}
`;
}

export default generateMarkdown;
