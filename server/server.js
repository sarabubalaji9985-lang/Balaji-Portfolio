import app from './app.js';
import { config } from './config/env.js';

app.listen(config.port, () => {
  console.log(`⚡ Balaji Portfolio Backend running in ${config.nodeEnv} mode on port ${config.port}`);
  console.log(`🔗 API endpoints available at http://localhost:${config.port}/api`);
});
