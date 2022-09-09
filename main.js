import Page404 from './src/views/404';
import Login from './src/views/Login';
import Register from './src/views/Register';
import './style.css';

const app = document.getElementById('app');
const page = document.location.pathname;

switch (page) {
  case '/':
    app.innerHTML = Register();
    break;

  case '/login':
    app.innerHTML = Login();
    break;

  case '/dashboard':
    app.innerHTML = `
    <div>Dashboard</div>
    `;
    break;

  default:
    app.innerHTML = Page404();
}
