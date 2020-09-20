# TODO 

- [ ] Add drag and drop
- [ ] Add Oauth
- [ ] Add navbar
- [ ] Finish server side
- [ ] ZPM module
- [ ] Update readme

# Introduction 
This is a csvgen UI frontend in Angular 8.
The aim of this project is to easily import csv file to Iris from a web ui.

# Build 
Run the server

```sh
docker-compose up -d
```

# UI
```
http://localhost:52773/csp/healthshare/{tenant}/{endpoint}/ui/index.html
```

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

 ## Test this module
 
 Natively from depot :
 
 ```objectscript
 do ##class(%UnitTest.Manager).DebugRunTestCase("","Test.Grongier.JSON.Utils",,)
 ```

