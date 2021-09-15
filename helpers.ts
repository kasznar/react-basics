export function mockApiCall(): Promise<{ price: number }> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ price: niceRandom() });
    }, 2000);
  });
}

export function niceRandom(): number {
  return Math.round(Math.random() * 100);
}

// Types
export interface IExampleProps {
  name: string;
}

export interface IExampleState {
  name: string;
}
