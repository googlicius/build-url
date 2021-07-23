# Build URL

A helper to build url with query params as easy way. Helpful when your application routing or state management based on URL query params.

## Installation

```
npm install @googlicius/build-url
```

Or Yarn:

```
yarn add @googlicius/buil-url
```

## Usage

```javascript
import buildUrl from '@googlicius/build-url';

buildUrl('http://my-website.com/post', {
  queryParams: {
    page: 2,
  },
});

// Output: http://my-website.com/post?page=2
```

Add another query param

```javascript
buildUrl('http://my-website.com/post?page=2', {
  queryParams: {
    sort: 'title:asc',
  },
});

// Output: http://my-website.com/post?page=2&sort=title%3Aasc
```

Input url/path is omitted

```javascript
buildUrl({
  queryParams: {
    sort: 'title:asc',
  },
});

// Output: /?sort=title%3Aasc
```

Remove a query param

```javascript
buildUrl('images?page=2&sort=title:asc', {
  queryParams: {
    page: null,
  },
});

// Output: /images?sort=title%3Aasc
```

Always returns absolute url

```javascript
// Assume that current url is: http://awesome-website.com

buildUrl('/posts', {
  returnAbsoluteUrl: true,
  queryParams: {
    page: 2,
  },
});

// Output: http://awesome-website.com/posts?page=2
```

## License
MIT
