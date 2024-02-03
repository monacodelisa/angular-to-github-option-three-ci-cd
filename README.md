# Angular v17 CI/CD Deployment to GitHub Pages using Github Actions

## From my YouTube video 

This is just a basic app that only contains relevant files to set up this type of deployment - nothing else.

OPTION 3 
- pros 
  - automated deployment
  - all within one repo
- cons 
  - all of the code remains public
  - more involving setup, creating an additional branch, adding github actions, GH_TOKEN


### Step 1: 
- create a git repo, create a local folder for the repo, init (github commands)

### Step 2: 
- create a your Angular v17 app & push to `main` branch 

### Step 3:
- add the build script command in `package.json`

`"build:prod": "ng build --configuration=production --base-href=/<repoName>/"`

-adjust `oututPath` in `angular.json` (dist)

### Step 4:
- setup a GH_TOKEN to use later (classic)

### Step 5:
- create a `main.yaml` file in `.github/workflows/main.yaml`\
- copy the contents from the one here and adjust to match your project

*using prebuilt github actions by James Ives [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

### Step 6:
- create and push branch 'prod'

### Step 7: 
- setup github pages to use the 'prod' branch


