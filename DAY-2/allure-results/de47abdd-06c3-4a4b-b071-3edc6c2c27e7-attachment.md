# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: End-To-End/E2E2.spec.ts >> Account Validation Workflow >> TC-E2E-01 Create Account and Validate Through API
- Location: tests/End-To-End/E2E2.spec.ts:20:9

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not ""
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=e27]:
      - generic [ref=e28]:
        - paragraph [ref=e29]: Welcome eddy eddy
        - heading "Account Services" [level=2] [ref=e30]
        - list [ref=e31]:
          - listitem [ref=e32]:
            - link "Open New Account" [ref=e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=e34]:
            - link "Accounts Overview" [ref=e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=e36]:
            - link "Transfer Funds" [ref=e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=e38]:
            - link "Bill Pay" [ref=e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=e40]:
            - link "Find Transactions" [ref=e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=e42]:
            - link "Update Contact Info" [ref=e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=e44]:
            - link "Request Loan" [ref=e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=e46]:
            - link "Log Out" [ref=e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=e50]:
        - heading "Open New Account" [level=1] [ref=e51]
        - generic [ref=e52]:
          - paragraph [ref=e53]: What type of Account would you like to open?
          - combobox [ref=e54]:
            - option "CHECKING"
            - option "SAVINGS" [selected]
          - paragraph [ref=e55]: A minimum of $100.00 must be deposited into this account at time of opening. Please choose an existing account to transfer funds into the new account.
          - combobox [ref=e56]:
            - option "55968" [selected]
            - option "56745"
            - option "56856"
          - button "Open New Account" [active] [ref=e58] [cursor=pointer]
  - generic [ref=e60]:
    - list [ref=e61]:
      - listitem [ref=e62]:
        - link "Home" [ref=e63] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e64]:
        - link "About Us" [ref=e65] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e66]:
        - link "Services" [ref=e67] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e68]:
        - link "Products" [ref=e69] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e70]:
        - link "Locations" [ref=e71] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e72]:
        - link "Forum" [ref=e73] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e74]:
        - link "Site Map" [ref=e75] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e76]:
        - link "Contact Us" [ref=e77] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e78]: © Parasoft. All rights reserved.
    - list [ref=e79]:
      - listitem [ref=e80]: "Visit us at:"
      - listitem [ref=e81]:
        - link "www.parasoft.com" [ref=e82] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1   | import fs from 'fs';
  2   | import { test, expect } from '@playwright/test';
  3   | 
  4   | import { LoginPage } from '../../pages/LoginPage';
  5   | import { HomePage } from '../../pages/HomePage';
  6   | import { OpenAccountPage } from '../../pages/OpenAccountPage';
  7   | 
  8   | import userData from '../../test-data/user-data.json';
  9   | import { takeScreenshot } from '../../utils/screenshot_Helper';
  10  | 
  11  | const screenshotDir = 'test-results/screenshots/End-to-End';
  12  | 
  13  | if (!fs.existsSync(screenshotDir)) {
  14  |     fs.mkdirSync(screenshotDir, { recursive: true });
  15  | }
  16  | 
  17  | 
  18  | test.describe('Account Validation Workflow', () => {
  19  | 
  20  |     test(
  21  |         'TC-E2E-01 Create Account and Validate Through API',
  22  |         async ({ page, request }) => {
  23  | 
  24  |             const loginPage =
  25  |                 new LoginPage(page);
  26  | 
  27  |             const homePage =
  28  |                 new HomePage(page);
  29  | 
  30  |             const openAccountPage =
  31  |                 new OpenAccountPage(page);
  32  | 
  33  |             await loginPage.navigate();
  34  | 
  35  |             await loginPage.login(
  36  |                 userData.username,
  37  |                 userData.password
  38  |             );
  39  | 
  40  |             await loginPage.verifyLoginSuccess();
  41  | 
  42  |             await homePage.goToOpenAccount();
  43  | 
  44  |             await openAccountPage.createSavingsAccount();
  45  | 
  46  |             await openAccountPage.verifyAccountCreated();
  47  | 
  48  |             await page.waitForTimeout(3000);
  49  | 
  50  |             const accountId =
  51  |                 await openAccountPage.getCreatedAccountId();
  52  | 
  53  |             console.log(
  54  |                 'Created Account ID:',
  55  |                 accountId
  56  |             );
  57  | 
  58  |             expect(accountId)
> 59  |                 .not.toBe('');
      |                      ^ Error: expect(received).not.toBe(expected) // Object.is equality
  60  | 
  61  |             const response =
  62  |                 await request.get(
  63  |                     `https://parabank.parasoft.com/parabank/services/bank/accounts/${accountId}`
  64  |                 );
  65  | 
  66  |             expect(
  67  |                 response.status()
  68  |             ).toBe(200);
  69  | 
  70  |             const responseBody =
  71  |                 await response.text();
  72  | 
  73  |             await takeScreenshot(page, 'End-to-End', 'Account-Validation');
  74  | 
  75  | 
  76  |             console.log(
  77  |                 'API Response:',
  78  |                 responseBody
  79  |             );
  80  | 
  81  |             expect(
  82  |                 responseBody
  83  |             ).toContain(
  84  |                 `<id>${accountId}</id>`
  85  |             );
  86  | 
  87  |             expect(
  88  |                 responseBody
  89  |             ).toContain(
  90  |                 '<type>SAVINGS</type>'
  91  |             );
  92  | 
  93  |             expect(
  94  |                 responseBody
  95  |             ).toContain(
  96  |                 '<balance>'
  97  |             );
  98  | 
  99  |             console.log(
  100 |                 'Account validated successfully through API'
  101 |             );
  102 | 
  103 |         }
  104 |     );
  105 | 
  106 | });
```