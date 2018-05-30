# inject-prefetch

Dynamically inject prefetch tags into the page header.  

If the tag for the resource already exists, this will _not_ create a duplicate tag.  

#### Useage

```js
var prefetch = require('inject-prefetch');

prefetch('http://....');

```

or

```js
var assetsToPrefetch = [url1, url2, url3, url4];

prefetch(assetsToPrefetch);
```