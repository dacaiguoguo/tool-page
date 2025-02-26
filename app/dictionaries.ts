export async function getDictionary(locale: string) {
  try {
    const dictionary = await import(`../public/locales/${locale}/common.json`);
    return dictionary.default;
  } catch (error) {
    console.error('Failed to load dictionary:', error);
    return {};
  }
}
