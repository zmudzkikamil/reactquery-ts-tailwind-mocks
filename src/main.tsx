import { createRoot } from 'react-dom/client';
import './index.css';
import 'tailwindcss/tailwind.css';
import App from './App';

// MSW (Browser)
if (import.meta.env.VITE_ENABLE_MSW === 'true') {
	const { worker } = await import('./mocks/browser');
	worker.start();
}

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);
