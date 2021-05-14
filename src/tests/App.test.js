import { fireEvent, render } from '@testing-library/react';
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
    fireEvent.click(equals)
    expect(runningTotal).toHaveTextContent('5');
  })

})

