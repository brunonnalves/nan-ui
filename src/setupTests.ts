import '@testing-library/jest-dom';

// Mock do window.matchMedia para testes
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Suprimir warnings específicos do React nos testes
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: `ReactDOMTestUtils.act` is deprecated') ||
        args[0].includes(
          'A component is changing an uncontrolled input to be controlled'
        ) ||
        args[0].includes(
          'You provided a `checked` prop to a form field without an `onChange` handler'
        ))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
