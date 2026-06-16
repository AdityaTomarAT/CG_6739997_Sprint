import dotenv from 'dotenv';

dotenv.config();
// dotenv.config({ path: '../../.env' });

export const env = {
    baseUrl: process.env.BASE_URL || '',

    apiBaseUrl:
        process.env.API_BASE_URL || '',

    username:
        process.env.USERNAME || '',

    password:
        process.env.PASSWORD || '',

    defaultTransferAmount:
        Number(
            process.env.DEFAULT_TRANSFER_AMOUNT
        ) || 100,

    apiTimeout:
        Number(process.env.API_TIMEOUT) || 30000,

    uiTimeout:
        Number(process.env.UI_TIMEOUT) || 30000,
};