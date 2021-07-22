# BUILD URL

A helper to build url with query params as easy way. Helpful when your application routing or state management based on URL query params.

## Installation

```
npm install build-url
```

Or Yarn:

```
yarn add buil-url
```

## Usage

```javascript
import buildUrl from 'build-url';

buildUrl('http://my-website.com/post', {
  queryParams: {
    page: 2,
  },
});

// Output: http://my-website.com/post?page=2
```
