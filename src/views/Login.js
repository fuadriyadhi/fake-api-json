export default function Login() {
  return `
  <div class="container auth_page">
  <h1>Login</h1>
  <form id="login_form" class="auth_form" autocomplete="off">
    <div class="form_group">
      <label for="email">Email</label>
      <input type="email" id="email" required />
    </div>
    <div class="form_group">
      <label for="password">Password</label>
      <input type="password" id="password" required />
    </div>
    <button type="submit">Login</button>
    <small>
     Belum Punya Akun? <a href="/">Register Disini</a>
    </small>
  </form>
  </div>
  `;
}
