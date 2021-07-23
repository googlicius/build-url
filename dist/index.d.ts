export interface UrlOptions {
    queryParams?: {
        [x: string]: any;
    };
    hash?: string;
    path?: string;
    returnAbsoluteUrl?: boolean;
}
export default function buildUrl(inputUrl: string | UrlOptions, options?: UrlOptions): string;
