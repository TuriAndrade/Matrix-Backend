export default function buildUser({
  usernameRegexTest,
  nameRegexTest,
  emailRegexTest,
}) {
  function checkUsername(username) {
    if (!usernameRegexTest(username))
      throw new Error('User must have a valid username.');
    else if (username.length < 4)
      throw new Error('User must have a username with at least 4 characters.');
    else if (username.length > 16)
      throw new Error('User must have a username with at most 16 characters.');
  }

  function checkPassword(password) {
    if (password.length < 8)
      throw new Error('User must have a password with at least 8 characters.');
  }

  function checkName(name) {
    if (!nameRegexTest(name)) throw new Error('User must have a valid name.');
    else if (name.length > 100)
      throw new Error('User must have a name with at most 100 characters.');
  }

  function checkEmail(email) {
    if (!emailRegexTest(email))
      throw new Error('User must have a valid email.');
  }

  function createUser({ username, password, name, email, picture }) {
    if (!username) throw new Error('User must have a username.');
    if (!password) throw new Error('User must have a password.');
    if (!name) throw new Error('User must have a name.');
    if (!email) throw new Error('User must have an email.');
    if (picture !== undefined && !picture)
      throw new Error('User must have a valid picture.');

    checkUsername(username);
    checkPassword(password);
    checkName(name);
    checkEmail(email);

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getName: () => name,
      getEmail: () => email,
      getPicture: () => picture,
      spread: () => ({
        username,
        password,
        name,
        email,
        picture,
      }),
    });
  }

  function updateUser({ username, password, name, email, picture }) {
    if (username !== undefined) {
      if (!username) throw new Error('User must have a valid username.');
      else checkUsername(username);
    }

    if (password !== undefined) {
      if (!password) throw new Error('User must have a valid password.');
      else checkPassword(password);
    }

    if (name !== undefined) {
      if (!name) throw new Error('User must have a valid name.');
      else checkName(name);
    }

    if (email !== undefined) {
      if (!email) throw new Error('User must have a valid email.');
      else checkEmail(email);
    }

    if (picture !== undefined && picture !== null) {
      if (!picture) throw new Error('User must have a valid picture.');
    }

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getName: () => name,
      getEmail: () => email,
      getPicture: () => picture,
      spread: () => ({
        username,
        password,
        name,
        email,
        picture,
      }),
    });
  }

  return {
    createUser,
    updateUser,
  };
}