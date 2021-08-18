# Introduction 
This is a csvgen UI frontend in Angular 8.
The aim of this project is to easily import csv file to Iris from a web ui.

# Build 
Run the server

```sh
docker-compose up -d
```

# Install with ZPM

It will automatically install the depencey : csvgen and sslclient

```objectscript
zpm "install csvgen-ui"
```

# UI

The UI is per-namespcae, this mean it will be aviable only for the namespace where csvgen-ui is install.
```
http://localhost:52773/csp/{namespace}/csvgen/index.html
```

## Demo

![Demo](https://raw.githubusercontent.com/grongierisc/iris-csvgen-ui/master/misc/UploadDemo.gif)

## New Feature

Guess It !

![Demo](https://raw.githubusercontent.com/grongierisc/iris-csvgen-ui/master/misc/NewFeatureGuessIt.gif)

# Misc
Visual Studio Directory Structure

```
.
├── frontend
│   ├── e2e
│   │   └── src
│   └── src
│       ├── csvgen
│       ├── assets
│       └── environments
└── src
    └── CSVGEN
        └── API
```
Where front is the angular UI dans src is le backend source code for IRIS.

# TODO 

- [x] Add drag and drop
- [ ] Add Oauth
- [ ] Add navbar
- [x] Finish server side
- [x] ZPM module
- [x] Update readme
- [x] Import from url
- [x] Advence parameter