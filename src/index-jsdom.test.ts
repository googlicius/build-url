/**
 * @jest-environment jsdom
 */

import buildUrl from './index';

describe('Build URL test in browser environment', () => {
  test('Return current browser path (include query, hash)', () => {
    expect(buildUrl()).toEqual('/');
  });

  test('Return url with current browser url', () => {
    const url = buildUrl({
      returnAbsoluteUrl: true,
      queryParams: {
        sort: 'title',
      },
    });

    expect(url).toEqual('http://localhost/?sort=title');
  });

  test('Return url with current browser url from relative path', () => {
    const url = buildUrl('/posts', {
      returnAbsoluteUrl: true,
      queryParams: {
        sort: 'title',
      },
    });

    expect(url).toEqual('http://localhost/posts?sort=title');
  });
});
