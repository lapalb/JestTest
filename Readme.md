### Testing Framework : Jest

> All code is guilty, until proven innocent

---

There are many testing frameworks. Top one includes:
1. Mocha
1. Jest 
1. Jasmine 
1. Karma
1. Puppeteer


---
### Few Important Libararies
1. Chai : It is basically an assertion libarary which can be paired with any javascript testing framework. It has 
3 assertion style. Assert is TDD assertion style. Should and expect are BDD.

1. Protractor: It is an end-to-end test framework for Angular and AngularJS applications. It uses webdriver-manager which is a helper tool to easily get an instance of a Selenium Server running.

1. Karma is a great tool for unit testing while Protractor does end to end testing




---
### Cypress vs Selenium
Both are automation frameworks for web app testing. Selenium supports many language but cypress supports only Javascript. Moreover cypress has cross browser testing issues

---
### Cypress : web has evolved. Finally, testing has too.
Let's be honest, developers never want to writes tests. Be it unit, integration or functinal testing. Cypress is there to lure developers to write test.

Cypress has simpler syntax, beatiful UI and the coolest feature is time travel. It runs in browser so it doesn't has to do network calls like selenium. It has stubs and spies to mock obeject and force function to return the desired value so you don't get too dependent on server :wink:

It uses `mocha` for testing and `Chai` for assertion. It has asynchronous nature so you don't need to sprinkle `wait` everywhere 

```
describe('testing facebook', function(){
    it('this will login into facebook' function(){
        cy.visit('https://www.facebook.com/');
        cy.get('input[type="email"]').type('amiableashish55@gmail.com');
        cy.get('#pass').type('dontExpectIWillWritepasswordhere');
        cy.get('.login_form_login_button').should('be.visible').click();
    })
})

```

### Headless: Running chrome from CLI without GUI
A headless browser is a great tool for automated testing and server environments where you don't need a visible UI shell.

```
chrome --headless --disable-gpu --dump-dom https://www.chromestatus.com/
```

`--screenshot` : Take Screenshot
`--repl;` : Start the REPL 
`--print-to-pdf` : Creates a PDF


#### Puppeteer
A node libaray by Google which can be used to control headeless chrome environment. This provides high level API as compared to CRI(Chrome Remote Interface).

```
npm i puppeteer
# or "yarn add puppeteer"
```

It can be used to take screenshot, generate PDF, Automate form submission and capture timeline trace.

Below is a small example on how to do that.
```
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();
```