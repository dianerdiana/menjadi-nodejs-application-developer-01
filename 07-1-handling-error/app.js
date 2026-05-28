function parseURL(url) {
  try {
    return new URL(url);
  } catch {
    return null;
  }
}
