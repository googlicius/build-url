import buildUrl from './index';

describe('Build Url test', () => {
  test('Add a query param', () => {
    const url = buildUrl('http://my-website.com/post', {
      queryParams: {
        page: 2,
      },
    });

    expect(url).toEqual('http://my-website.com/post?page=2');
  });

  test('Add another query param', () => {
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

  test('Add hash', () => {
    const url = buildUrl('/posts', {
      hash: 'my-hash',
    });

    expect(url).toEqual('/posts#my-hash');
  });

  test('Replace hash', () => {
    const url = buildUrl('/posts?page=2#first-hash', {
      hash: '#second-hash',
    });

    expect(url).toEqual('/posts?page=2#second-hash');
  });

  test('Add path', () => {
    const url = buildUrl({ path: 'posts' });
    const url2 = buildUrl({ path: '/posts' });
    const url3 = buildUrl('http://my-website.com', {
      path: 'posts',
    });

    expect(url).toEqual('/posts');
    expect(url2).toEqual('/posts');
    expect(url3).toEqual('http://my-website.com/posts');
  });

  test('Replace path', () => {
    const url = buildUrl('posts?page=2', {
      path: 'stories',
    });
    const url2 = buildUrl('http://my-website.com/posts?page=2', {
      path: 'stories',
    });

    expect(url).toEqual('/stories?page=2');
    expect(url2).toEqual('http://my-website.com/stories?page=2');
  });

  test('Delete path', () => {
    const url = buildUrl('posts?page=2', {
      path: null,
    });
    const url2 = buildUrl('http://my-website.com/posts?page=2', {
      path: null,
    });

    expect(url).toEqual('/?page=2');
    expect(url2).toEqual('http://my-website.com/?page=2');
  });
});
