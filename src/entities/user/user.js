export default function buildUser({
  usernameRegexTest,
  nameRegexTest,
  emailRegexTest,
  CustomError,
}) {
  function checkUsername(username) {
    if (!usernameRegexTest(username))
      throw new CustomError({
        message: 'User must have a valid username.',
        code: 'invalid',
        attr: 'username',
        entity: 'user',
      });
    else if (username.length < 4)
      throw new CustomError({
        message: 'User must have a username with at least 4 characters.',
        code: 'small',
        attr: 'username',
        entity: 'user',
      });
    else if (username.length > 16)
      throw new CustomError({
        message: 'User must have a username with at most 16 characters.',
        code: 'big',
        attr: 'username',
        entity: 'user',
      });
  }

  function checkPassword(password) {
    if (password.length < 8)
      throw new CustomError({
        message: 'User must have a password with at least 8 characters.',
        code: 'small',
        attr: 'password',
        entity: 'user',
      });
  }

  function checkName(name) {
    if (!nameRegexTest(name))
      throw new CustomError({
        message: 'User must have a valid name.',
        code: 'invalid',
        attr: 'name',
        entity: 'user',
      });
    else if (name.length > 100)
      throw new CustomError({
        message: 'User must have a name with at most 100 characters.',
        code: 'big',
        attr: 'name',
        entity: 'user',
      });
  }

  function checkEmail(email) {
    if (!emailRegexTest(email))
      throw new CustomError({
        message: 'User must have a valid email.',
        code: 'invalid',
        attr: 'email',
        entity: 'user',
      });
  }

  function checkRole(role) {
    const allowedRoles = ['student', 'admin', 'fullAdmin'];

    if (!allowedRoles.includes(role))
      throw new CustomError({
        message: 'User must have a valid role.',
        code: 'invalid',
        attr: 'role',
        entity: 'user',
      });
  }

  function createUser({
    username,
    password,
    name,
    email,
    role,
    picture = null,
  }) {
    if (!username)
      throw new CustomError({
        message: 'User must have a username.',
        code: 'undefined',
        attr: 'username',
        entity: 'user',
      });
    if (!password)
      throw new CustomError({
        message: 'User must have a password.',
        code: 'undefined',
        attr: 'password',
        entity: 'user',
      });
    if (!name)
      throw new CustomError({
        message: 'User must have a name.',
        code: 'undefined',
        attr: 'name',
        entity: 'user',
      });
    if (!email)
      throw new CustomError({
        message: 'User must have a email.',
        code: 'undefined',
        attr: 'email',
        entity: 'user',
      });
    if (!role)
      throw new CustomError({
        message: 'User must have a role.',
        code: 'undefined',
        attr: 'role',
        entity: 'user',
      });
    if (picture !== null && !picture)
      throw new CustomError({
        message: 'User must have a valid picture.',
        code: 'invalid',
        attr: 'picture',
        entity: 'user',
      });

    checkUsername(username);
    checkPassword(password);
    checkName(name);
    checkEmail(email);
    checkRole(role);

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getName: () => name,
      getEmail: () => email,
      getRole: () => role,
      getPicture: () => picture,
      spread: () => ({
        username,
        password,
        name,
        email,
        role,
        picture,
      }),
    });
  }

  function updateUser({ username, password, name, email, role, picture }) {
    if (username !== undefined) {
      if (!username)
        throw new CustomError({
          message: 'User must have a valid username.',
          code: 'invalid',
          attr: 'username',
          entity: 'user',
        });
      else checkUsername(username);
    }

    if (password !== undefined) {
      if (!password)
        throw new CustomError({
          message: 'User must have a valid password.',
          code: 'invalid',
          attr: 'password',
          entity: 'user',
        });
      else checkPassword(password);
    }

    if (name !== undefined) {
      if (!name)
        throw new CustomError({
          message: 'User must have a valid name.',
          code: 'invalid',
          attr: 'name',
          entity: 'user',
        });
      else checkName(name);
    }

    if (email !== undefined) {
      if (!email)
        throw new CustomError({
          message: 'User must have a valid email.',
          code: 'invalid',
          attr: 'email',
          entity: 'user',
        });
      else checkEmail(email);
    }

    if (role !== undefined) {
      if (!role)
        throw new CustomError({
          message: 'User must have a valid role.',
          code: 'invalid',
          attr: 'role',
          entity: 'user',
        });
      else checkRole(role);
    }

    if (picture !== undefined && picture !== null && !picture) {
      throw new CustomError({
        message: 'User must have a valid picture.',
        code: 'invalid',
        attr: 'picture',
        entity: 'user',
      });
    }

    return Object.freeze({
      getUsername: () => username,
      getPassword: () => password,
      getName: () => name,
      getEmail: () => email,
      getRole: () => role,
      getPicture: () => picture,
      spread: () => ({
        username,
        password,
        name,
        email,
        role,
        picture,
      }),
    });
  }

  return {
    createUser,
    updateUser,
  };
}
