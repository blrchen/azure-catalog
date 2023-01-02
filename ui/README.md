# Cloud Infrastructure UI

## Live Demo

<https://polite-rock-0e822581e.2.azurestaticapps.net>

## Development Getting Started

### Prerequisites

1. Install latest [Node](https://nodejs.org/en/) v16.x. Run `node --version` to verify installed Node versions.
2. Recommended for Visual Studio Code users: install following two extensions to enable auto code linting and formatting support.
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Build and run locally

Open terminal, go to root of this repository and run following commands.

   ```bash
   cd ui
   npm install
   npm start
   ```

This should launch [http://localhost:3000](http://localhost:3000) on your web browser. The page will reload when you make code changes and save.

### Code Linting & Formatting

#### Linting

If ESLint plugin is installed, vscode will pick up configuration from [.eslintrc](.eslintrc) and automatically lint the code on save. To lint code for entire code base, simply run:

   ```bash
   npm run lint-eslint
   ```

#### Formatting with Prettier

To format code for entire code base, simply run:

   ```bash
   npm run format
   ```
