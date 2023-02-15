# 100 - Import from GitHub

You can run any public GitHub repository on StackBlitz by adding the username and repo name to the URL like so:

stackblitz.com/github/{GH_USERNAME}/{REPO_NAME}

For example, opening up the repository you are currently reading: https://stackblitz.com/github/vanHeemstraSystems/stackblitz

**WARNING**: StackBlitz expects at least a ```package.json``` to be in the root of the repository you are visiting. Should you not have a package.json file in the root of your repository, create one with ```npm init``` before opening the repository with stackblitz.

An example package.json file looks like this:

```
{
  "name": "stackblitz",
  "version": "1.0.0",
  "description": "An example application",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "me",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vanHeemstraSystems/stackblitz.git"
  },
  "bugs": {
    "url": "https://github.com/vanHeemstraSystems/stackblitz/issues"
  },
  "homepage": "https://github.com/vanHeemstraSystems/stackblitz#readme",
  "keywords": [
    "stackblitz"
  ]
}
```
package.json

If you want, you can also specify a branch, tag, or commit:

```
.../github/{GH_USERNAME}/{REPO_NAME}/tree/{TAG|BRANCH|COMMIT}
```

Whenever you push commits to GitHub, the corresponding StackBlitz project automatically updates with the latest changes ensuring that the code in your GitHub repository remains the source of truth.

**Note**: While you can import from GitHub any projects with a ```package.json```, the unsupported technologies will not run. This includes backend languages not supported by Node.js (like PHP, Python, or Java), databases like MySQL and PostgreSQL that require a binary server process, and some specific npm packages which are not fully compatible with WebContainers yet.

## Defining a launch command

Oftentimes, the first thing you do when opening a project is to launch a command, for instance, to run a development server.

Usually, these kinds of commands exist in the scripts section of your project's package.json file and you would manually type ```npm run dev``` to execute them.

Using StackBlitz, you can provide an npm script to run automatically when the editor opens with the startScript query parameter:

```
stackblitz.com/fork/github/{gh_username}/{repo_name}?startScript={npm_script_name}
```

**Example**: The following URL will open the vitesse repository of the antfu user, install the npm dependencies, and run npm run dev command in the terminal:

stackblitz.com/github/antfu/vitesse?startScript=dev

Click on it and see the effect yourself!

