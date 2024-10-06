import express from 'express';
import payload from 'payload';
import { config } from 'dotenv';

config();

const app = express();

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET || '',
  express: app,
  onInit: async () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(3000);