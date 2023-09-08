const mock = process.env.REACT_APP_MOCK;
const userSuffix = mock === 'true' ? '/user' : '';
const apiUrl = mock === 'true'
  // eslint-disable-next-line no-undef
  ? `http://${window.location.host.toString()}/data` : process.env.REACT_APP_API_URL;

export { apiUrl, userSuffix };
