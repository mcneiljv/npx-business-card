#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';
import minimist from 'minimist';

const options = {
  alias: { json: 'j' }
};

const data = {
  name: chalk.bold.green('             Jamie McNeil'),
  handle: chalk.white('@mcneiljv'),
  work: `${chalk.white('Lead Software Engineer at')} ${chalk
    .hex('#2b82b2')
    .bold('Hoylu')}`,
  github: chalk.gray('https://github.com/') + chalk.green('mcneiljv'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('jamiemcneil'),
  web: chalk.cyan('https://jamievmcneil.io'),
  npx: chalk.red('npx') + ' ' + chalk.white('jamiemcneil'),

  labelWork: chalk.white.bold('       Work:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
};

const box = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      'I’m always open to new opportunities and collaborations.'
    )}`,
    `${chalk.italic('Whether you have an idea, a project, or just want to')}`,
    `${chalk.italic(
      'connect, feel free to reach out – I’d love to hear from you!'
    )}`
  ].join('\n'),
  {
    borderColor: 'magenta',
    borderStyle: 'round',
    float: 'center',
    padding: 2,
    title: 'Hello'
  }
);

const format = ({ json }) => (json ? JSON.stringify(data) : box);

const argv = minimist(process.argv.slice(2), options);

console.log(format(argv));
