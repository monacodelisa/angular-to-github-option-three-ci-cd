# [Angular v17 Deploy To GitHub Pages using GitHub Actions CI/CD (automated)](https://www.youtube.com/watch?v=SMuB3qYjDUw)
## The link above will lead you to my video tutorial on YouTube

This is just a basic app that only contains relevant files to set up this type of deployment - nothing else.

OPTION 3 
- PROs 
  - automated deployments CI/CD
  - using a single github repo
- CONs 
  - the code is public when using GitHub free
  - more involving setup, creating an additional branch, adding github actions, GH_TOKEN


### Step 1: 
- create a git repo, create a local folder for the repo, init (github commands)

### Step 2: 
- create a your Angular (v17) app & push to `main` branch 

### Step 3:
- add the build script command in `package.json`

`"build:prod": "ng build --configuration=production --base-href=/<repoName>/"`

### Step 4:
- adjust `oututPath` in `angular.json` (dist)

### Step 5:
- setup a personal acces token GH_TOKEN to use later (classic)

### Step 6:
- create a `main.yaml` file in `.github/workflows/main.yaml` at root level
- refer to this project for placement and contents (adjust to match your project)

*using prebuilt github actions by James Ives [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

### Step 7:
- create a new branch only for the contents of the `dist` folder
- erase everything apart fom the `dist` folder from that second branch and push the changes (I named my branch 'prod')
- verify that your 'main' branch contains your entire app, while the second branch only has the contents of the `dist` folder

### Step 8: 
- go back to the 'main' branch and push -> this should trigger the workflow from the `main.yaml` file

### Step 9: 
- setup github pages to use the second branch, the one that has only the contents of the `dist` folder


