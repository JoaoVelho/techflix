const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8000'
  : 'https://techflix-server.herokuapp.com';

export default { URL };
