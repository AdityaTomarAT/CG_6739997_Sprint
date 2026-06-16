# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: End-To-End/E2E1.spec.ts >> Register Login Create Account Workflow >> TC-E2E-01 Register Login Create Savings Account
- Location: tests/End-To-End/E2E1.spec.ts:22:13

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#rightPanel')
Timeout: 5000ms
- Expected substring  -   1
+ Received string     + 119

- Your account was created successfully
+
+ 					
+
+
+
+ Signing up is easy!
+
+ If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
+
+
+   
+     
+       First Name:
+       
+         
+       
+       
+         
+       
+     
+     
+       Last Name:
+       
+         
+       
+       
+         
+       
+     
+     
+       Address:
+       
+         
+       
+       
+         
+       
+     
+     
+       City:
+       
+         
+       
+       
+         
+       
+     
+     
+       State:
+       
+         
+       
+       
+         
+       
+     
+     
+       Zip Code:
+       
+         
+       
+       
+         
+       
+     
+     
+       Phone #:
+       
+         
+       
+       
+         
+       
+     
+     
+       SSN:
+       
+         
+       
+       
+         
+       
+     
+      
+     
+       Username:
+       
+         
+       
+       
+         This username already exists.
+       
+     
+     
+       Password:
+       
+         
+       
+       
+         
+       
+     
+     
+       Confirm:
+       
+         
+       
+       
+         
+       
+         
+     
+        
+       Register
+     
+   
+   
+
+ 				

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#rightPanel')
    14 × locator resolved to <div id="rightPanel">…</div>
       - unexpected value "
					



Signing up is easy!

If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.


  
    
      First Name:
      
        
      
      
        
      
    
    
      Last Name:
      
        
      
      
        
      
    
    
      Address:
      
        
      
      
        
      
    
    
      City:
      
        
      
      
        
      
    
    
      State:
      
        
      
      
        
      
    
    
      Zip Code:
      
        
      
      
        
      
    
    
      Phone #:
      
        
      
      
        
      
    
    
      SSN:
      
        
      
      
        
      
    
     
    
      Username:
      
        
      
      
        This username already exists.
      
    
    
      Password:
      
        
      
      
        
      
    
    
      Confirm:
      
        
      
      
        
      
        
    
       
      Register
    
  
  

				"

```

```yaml
- heading "Signing up is easy!" [level=1]
- paragraph: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
- table:
  - rowgroup:
    - 'row "First Name: Aditya"':
      - cell "First Name:"
      - cell "Aditya":
        - textbox: Aditya
      - cell
    - 'row "Last Name: Tomar"':
      - cell "Last Name:"
      - cell "Tomar":
        - textbox: Tomar
      - cell
    - 'row "Address: Jaipur"':
      - cell "Address:"
      - cell "Jaipur":
        - textbox: Jaipur
      - cell
    - 'row "City: Rajasthan"':
      - cell "City:"
      - cell "Rajasthan":
        - textbox: Rajasthan
      - cell
    - 'row "State: 302001"':
      - cell "State:"
      - cell "302001":
        - textbox: "302001"
      - cell
    - 'row "Zip Code: 9999999999"':
      - cell "Zip Code:"
      - cell "9999999999":
        - textbox: "9999999999"
      - cell
    - 'row "Phone #: 123456789"':
      - 'cell "Phone #:"'
      - cell "123456789":
        - textbox: "123456789"
      - cell
    - 'row "SSN: 123456"':
      - cell "SSN:"
      - cell "123456":
        - textbox: "123456"
      - cell
    - row:
      - cell
    - 'row "Username: test2 This username already exists."':
      - cell "Username:"
      - cell "test2":
        - textbox: test2
      - cell "This username already exists."
    - row "Password:":
      - cell "Password:"
      - cell:
        - textbox
      - cell
    - row "Confirm:":
      - cell "Confirm:"
      - cell:
        - textbox
      - cell
    - row "Register":
      - cell
      - cell "Register":
        - button "Register"
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import userData from '../test-data/user-data.json';
  3  | 
  4  | export class RegisterPage {
  5  |   page: Page;
  6  | 
  7  |   constructor(page: Page) {
  8  |     this.page = page;
  9  |   }
  10 | 
  11 |   // Navigate directly to registration page
  12 |   async navigate() {
  13 |     await this.page.goto(userData.baseUrl);
  14 |     await this.page.getByRole('link', { name: 'Register' }).click();
  15 |   }
  16 | 
  17 |   async registerUser(
  18 |     firstName: string,
  19 |     lastName: string,
  20 |     address: string,
  21 |     city: string,
  22 |     state: string,
  23 |     zipCode: string,
  24 |     phone: string,
  25 |     ssn: string,
  26 |     username: string,
  27 |     password: string
  28 |   ) {
  29 | 
  30 |     await this.page.locator('#customer\\.firstName').fill(firstName);
  31 | 
  32 |     await this.page.locator('#customer\\.lastName').fill(lastName);
  33 | 
  34 |     await this.page.locator('#customer\\.address\\.street').fill(address);
  35 | 
  36 |     await this.page.locator('#customer\\.address\\.city').fill(city);
  37 | 
  38 |     await this.page.locator('#customer\\.address\\.state').fill(state);
  39 | 
  40 |     await this.page.locator('#customer\\.address\\.zipCode').fill(zipCode);
  41 | 
  42 |     await this.page.locator('#customer\\.phoneNumber').fill(phone);
  43 | 
  44 |     await this.page.locator('#customer\\.ssn').fill(ssn);
  45 | 
  46 |     await this.page.locator('#customer\\.username').fill(username);
  47 | 
  48 |     await this.page.locator('#customer\\.password').fill(password);
  49 | 
  50 |     await this.page.locator('#repeatedPassword').fill(password);
  51 | 
  52 |     await this.page.getByRole('button', {
  53 |       name: 'Register'
  54 |     }).click();
  55 |   }
  56 | 
  57 |   async verifyRegistrationSuccess() {
  58 | 
  59 |     await expect(
  60 |       this.page.locator('#rightPanel')
> 61 |     ).toContainText('Your account was created successfully');
     |       ^ Error: expect(locator).toContainText(expected) failed
  62 |   }
  63 | }
```