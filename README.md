# Slazy

Slazy for Visual Studio Code is an extension that makes it more natural to maintain your code base.

Slazy creates a browsable index from your project contents such as git commit comments, documentation and code symbols, then allows you to browse and navigate through all the assets related to a keyword from the index. 

**Note : The development is still at an early stage and some features are not fully operational especially on project with lots of commits.**

Slazy should work with any language supported by Visual Studio Code, and has been tested with : Javascript, Typescript, Python and Java.

Benefits :
- quickly identify which file and symbols (variables, functions, classes...) are involved in a feature implementation
- find out quickly how was implemented a feature
- find all available documentation around a feature
- faster issue fixing
- faster onboarding on a new project

## Features

- Automatically Create a sorted index for the most used terms in your code base : commits, symbols, docs
- star important index terms
- View and navigate to symbols associated to terms
- navigate to related commits
- search term from index

![Slazy Demo](images/Slazy-demo.gif)

## Requirements

- The project must be a git repository clone

## Known Issues

- Indexing may take some time on projects with a large number of commits
- Code navigation may not be very accurate on file with a large history
- If commits are not explicit, the index may be messy

## Release Notes

### 0.0.1
- Update marketplace description
- Fix import crash on some projects


