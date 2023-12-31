import { addDependenciesToPackageJson, Tree } from '@nx/devkit';

export async function removeReactReduxTypesFromPackageJson(host: Tree) {
  return addDependenciesToPackageJson(
    host,
    {},
    {
      '@testing-library/react-hooks': '^7.0.1',
    }
  );
}

export default removeReactReduxTypesFromPackageJson;
