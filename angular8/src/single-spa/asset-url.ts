function assetUrl(url: string): string {
    // @ts-ignore
    const publicPath = __webpack_public_path__;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
    const urlPrefix = url.startsWith('/') ? '' : '/';
    return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
}
function loadPage(url: string): string {
    // @ts-ignore
    const publicPath = __webpack_public_path__;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
    const urlPrefix = url.startsWith('/') ? '' : '/';
    return `${publicPath}${url}`;
}

export { assetUrl, loadPage };
