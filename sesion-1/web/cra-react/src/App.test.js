import { render, screen } from '@testing-library/react';
import { userEvent, fireEvent } from '@testing-library/user-event';
import App from './App';
import Boton from './Boton';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hola desde Create-React-App/i);
  expect(linkElement).toBeInTheDocument();
});


// Probar que se renderice un elemento
test('Verificamos que exista un texto de saludo', () => {
  render(<Boton />)

  expect(screen.getByText('Soy un botón')).toBeInTheDocument()
})


// Probar eventos
test('Probar que el evento onClick se realice', async () => {

  render(<Boton />)

  const button = screen.getByText('Soy un botón')
  fireEvent.click(button)

  expect(button).not.toBeDisabled()
})

