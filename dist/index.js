"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildUrl(inputUrl, options) {
    let url;
    let isValidInputUrl = false;
    try {
        url = new URL(inputUrl);
    }
    catch (error) {
        isValidInputUrl = true;
        if (typeof inputUrl === 'string') {
            const host = typeof window === 'undefined'
                ? 'http://example.com'
                : window.location.origin;
            url = new URL(`${host}/${inputUrl.replace(/^\/|\/$/g, '')}`);
        }
        else {
            url =
                typeof window === 'undefined'
                    ? new URL('http://example.com')
                    : new URL(window.location.href);
        }
    }
    const _options = typeof inputUrl === 'string' ? options : inputUrl;
    if (_options === null || _options === void 0 ? void 0 : _options.queryParams) {
        for (const key in _options.queryParams) {
            if (Object.prototype.hasOwnProperty.call(_options.queryParams, key)) {
                const element = _options.queryParams[key];
                if (!element) {
                    url.searchParams.delete(key);
                }
                else {
                    url.searchParams.set(key, element);
                }
            }
        }
    }
    if (_options === null || _options === void 0 ? void 0 : _options.path) {
        url.pathname = _options.path;
    }
    if ((_options === null || _options === void 0 ? void 0 : _options.path) === null) {
        url.pathname = '';
    }
    if (_options === null || _options === void 0 ? void 0 : _options.hash) {
        url.hash = _options.hash;
    }
    if (isValidInputUrl && !(_options === null || _options === void 0 ? void 0 : _options.returnAbsoluteUrl)) {
        return url.pathname + url.search + url.hash;
    }
    return url.toString();
}
exports.default = buildUrl;
