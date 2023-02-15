# 100 - Import from GitHub

You can run any public GitHub repository on StackBlitz by adding the username and repo name to the URL like so:

stackblitz.com/github/{GH_USERNAME}/{REPO_NAME}

For example, opening up the repository you are currently reading: https://stackblitz.com/github/vanHeemstraSystems/stackblitz

**WARNING**: StackBlitz expects at least a ```package.json``` to be in the root of the repository you are visiting. Should you not have a package.json file in the root of your repository, create one with ```npm init``` before opening the repository with stackblitz.

An example package.json file looks like this:

```
{
  "name": "my-server",
  "version": "1.0.0",
  "description": "An express application",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jon Church",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/osiolabs/heynode.git"
  },
  "bugs": {
    "url": "https://github.com/osiolabs/heynode/issues"
  },
  "homepage": "https://github.com/osiolabs/heynode#readme",
  "keywords": [
    "express",
    "server"
  ]
}
```
package.json
