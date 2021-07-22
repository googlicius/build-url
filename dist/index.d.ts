export interface UrlOptions {
    queryParams: {
        [x: string]: any;
    };
}
export default function buildUrl(strUrl: string | UrlOptions, options?: UrlOptions): string;
