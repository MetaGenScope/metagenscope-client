function getHost(): string {
    // Use environment variable if present
    const envUrl = process.env.REACT_APP_METAGENSCOPE_SERVICE_URL;
    if (typeof(envUrl) !== 'undefined' && envUrl) {
        return envUrl;
    }

    // Otherwise, use web host
    const protocol = location.protocol;
    const host = window.location.hostname;
    return `${protocol}//${host}`;
}

export const API_BASE_URL = getHost();
