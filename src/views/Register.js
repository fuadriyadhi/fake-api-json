import axios from 'axios';

//function untuk stor data ke backend
window.handleRegister = function (event) {
  //stop reload
  event.preventDefault();

  let email = event.target.email.value;
  let password = event.target.password.value;
  let password2 = event.target.password.value;

  axios
    .post('https://vitejs-vite-v7vcde--3000.local.webcontainer.io/register', {
      email: email,
      password: password,
      password2: password2,
    })
    .then((res) => {
      console.info(res);
      alert('Registrasi Berhasil');
      window.location.href = '/login';
    })
    .catch((err) => {
      console.info(err.response.data);
      alert(err.response.data);
    });

  //reset
  event.target.email.value = '';
  event.target.password.value = '';
  event.target.password2.value = '';
};

export default function Register() {
  return `
  <div class="container auth_page" >
  <h1>Register</h1>
  <form id="register_form" class="auth_form" autocomplete="off" onsubmit="handleRegister(event)">
    <div class="form_group">
      <label for="email">Email</label>
      <input type="email" id="email" required />
    </div>
    <div class="form_group">
      <label for="password">Password</label>
      <input type="password" id="password" required />
    </div>
    <div class="form_group">
      <label for="password2">Repeat Password</label>
      <input type="password" id="password2" required />
    </div>
    <button type="submit">Register</button>
    <small>
     Sudah Punya Akun? <a href="/login">Login Disini</a>
    </small>
  </form>
  </div>
  `;
}
