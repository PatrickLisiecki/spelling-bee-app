<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/PatrickLisiecki/spelling-bee-app">
    <img src="frontend/public/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Spelling Bee App</h3>
  <p align="center">
    A multilingual study assistant for expanding vocabulary with randomly generated games.
    <br />
    <br />
    <a href="https://github.com/PatrickLisiecki/spelling-bee-app">View Demo</a>
    ·
    <a href="https://github.com/reo113/spelling_bee_app/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/reo113/spelling_bee_app/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Spelling Bee App][project-screenshot]](https://github.com/user-attachments/assets/1d7b3158-09ef-4c20-9f43-3a60d1e0ead5)

### Built With

[![React][React.js]][React-url]
[![Tailwind][Tailwind]][Tailwind-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![ReactRouter][ReactRouter]][ReactRouter-url]
[![Node][Node.js]][Node-url]
[![Express][Express.js]][Express-url]
[![SQLite][SQLite]][SQLite-url]
[![Prisma][Prisma]][Prisma-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. **Node.js**
   - Ensure that Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. **npm or yarn**
   - A package manager such as `npm` (comes with Node.js) or `yarn` is required for installing dependencies.
   - Verify installation:
     ```bash
     node -v   # Check Node.js version
     npm -v    # Check npm version
     yarn -v   # If using Yarn, check its version
     ```

3. **SQLite**
   - SQLite should be installed or be accessible on your system. You can download it from [sqlite.org](https://www.sqlite.org/download.html).
   - Verify installation:
     ```bash
     sqlite3 --version
     ```

4. **Git**
   - To clone the repository, Git should be installed. Download it from [git-scm.com](https://git-scm.com/).
   - Verify installation:
     ```bash
     git --version
     ```

5. **Browser**
   - A modern web browser (e.g., Chrome, Firefox) for running the React app.

### Installation

1. Get a free API Key at [developer.wordnik.com](https://developer.wordnik.com/).
2. Clone the repo:
   ```sh
   git clone https://github.com/PatrickLisiecki/spelling-bee-app.git
   ```
3. Set up the backend:
   - Navigate to the `backend` folder:
     ```sh
     cd backend
     ```
   - Install backend dependencies:
     ```sh
     npm install
     ```
   - Create a `.env` file in the `backend` folder with the following content:
     ```sh
     SESSION_SECRET="RANDOM STRING"
     API_KEY="YOUR WORDNIK API KEY"
     PORT="OPTIONAL PORT NUMBER"
     ```
   - Run database setup and seed the database:
     - Run Prisma migrations to set up the database tables:
       ```sh
       npx prisma migrate dev --name init
       ```
       - This will create the necessary tables in the SQLite database based on the Prisma schema file (schema.prisma).
     - Run the populateDatabase.js script to seed the database:
       ```sh
       node src/scripts/populateDatabase.js
       ```
   - Start the backend server:
     ```sh
     npm run dev
     ```
4. Set up the frontend:
   - Open a new terminal and navigate to the `frontend` folder:
     ```sh
     cd ../frontend
     ```
   - Install frontend dependencies:
     ```sh
     npm install
     ```
   - Start the React development server:
     ```sh
     npm run dev
     ```
   - The React app should now be running on `http://localhost:5173`.
5. Change git remote url to avoid accidental pushes to base project:
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Examples of using the app.

### Changing the Language
[![Spelling Bee App][language-screenshot]](https://github.com/user-attachments/assets/331c8a3e-9845-438c-9e10-51d866f1e96d)

### Authentication
[![Spelling Bee App][auth-screenshot]](https://github.com/user-attachments/assets/2823adb0-11e7-4a25-a4c0-20f25e1e60a2)

### Playing a Game
[![Spelling Bee App][game-video]](https://github.com/user-attachments/assets/de857b3d-9aa8-455f-b9ed-4e550d317b58)

### Viewing Game History
[![Spelling Bee App][history-video]](https://github.com/user-attachments/assets/313c612e-54ef-46e6-b874-b314bc950d7c)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] Session based user authentication
- [X] Language switcher with translations for English and Spanish
- [X] 3 uniquely generated games
    - [X] Choose the correct word that matches the definition
    - [X] Spell out a word by listening to an audio sample
    - [X] Choose the correct word that completes the given sentence
- [X] Game history allows users to view previously completed games and review incorrect answers
- [ ] Add support for more languages
- [ ] Clean data for better quality questions
- [ ] Incorporate text-to-speech API for audio games

See the [open issues](https://github.com/reo113/spelling_bee_app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing-feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Patrick Lisiecki](https://github.com/PatrickLisiecki)
* [Robert Ortiz](https://github.com/reo113)
* [Nicolas Talledo](https://github.com/NickTalledo)



<!-- MARKDOWN LINKS & IMAGES -->
[project-screenshot]: https://github.com/user-attachments/assets/1d7b3158-09ef-4c20-9f43-3a60d1e0ead5
[language-screenshot]: https://github.com/user-attachments/assets/331c8a3e-9845-438c-9e10-51d866f1e96d
[auth-screenshot]: https://github.com/user-attachments/assets/2823adb0-11e7-4a25-a4c0-20f25e1e60a2
[game-video]: https://github.com/user-attachments/assets/de857b3d-9aa8-455f-b9ed-4e550d317b58
[history-video]: https://github.com/user-attachments/assets/313c612e-54ef-46e6-b874-b314bc950d7c
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Node.js]: https://img.shields.io/badge/Node-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[ReactRouter]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main
[SQLite]: https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white
[SQLite-url]: https://www.sqlite.org/
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
