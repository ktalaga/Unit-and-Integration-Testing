import { fireEvent, render } from '@testing-library/react';
import { run } from 'cypress';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
  })

  it('should return 5 when 1 is added to 4', () => {
    const button_1 = container.getByTestId('number1');
    const button_4 = container.getByTestId('number4');
    const button_add = container.getByTestId('add');
    const equals = container.getByTestId('equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button_1);
    fireEvent.click(button_add);
    fireEvent.click(button_4);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('5');
  })

  it('should return 3 when 4 is subtracted from 7', () => {
    const button_7 = container.getByTestId('number7');
    const button_4 = container.getByTestId('number4')
    const button_subtract = container.getByTestId('subtract');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button_7);
    fireEvent.click(button_subtract);
    fireEvent.click(button_4);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('3')
  })

  it('should return 15 when 3 is multiplied by 5', () => {
    const button_3 = container.getByTestId('number3');
    const button_5 = container.getByTestId('number5')
    const button_multiply = container.getByTestId('multiply');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button_3);
    fireEvent.click(button_multiply);
    fireEvent.click(button_5);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('15')
  })

})

