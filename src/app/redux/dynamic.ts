import { SearchTransformations } from '@zengenti/contensis-react-base/search';

// Function to asynchronously inject search module
export const injectSearch = async () => {
  try {
    // Dynamically import SearchReducer and SearchSagas
    const { reducer: SearchReducer, sagas: SearchSagas } = await import(
      /* webpackChunkName: "search-package" */
      '@zengenti/contensis-react-base/search'
    );

    // Dynamically import configuration for search
    const { config } = await import(
      /* webpackChunkName: "search-config" */
      '~/search/search.config'
    );

    return {
      key: 'search',
      reducer: SearchReducer(config),
      saga: SearchSagas,
    };
  } catch (error) {
    console.error('Failed to inject search module:', error);
    throw error;
  }
};
