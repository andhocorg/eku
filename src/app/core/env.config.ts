
const _isDev = window.location.port.indexOf('8083') > -1;

export var ENV = {
  BASE_URI: ``,
  BASE_API: ``
}

if (_isDev) {
  ENV = {
    BASE_URI: `http://localhost:8083`,
    BASE_API: `http://localhost:3000/api/`
  };
} else {
  ENV = {
    BASE_URI: `http://64.225.95.44`,
    BASE_API: `http://64.225.95.44:3000/api/`
  };
}












// src/app/core/env.config.ts
/*
const getHost = () => {
  const protocol = window.location.protocol;
  const host = window.location.host;
  return `${protocol}//${host}`;
};
const apiURI = _isDev ? 'http://localhost:8083/api/' : `/api/`;

export const ENV = {
  BASE_URI: getHost(),
  BASE_API: apiURI
};

*/
