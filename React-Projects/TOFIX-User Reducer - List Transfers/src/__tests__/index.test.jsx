import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { within } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'


// Component
import App from '../App';

it('renders the classroom titles', () => {
    const { getByText } = render(<App />);
    expect(getByText('Classroom A')).toBeInTheDocument();
    expect(getByText('Classroom B')).toBeInTheDocument();
});

it('should handle moving students between classrooms', () => {
    const { getByTestId } = render(<App />);

    const classRoomA = getByTestId('classrom-A')
    const classRoomB = getByTestId('classrom-B')

    // Expect the user John to be in the the classroom A and not in the classroom B
    expect(within(classRoomA).getByText('John'))
    expect(within(classRoomB).queryByText('John')).not.toBeInTheDocument()

    // Handle moving user John from clasroom A to classroom B
    const buttonA = within(getByTestId('John')).getByRole('button')
    userEvent.click(buttonA)


    // Expect the user John to be in the the classroom B and no longer in classroom A
    expect(within(classRoomA).queryByText('John')).not.toBeInTheDocument()
    expect(within(classRoomB).getByText('John'))

    // Handle moving user John back from classroom B to classroom A
    const buttonB = within(getByTestId('John')).getByRole('button')
    userEvent.click(buttonB)

    // Expect the user John to be in the the classroom A and not in the classroom B
    expect(within(classRoomA).getByText('John'))
    expect(within(classRoomB).queryByText('John')).not.toBeInTheDocument()
  
});

