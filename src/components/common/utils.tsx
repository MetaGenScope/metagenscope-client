function getHost(): string {
  // Use environment variable if present
  const envUrl = process.env.REACT_APP_METAGENSCOPE_SERVICE_URL;
  if (typeof(envUrl) !== 'undefined' && envUrl) {
      return envUrl;
  }

  // Otherwise, use web host
  const protocol = window.location.protocol;
  const host = window.location.hostname;
  return `${protocol}//${host}`;
}

export const API_BASE_URL = `${getHost()}/api/v1`;

/// String.capitalize()
declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function(this: string) {
  return this.replace( /(^|\s)([a-z])/g , function(m: string, p1: string, p2: string) {
    return p1 + p2.toUpperCase();
  });
};
