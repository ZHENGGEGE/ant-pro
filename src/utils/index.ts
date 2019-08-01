export function isDev(): Boolean {
  return process.env.NODE_ENV === 'development';
}
