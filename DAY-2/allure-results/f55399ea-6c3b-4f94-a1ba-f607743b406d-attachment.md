# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: End-To-End/E2E3.spec.ts >> Target Account Balance Validation >> TC-BAL-02 Validate Target Account Balance
- Location: tests/End-To-End/E2E3.spec.ts:21:13

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 100
Received: 600
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e49]:
        - generic [ref=e50]:
          - heading "Account Details" [level=1] [ref=e51]
          - table [ref=e52]:
            - rowgroup [ref=e53]:
              - 'row "Account Number: 56745" [ref=e54]':
                - cell "Account Number:" [ref=e55]
                - cell "56745" [ref=e56]
              - 'row "Account Type: SAVINGS" [ref=e57]':
                - cell "Account Type:" [ref=e58]
                - cell "SAVINGS" [ref=e59]
              - 'row "Balance: $600.00" [ref=e60]':
                - cell "Balance:" [ref=e61]
                - cell "$600.00" [ref=e62]
              - 'row "Available: $600.00" [ref=e63]':
                - cell "Available:" [ref=e64]
                - cell "$600.00" [ref=e65]
        - generic [ref=e66]:
          - heading "Account Activity" [level=1] [ref=e67]
          - table [ref=e69]:
            - rowgroup [ref=e70]:
              - 'row "Activity Period: All" [ref=e71]':
                - cell "Activity Period:" [ref=e72]
                - cell "All" [ref=e73]:
                  - combobox [ref=e74]:
                    - option "All" [selected]
                    - option "January"
                    - option "February"
                    - option "March"
                    - option "April"
                    - option "May"
                    - option "June"
                    - option "July"
                    - option "August"
                    - option "September"
                    - option "October"
                    - option "November"
                    - option "December"
              - 'row "Type: All" [ref=e75]':
                - cell "Type:" [ref=e76]
                - cell "All" [ref=e77]:
                  - combobox [ref=e78]:
                    - option "All" [selected]
                    - option "Credit"
                    - option "Debit"
              - row "Go" [ref=e79]:
                - cell [ref=e80]
                - cell "Go" [ref=e81]:
                  - button "Go" [ref=e82] [cursor=pointer]
          - table [ref=e83]:
            - rowgroup [ref=e84]:
              - row "Date Transaction Debit (-) Credit (+)" [ref=e85]:
                - columnheader "Date" [ref=e86]
                - columnheader "Transaction" [ref=e87]
                - columnheader "Debit (-)" [ref=e88]
                - columnheader "Credit (+)" [ref=e89]
            - rowgroup [ref=e90]:
              - row "06-14-2026 Funds Transfer Received $100.00" [ref=e91]:
                - cell "06-14-2026" [ref=e92]
                - cell "Funds Transfer Received" [ref=e93]:
                  - link "Funds Transfer Received" [ref=e94] [cursor=pointer]:
                    - /url: transaction.htm?id=81742
                - cell [ref=e95]
                - cell "$100.00" [ref=e96]
              - row "06-14-2026 Funds Transfer Received $100.00" [ref=e97]:
                - cell "06-14-2026" [ref=e98]
                - cell "Funds Transfer Received" [ref=e99]:
                  - link "Funds Transfer Received" [ref=e100] [cursor=pointer]:
                    - /url: transaction.htm?id=82186
                - cell [ref=e101]
                - cell "$100.00" [ref=e102]
              - row "06-14-2026 Funds Transfer Received -$100.00" [ref=e103]:
                - cell "06-14-2026" [ref=e104]
                - cell "Funds Transfer Received" [ref=e105]:
                  - link "Funds Transfer Received" [ref=e106] [cursor=pointer]:
                    - /url: transaction.htm?id=82630
                - cell [ref=e107]
                - cell "-$100.00" [ref=e108]
              - row "06-14-2026 Funds Transfer Received $100.00" [ref=e109]:
                - cell "06-14-2026" [ref=e110]
                - cell "Funds Transfer Received" [ref=e111]:
                  - link "Funds Transfer Received" [ref=e112] [cursor=pointer]:
                    - /url: transaction.htm?id=82852
                - cell [ref=e113]
                - cell "$100.00" [ref=e114]
              - row "06-14-2026 Funds Transfer Received $100.00" [ref=e115]:
                - cell "06-14-2026" [ref=e116]
                - cell "Funds Transfer Received" [ref=e117]:
                  - link "Funds Transfer Received" [ref=e118] [cursor=pointer]:
                    - /url: transaction.htm?id=83074
                - cell [ref=e119]
                - cell "$100.00" [ref=e120]
              - row "06-14-2026 Funds Transfer Received $100.00" [ref=e121]:
                - cell "06-14-2026" [ref=e122]
                - cell "Funds Transfer Received" [ref=e123]:
                  - link "Funds Transfer Received" [ref=e124] [cursor=pointer]:
                    - /url: transaction.htm?id=88291
                - cell [ref=e125]
                - cell "$100.00" [ref=e126]
              - row "06-14-2026 Funds Transfer Received $100.00" [ref=e127]:
                - cell "06-14-2026" [ref=e128]
                - cell "Funds Transfer Received" [ref=e129]:
                  - link "Funds Transfer Received" [ref=e130] [cursor=pointer]:
                    - /url: transaction.htm?id=88957
                - cell [ref=e131]
                - cell "$100.00" [ref=e132]
              - row "06-14-2026 Funds Transfer Received $100.00" [ref=e133]:
                - cell "06-14-2026" [ref=e134]
                - cell "Funds Transfer Received" [ref=e135]:
                  - link "Funds Transfer Received" [ref=e136] [cursor=pointer]:
                    - /url: transaction.htm?id=98725
                - cell [ref=e137]
                - cell "$100.00" [ref=e138]
  - generic [ref=e140]:
    - list [ref=e141]:
      - listitem [ref=e142]:
        - link "Home" [ref=e143] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=e144]:
        - link "About Us" [ref=e145] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=e146]:
        - link "Services" [ref=e147] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=e148]:
        - link "Products" [ref=e149] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e150]:
        - link "Locations" [ref=e151] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e152]:
        - link "Forum" [ref=e153] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e154]:
        - link "Site Map" [ref=e155] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=e156]:
        - link "Contact Us" [ref=e157] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=e158]: © Parasoft. All rights reserved.
    - list [ref=e159]:
      - listitem [ref=e160]: "Visit us at:"
      - listitem [ref=e161]:
        - link "www.parasoft.com" [ref=e162] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  9   | import { takeScreenshot } from '../../utils/screenshot_Helper';
  10  | 
  11  | const screenshotDir = 'test-results/screenshots/End-to-End';
  12  | 
  13  | if (!fs.existsSync(screenshotDir)) {
  14  |     fs.mkdirSync(screenshotDir, { recursive: true });
  15  | }
  16  | 
  17  | test.describe(
  18  |     'Target Account Balance Validation',
  19  |     () => {
  20  | 
  21  |         test(
  22  |             'TC-BAL-02 Validate Target Account Balance',
  23  |             async ({ page }) => {
  24  | 
  25  |                 const loginPage =
  26  |                     new LoginPage(page);
  27  | 
  28  |                 const homePage =
  29  |                     new HomePage(page);
  30  | 
  31  |                 const transferFundsPage =
  32  |                     new TransferFundsPage(page);
  33  | 
  34  |                 await loginPage.navigate();
  35  | 
  36  |                 await loginPage.login(
  37  |                     userData.username,
  38  |                     userData.password
  39  |                 );
  40  | 
  41  |                 await loginPage.verifyLoginSuccess();
  42  | 
  43  |                 await homePage.goToTransferFunds();
  44  | 
  45  |                 const toAccount =
  46  |                     await page
  47  |                         .locator('#toAccountId option')
  48  |                         .nth(1)
  49  |                         .getAttribute('value');
  50  | 
  51  |                 await homePage.goToAccountsOverview();
  52  | 
  53  |                 await page
  54  |                     .getByRole('link', {
  55  |                         name: toAccount!
  56  |                     })
  57  |                     .click();
  58  | 
  59  |                 const balanceBefore =
  60  |                     Number(
  61  |                         (
  62  |                             await page
  63  |                                 .locator('#balance')
  64  |                                 .textContent()
  65  |                         )
  66  |                             ?.replace('$', '')
  67  |                             .replace(',', '')
  68  |                     );
  69  | 
  70  |                 console.log(
  71  |                     'Target Balance Before:',
  72  |                     balanceBefore
  73  |                 );
  74  | 
  75  |                 await homePage.goToTransferFunds();
  76  | 
  77  |                 await transferFundsPage
  78  |                     .transferFunds('100');
  79  | 
  80  |                 await homePage.goToAccountsOverview();
  81  | 
  82  |                 await page
  83  |                     .getByRole('link', {
  84  |                         name: toAccount!
  85  |                     })
  86  |                     .click();
  87  | 
  88  |                 const balanceAfter =
  89  |                     Number(
  90  |                         (
  91  |                             await page
  92  |                                 .locator('#balance')
  93  |                                 .textContent()
  94  |                         )
  95  |                             ?.replace('$', '')
  96  |                             .replace(',', '')
  97  |                     );
  98  |                 await takeScreenshot(page, 'End-to-End', 'Target-Account-Balance-Validation');
  99  |                 
  100 | 
  101 |                 console.log(
  102 |                     'Target Balance After:',
  103 |                     balanceAfter
  104 |                 );
  105 | 
  106 |                 expect(
  107 |                     balanceAfter -
  108 |                     balanceBefore
> 109 |                 ).toBe(100);
      |                   ^ Error: expect(received).toBe(expected) // Object.is equality
  110 | 
  111 |             }
  112 |         );
  113 | 
  114 |     }
  115 | );
```