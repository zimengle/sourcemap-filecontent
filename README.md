# sourcemap-filecontent

write file from sourcemap

## quickstart


### install

#### commander

```bash
npm install sourcemap-filecontent -g
```

#### node_module

```bash
npm install sourcemap-filecontent --save
```


### useage

#### commander

* write filecontent from sourcemap
```bash
sourcemap-filecontent <sourcemapFile> <output>
```

* convert base64 to sourcemap

```bash
sourcemap-filecontent <base64File> <sourcemapFile>
```

#### node

* write filecontent from sourcemap

```javascript
require('sourcemap-filecontent').outputFileContent(sourcemapFile,output);
```

* convert base64 to sourcemap

```javascript
require('sourcemap-filecontent').convertBase64(sourcemapFile,output);
```

