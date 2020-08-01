const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8000'
  : 'link';

export default { URL };
