export function SignupForm() {
  return (
    <div>
      <form>
        <h1>Sign in</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="firstname">First name</label>
        <input type="text" name="firstname" id="firstname" />

        <label htmlFor="lastname">First name</label>
        <input type="text" name="lastname" id="lastname" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <label htmlFor="password-repeat">Repeat Password</label>
        <input type="password" name="password-repeat" id="password-repeat" />

        <button type="submit">Sign Up</button>
        <button type="reset">Cancel</button>
      </form>
    </div>
  );
}
