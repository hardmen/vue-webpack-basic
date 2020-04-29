import { RouteConfig } from 'vue-router';

const requireModule = require.context('.', false, /\.tsx?$/);
const namespaces: RouteConfig[] = [];

requireModule.keys().forEach((fileName: string) => {
  // Ignore index file
  if (fileName.includes('index.')) return;

  const defaultModule: RouteConfig = requireModule(fileName).default;

  // Add module into namespaces
  if (Array.isArray(defaultModule)) {
    defaultModule.forEach(module => namespaces.push(module));
  } else {
    namespaces.push(defaultModule);
  }
});

export default namespaces;
