function getHost(): string {
  // Use environment variable if present
  const envUrl = process.env.REACT_APP_METAGENSCOPE_SERVICE_URL;
  if (typeof(envUrl) !== 'undefined' && envUrl) {
    return envUrl;
  }

  // Otherwise, use web host
  const protocol = window.location.protocol;
  const host = window.location.hostname;
  let port = window.location.port;
  port = port === '' ? '' : `:${port}`;
  return `${protocol}//${host}${port}`;
}

export const API_BASE_URL = `${getHost()}/api/v1`;

/// String.capitalize()
declare global {
  interface String {
    capitalize(): string;
  }
}

if (!String.prototype.capitalize) {
  String.prototype.capitalize = function(this: string) {
    return this.replace( /(^|\s)([a-z])/g , function(m: string, p1: string, p2: string) {
      return p1 + p2.toUpperCase();
    });
  };
}

/// Array<T>.shuffle()
declare global {
  interface Array<T> {
    shuffled(): Array<T>;
  }
}

if (!Array.prototype.shuffled) {
  Array.prototype.shuffled = function<T>(): Array<T> {
    let counter = this.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = this[counter];
      this[counter] = this[index];
      this[index] = temp;
    }

    return this;
  };
}
