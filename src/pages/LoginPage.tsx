import { withPermission } from '../withPermission';
import { Link } from 'react-router';

const LoginPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>Login Page</h1>
      <Link
        to="/"
        onClick={() => {
          console.log('Login as user');
        }}
      >
        Login USER
      </Link>{' '}
      <Link
        to="/"
        onClick={() => {
          console.log('Login as staff');
        }}
      >
        Login STAFF
      </Link>
      <Link
        to="/"
        onClick={() => {
          console.log('Login as admin');
        }}
      >
        Login ADMIN
      </Link>{' '}
    </div>
  );
};

export default withPermission(LoginPage, {
  fallback: '/',
});
