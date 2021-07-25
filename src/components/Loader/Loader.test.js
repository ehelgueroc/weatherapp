import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';
import Loader from './Loader';

// Check out if the component is beign rendered
test('renders content', () => {
    const component = render(<Loader />);
    component.getByLabelText("Weather loader");
});