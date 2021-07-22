import buildUrl from './index';

describe('Build Url test', () => {
  test('Page is 2', () => {
    const url = buildUrl('http://my-website.com/post', {
      queryParams: {
        page: 2,
      },
    });

    expect(url).toEqual('http://my-website.com/post?page=2');
  });

  test('Page and sort ', () => {
    const url = buildUrl('http://my-website.com/post?page=2', {
      queryParams: {
        sort: 'title:asc',
      },
    });

    expect(url).toEqual('http://my-website.com/post?page=2&sort=title%3Aasc');
  });

  test('Url is omitted', () => {
    const url = buildUrl({
      queryParams: {
        page: 2,
        sort: 'title:desc',
      },
    });

    expect(url).toEqual('/?page=2&sort=title%3Adesc');
  });

  test('Url is relative path', () => {
    const url = buildUrl('images', {
      queryParams: {
        page: 3,
        sort: 'title:desc',
      },
    });

    expect(url).toEqual('/images?page=3&sort=title%3Adesc');
  });

  test('Changes value of an existing query param', () => {
    const url = buildUrl('images?page=2', {
      queryParams: {
        page: 3,
        sort: 'title:desc',
      },
    });

    expect(url).toEqual('/images?page=3&sort=title%3Adesc');
  });

  test('Delete existing query param', () => {
    const url = buildUrl('images?page=2&sort=title:asc', {
      queryParams: {
        page: null,
      },
    });

    expect(url).toEqual('/images?sort=title%3Aasc');
  });
});
