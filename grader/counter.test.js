import {
    act,
    fireEvent,
    render,
    renderHook,
} from '@testing-library/react-native';

import App from '../App';
import { useCounter } from '../hooks/useCounter';

describe('Práctica: botón Reiniciar', () => {
    test('El hook expone resetCounter y devuelve el contador a 0', async () => {
        const { result } = await renderHook(() => useCounter());

        expect(typeof result.current.resetCounter).toBe('function');

        await act(async () => {
            result.current.increase();
            result.current.increase();
            result.current.decrease();
        });

        expect(result.current.counter).toBe(1);

        await act(async () => {
            result.current.resetCounter();
        });

        expect(result.current.counter).toBe(0);
    });

    test('El botón Reiniciar actualiza el valor mostrado en pantalla', async () => {
        const screen = await render(<App />);

        await act(async () => {
            fireEvent.press(screen.getByTestId('increase-button'));
            fireEvent.press(screen.getByTestId('increase-button'));
        });

        expect(screen.getByTestId('counter-value').props.children).toBe(2);

        await act(async () => {
            fireEvent.press(screen.getByTestId('reset-button'));
        });

        expect(screen.getByTestId('counter-value').props.children).toBe(0);
    });
});