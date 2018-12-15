# Ky Vue Plugin
Typescript vue ky plugin.

Based on [ky](https://github.com/sindresorhus/ky) package

This plugin simply extend the vue object with ky. It can also create a base instance to use directly from vue.

### Install

```bash
npm install vue-ky-plugin --save
```

### Import in Vue
In your entry set:
```typescript
import Vue from 'vue';
import KyPlugin from './vue-ky-plugin';

Vue.use(KyPlugin);

// or 

import ky from 'ky';

Vue.use(KyPlugin,  ky.extend({prefixUrl: 'https://example.com/api'}))

```
### How to use
In your components just do

```typescript
  // just do
    (async () => {
        await this.$ky('unicorn', {prefixUrl: '/api'});
    })();
```
### How ky works

Check [ky github page](https://github.com/sindresorhus/ky)

## Know Issues


## Other
[andrewdev.eu](https://www.andrewdev.eu)