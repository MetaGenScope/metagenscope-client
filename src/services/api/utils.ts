import { default as axios, AxiosRequestConfig, CancelTokenSource } from 'axios';

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

// tslint:disable-next-line no-any
export type CancelableAxiosResult<T> = {promise: Promise<T>, source: CancelTokenSource};
// tslint:disable-next-line no-any
export type Transformation<TResult> = ((value: any) => TResult | PromiseLike<TResult>) | undefined | null;

/**
 * Similar to `makeCancelable` but uses axios' implementation:
 * https://github.com/axios/axios#cancellation
 * @param options axios request options
 */
export const cancelableAxios = <T = any>(options: AxiosRequestConfig,  // tslint:disable-line no-any
                                         transformation: Transformation<T> = res => res,
                                         source?: CancelTokenSource): CancelableAxiosResult<T> => {
  source = (source !== undefined) ? source : axios.CancelToken.source();
  options.cancelToken = source.token;
  return {
    promise: axios(options).then(transformation),
    source,
  };
};

export type CancelablePromise<T> = {promise: Promise<T>, cancel(): void};

/**
 * Wrap a promise to allow it to be cancelled (as this is not part of Promises by default)
 *
 * The primary use case for this is network calls in componentDidMount that may not complete
 * before the component is unmounted.
 *
 * Source: https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 *
 * @param promise The promise to wrap
 */
export const makeCancelable = <T>(promise: Promise<T>): CancelablePromise<T> => {
  let _hasCanceled = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      val => _hasCanceled ? reject({isCanceled: true}) : resolve(val),
      error => _hasCanceled ? reject({isCanceled: true}) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      _hasCanceled = true;
    },
  };
};
