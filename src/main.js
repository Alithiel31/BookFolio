import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';

// On monte l'application dans la div avec l'id "app" (standard Vite)
const app = mount(App, {
	target: document.getElementById('app'),
});

export default app;