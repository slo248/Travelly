/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '~/App';

import { it, expect } from '@jest/globals';

// Import from @testing-library/react-native
import { render } from '@testing-library/react-native';

it('renders correctly', () => {
  const { toJSON } = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});
