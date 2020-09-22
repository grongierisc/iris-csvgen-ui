# TODO 

- [x] Add drag and drop
- [ ] Add Oauth
- [ ] Add navbar
- [x] Finish server side
- [x] ZPM module
- [x] Update readme
- [x] Import from url
- [ ] Advence parameter

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

![Demo](/misc/UploadDemo.gif)


# Misc
Visual Studio Directory Structure

```
.
├── front
│   ├── e2e
│   │   └── src
│   └── src
│       ├── app
│       │   └── file-upload
│       ├── assets
│       └── environments
└── src
    └── CSVGEN
        └── API
```
Where front is the angular UI dans src is le backend source code for IRIS.

