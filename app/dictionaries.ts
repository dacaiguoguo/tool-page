export async function getDictionary(locale: string, namespace: string = 'common') {
  try {
    const dictionary = await import(`../public/locales/${locale}/${namespace}.json`);
    return dictionary.default;
  } catch (error) {
    console.error(`Failed to load dictionary for namespace ${namespace}:`, error);
    return {};
  }
}

export async function getMultipleDictionaries(locale: string, namespaces: string[]) {
  const dictionaries = await Promise.all(
    namespaces.map(async (namespace) => {
      const dict = await getDictionary(locale, namespace);
      return { [namespace]: dict };
    })
  );
  
  return dictionaries.reduce((acc, curr) => ({ ...acc, ...curr }), {});
}
