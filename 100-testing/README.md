## Installing testing framework for expo apps

- https://docs.expo.dev/guides/testing-with-jest/
- Installs `jest-expo` and `jest` (consider `@types/jest` as well for auto-completion)
- Configure `package.json` to tell yarn what to do when running tests
<!-- - Configre `tsconfig.json` for detecting types for jest (or put in a separate `tsconfig.spec.json`) -->

## Installing render library and extra jest matchers

- You can use `react-test-renderer`. Alternatively, try `@testing-library/react-native` with `@testing-library/jest-native`
- import `@testing-library/jest-native/extend-expect` in test files to enable the extra matchers; You can just named import the matchers from the library as well, and extend `expect` yourself.
  - Alternatively, import `@testing-library/jest-native/extend-expect` in a special config file according to this: https://github.com/testing-library/jest-native#usage (Don't know how it works??)

## Docs

- RNTL: https://callstack.github.io/react-native-testing-library/
- Jest on how to test RN: https://jestjs.io/docs/tutorial-react-native
