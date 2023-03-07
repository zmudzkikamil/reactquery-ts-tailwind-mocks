import { QueryClient, QueryClientProvider } from 'react-query';
import { TemplateClient } from './templates/client';

// React Query
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<TemplateClient />
		</QueryClientProvider>
	);
}

export default App;
