export function usernameRegexTest(username) {
  return /^[a-z0-9_.]+$/.test(username);
}

export function nameRegexTest(name) {
  return /^[a-zA-Z ,.'-]+$/.test(name);
}

export function emailRegexTest(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// not testing length, only characters. I test for length in the entities
