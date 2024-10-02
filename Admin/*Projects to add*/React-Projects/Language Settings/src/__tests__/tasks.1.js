import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

afterEach(cleanup);

describe("App", () => {
    it("App component renders", () => {
        render(<App />);
    });
    it("Language Dropdown Menu is present", () => {
        const { container } = render(<App />);
        const dropdown = container.querySelector('select');
        expect(dropdown).toBeInTheDocument();
    });
});
describe("Language Menu", () => {
    it("Dropdown Menu changes the language", () => {
        const { container } = render(<App />);
        const selectElement = container.querySelector('select');
        fireEvent.change(selectElement, { target: { value: 'US' } });
        expect(screen.getByText(/hello world!/i)).toBeVisible();
        fireEvent.change(selectElement, { target: { value: 'FR' } });
        expect(screen.getByText(/bonjour le monde!/i)).toBeVisible();
    });
    it("Greeting message is displayed in selected language", () => {
        const { container } = render(<App />);
        const selectElement = container.querySelector('select');
        fireEvent.change(selectElement, { target: { value: 'DU' } });
        expect(screen.getByText(/Hallo Wereld!/i)).toBeVisible();
    });
});
