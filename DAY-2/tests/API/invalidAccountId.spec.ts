import { test, expect } from '@playwright/test';

import { saveApiResponse } from '../../utils/saveApiResponse';

test.describe(
    'Invalid Account API Test',
    () => {

        test(
            'TC-API-06 Invalid Account ID',
            async ({ request }) => {

                const invalidAccountId =
                    '999999999';

                const response =
                    await request.get(
                        `https://parabank.parasoft.com/parabank/services/bank/accounts/${invalidAccountId}`
                    );

                const responseBody =
                    await response.text();

                console.log(
                    'Status Code:',
                    response.status()
                );

                console.log(
                    'Response:',
                    responseBody
                );

                saveApiResponse(
                    `TC-API-06-${invalidAccountId}`,
                    responseBody
                );

                expect(
                    response.status()
                ).not.toBe(200);

            }
        );

    }
);