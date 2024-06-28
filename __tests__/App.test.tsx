/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '~/App';

import { it, expect } from '@jest/globals';

// Import from @testing-library/react-native
import { render } from '@testing-library/react-native';

// Mocking react-native-size-matters
jest.mock('~/assets/svgs/logo.svg', () => 'LogoSvg');
jest.mock('~/assets/svgs/plane.svg', () => 'PlaneSvg');
jest.mock('~/assets/svgs/small_circle.svg', () => 'SmallCircle');

it('renders correctly', () => {
  expect(() => render(<App />)).not.toThrow();
});
