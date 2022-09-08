import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import Addition from '../Addition';
import ReactDOM from "react-dom/client"
import userEvent from '@testing-library/user-event';

afterEach(cleanup) 
//for clean up after every test

it('Renders without crashing', () => {
  render(<Addition />);
});

it('Renders input box correctly', () => {
  render(<Addition />);
  const data = screen.getByTestId("firstInput")
  const value = screen.getByTestId("firstInput")

  expect(typeof data).toBe('object');
  // expect(data).toBeInstanceOf('object')
  // expect(screen.getByDisplayValue('test')).toBeInTheDocument();


  fireEvent.click(data)
  userEvent.click(data)
});

it('Renders button correctly', () => {
  render(<Addition />);
  const data = screen.getByTestId("addButton")
  expect(data).toHaveTextContent("Addddd");
  fireEvent.click(data)
});

//circle ci
//trapiz ci
//json placeholder