# Slazy

Slazy for Visual Studio Code is an extension that makes it more natural to maintain your code base.

Slazy create browsable index from the knowledge contained in your project such as git commit comments, documentation and code symbols, and allows you to browse and navigate through all the assets related to a keyword from the index. Slazy should work with any language supported by Visual Studio Code, and has been tested with : Javascript, Typescript, Python and Java.

Benefits :
- quickly identify which file and symbols (variables, functions, classes...) are involved in a feature implementation
- find out quickly how was implemented a feature
- find all available documentation around a feature
- faster issue fixing
- faster onboarding on a new project

**Note : The development is still at an early stage and some features are not fully operational especially on project with lots of commits.**

## Features

- Create a sorted index for the most used terms in your code base : commits, symbols, docs
- View and navigate to symbols associated to terms
- navigate to related commits
- star important terms
- search term from index

![Slazy Demo](images/Slazy-demo.gif)

## Requirements

- The project must be a git repository clone

## Known Issues

- Indexing may take some time on projects with a large number of commits
- Code navigation may not be very accurate on file with a large history
- If commits are not explicit, the index will be unusable

## Release Notes

### 0.0.2
- Update marketplace description
- Fix import crash on some projects


