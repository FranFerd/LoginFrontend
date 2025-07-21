export const usernameRules = [
  (value: string) => !!value || 'Username is required',
  (value: string) => value.length >= 3 || 'Minimum 3 characters',
  (value: string) => value.length <=12 || 'Maximum 12 characters',
  (value: string) => !/\s/.test(value) || 'No spaces allowed',
  (value: string) => /^[a-zA-Z0-9_]+$/.test(value) || 'Only letters, numbers, and underscores allowed'
]

export const passwordRules = [
  (value: string) => !!value || 'Password is required',
  (value: string) => value.length >= 6 || 'Minimum 6 characters',
  (value: string) => value.length <=30 || 'Maximum 30 characters',
]

export const passwordConfirmRules = (password: string) => [
  (value: string) => !!value || 'Please confirm your password',
  (value: string) => value === password || 'Passwords do not match'
]

export const emailRules = [
  (value: string) => !!value || 'Email is required',
  (value: string) => value?.length >= 5 || 'Minimum 5 characters',
  (value: string) => value?.length <= 254 || 'Maximum 254 characters',
  (value: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || // Accepts user.name+tag@example.co.uk
  'Enter a valid email address',
  (value: string) => {
    const domain = value.split('@')[1]; // everything after '@'
    if (!domain) return 'Enter a valid email address';
    const parts = domain.split('.'); // parts of domain before and after dot '.'
    return parts.every(part => part.length <= 63) || 'Each domain segment (between dots) must be 63 characters max';
  }
]

export const codeRules = [
  (value: string) => !!value || 'Enter code',
  (value: string) => value.length === 6 || 'Code is 6 characters'
]

export const usernameRulesLogin = [
  (value: string) => (!!value && value.length >= 3) || 'Minimum 3 characters'
]

export const passwordRulesLogin = [
  (value: string) => (!!value && value.length >= 6) || 'Minimum 6 characters'
]