{
  "id": "171ff5ca-2254-4ced-b10c-a2f66df70fb8",
  "version": "2.0",
  "name": "expense",
  "url": "http://localhost",
  "tests": [{
    "id": "379c4400-ef96-4964-b51e-1a06d5995f84",
    "name": "expense",
    "commands": [{
      "id": "727e9b3a-9f4f-411e-98f9-3088ce0aadae",
      "comment": "",
      "command": "open",
      "target": "/Expense_final/Frontend/login.html",
      "targets": [],
      "value": ""
    }, {
      "id": "cb80de28-bda3-4609-91f1-a04f2f7b83ae",
      "comment": "",
      "command": "setWindowSize",
      "target": "1440x812",
      "targets": [],
      "value": ""
    }, {
      "id": "8fd2ec25-9f05-4450-8b6d-61a8c53c226c",
      "comment": "",
      "command": "click",
      "target": "name=username",
      "targets": [
        ["name=username", "name"],
        ["css=.form-control:nth-child(1) > input", "css:finder"],
        ["xpath=//input[@name='username']", "xpath:attributes"],
        ["xpath=//input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "458cca6c-88f3-4ec5-887d-bde4be61cf1a",
      "comment": "",
      "command": "type",
      "target": "name=username",
      "targets": [
        ["name=username", "name"],
        ["css=.form-control:nth-child(1) > input", "css:finder"],
        ["xpath=//input[@name='username']", "xpath:attributes"],
        ["xpath=//input", "xpath:position"]
      ],
      "value": "sasidharreddy1219@gmail.com"
    }, {
      "id": "e7856c6d-640a-4111-a41e-1165a012f4e0",
      "comment": "",
      "command": "click",
      "target": "name=password",
      "targets": [
        ["name=password", "name"],
        ["css=.form-control:nth-child(2) > input", "css:finder"],
        ["xpath=//input[@name='password']", "xpath:attributes"],
        ["xpath=//div[2]/input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "ec596f8b-da5b-4776-a69a-8d4660031246",
      "comment": "",
      "command": "type",
      "target": "name=password",
      "targets": [
        ["name=password", "name"],
        ["css=.form-control:nth-child(2) > input", "css:finder"],
        ["xpath=//input[@name='password']", "xpath:attributes"],
        ["xpath=//div[2]/input", "xpath:position"]
      ],
      "value": "1219"
    }, {
      "id": "ea4dda86-4f5c-415f-956e-bb1c9b6de19e",
      "comment": "",
      "command": "sendKeys",
      "target": "name=password",
      "targets": [
        ["name=password", "name"],
        ["css=.form-control:nth-child(2) > input", "css:finder"],
        ["xpath=//input[@name='password']", "xpath:attributes"],
        ["xpath=//div[2]/input", "xpath:position"]
      ],
      "value": "${KEY_ENTER}"
    }, {
      "id": "ef053fc3-ec77-498d-90d0-0187e7c9c042",
      "comment": "",
      "command": "click",
      "target": "linkText=Add Expense »",
      "targets": [
        ["linkText=Add Expense »", "linkText"],
        ["css=.col:nth-child(1) .btn", "css:finder"],
        ["xpath=//a[contains(text(),'Add Expense »')]", "xpath:link"],
        ["xpath=//a[@onclick='openform()']", "xpath:attributes"],
        ["xpath=//p[2]/a", "xpath:position"],
        ["xpath=//a[contains(.,'Add Expense »')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "c2b44699-8f47-4603-a7ba-72dc8c662352",
      "comment": "",
      "command": "click",
      "target": "id=amount",
      "targets": [
        ["id=amount", "id"],
        ["name=amount", "name"],
        ["css=#amount", "css:finder"],
        ["xpath=//input[@id='amount']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/input", "xpath:idRelative"],
        ["xpath=//input", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "58b4d9c1-482e-4751-a7e9-6db22b56eee7",
      "comment": "",
      "command": "type",
      "target": "id=amount",
      "targets": [
        ["id=amount", "id"],
        ["name=amount", "name"],
        ["css=#amount", "css:finder"],
        ["xpath=//input[@id='amount']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/input", "xpath:idRelative"],
        ["xpath=//input", "xpath:position"]
      ],
      "value": "1000"
    }, {
      "id": "05ddc4f7-9548-4e71-9e33-aa30867853e2",
      "comment": "",
      "command": "click",
      "target": "id=date",
      "targets": [
        ["id=date", "id"],
        ["name=date", "name"],
        ["css=#date", "css:finder"],
        ["xpath=//input[@id='date']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/input[2]", "xpath:idRelative"],
        ["xpath=//input[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "b554f545-5a7c-48a2-9782-725a5dbce374",
      "comment": "",
      "command": "type",
      "target": "id=date",
      "targets": [
        ["id=date", "id"],
        ["name=date", "name"],
        ["css=#date", "css:finder"],
        ["xpath=//input[@id='date']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/input[2]", "xpath:idRelative"],
        ["xpath=//input[2]", "xpath:position"]
      ],
      "value": "2024-04-16"
    }, {
      "id": "9635beea-f416-47e5-b3a2-2531a9b695ff",
      "comment": "",
      "command": "click",
      "target": "id=description",
      "targets": [
        ["id=description", "id"],
        ["name=description", "name"],
        ["css=#description", "css:finder"],
        ["xpath=//input[@id='description']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/input[3]", "xpath:idRelative"],
        ["xpath=//input[3]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "9e3aec35-5213-497f-a2a9-5ff1d070dc8a",
      "comment": "",
      "command": "type",
      "target": "id=description",
      "targets": [
        ["id=description", "id"],
        ["name=description", "name"],
        ["css=#description", "css:finder"],
        ["xpath=//input[@id='description']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/input[3]", "xpath:idRelative"],
        ["xpath=//input[3]", "xpath:position"]
      ],
      "value": "Party"
    }, {
      "id": "57864fc3-27e7-4c14-872c-ffd17a797df8",
      "comment": "",
      "command": "click",
      "target": "id=mode",
      "targets": [
        ["id=mode", "id"],
        ["name=mode", "name"],
        ["css=#mode", "css:finder"],
        ["xpath=//select[@id='mode']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/select", "xpath:idRelative"],
        ["xpath=//select", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "0eca548d-9db4-4a7b-bb7c-3d38dde9f075",
      "comment": "",
      "command": "select",
      "target": "id=mode",
      "targets": [],
      "value": "label=Credit Card"
    }, {
      "id": "3ee2d1f3-3704-4897-8b51-f81a71d31356",
      "comment": "",
      "command": "click",
      "target": "id=category",
      "targets": [
        ["id=category", "id"],
        ["name=category", "name"],
        ["css=#category", "css:finder"],
        ["xpath=//select[@id='category']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/select[2]", "xpath:idRelative"],
        ["xpath=//select[2]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "49926e11-dfbb-4706-9ad3-1b6d485954a5",
      "comment": "",
      "command": "select",
      "target": "id=category",
      "targets": [],
      "value": "label=Food"
    }, {
      "id": "75b93302-564a-4b2c-aa45-ded081342de2",
      "comment": "",
      "command": "click",
      "target": "css=input:nth-child(11)",
      "targets": [
        ["css=input:nth-child(11)", "css:finder"],
        ["xpath=//input[@value='Submit']", "xpath:attributes"],
        ["xpath=//form[@id='expenseForm']/input[4]", "xpath:idRelative"],
        ["xpath=//input[4]", "xpath:position"]
      ],
      "value": ""
    }, {
      "id": "d558ab04-3482-4083-a4ac-caab6bd115f6",
      "comment": "",
      "command": "click",
      "target": "linkText=View Expense »",
      "targets": [
        ["linkText=View Expense »", "linkText"],
        ["css=.col:nth-child(2) .btn", "css:finder"],
        ["xpath=//a[contains(text(),'View Expense »')]", "xpath:link"],
        ["xpath=//a[contains(@href, './new_view.html')]", "xpath:href"],
        ["xpath=//div[2]/p[2]/a", "xpath:position"],
        ["xpath=//a[contains(.,'View Expense »')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "1fcc8ebb-b665-414b-9f4d-81467bf6b366",
      "comment": "",
      "command": "click",
      "target": "linkText=Home",
      "targets": [
        ["linkText=Home", "linkText"],
        ["css=li:nth-child(1) .btn", "css:finder"],
        ["xpath=//a[contains(text(),'Home')]", "xpath:link"],
        ["xpath=//a[contains(@href, './1.html')]", "xpath:href"],
        ["xpath=//a", "xpath:position"],
        ["xpath=//a[contains(.,'Home')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "a0035c4a-70be-459d-adb4-afbbd91efcfa",
      "comment": "",
      "command": "click",
      "target": "linkText=Get Report »",
      "targets": [
        ["linkText=Get Report »", "linkText"],
        ["css=.col:nth-child(3) .btn", "css:finder"],
        ["xpath=//a[contains(text(),'Get Report »')]", "xpath:link"],
        ["xpath=//a[contains(@href, './report.html')]", "xpath:href"],
        ["xpath=//div[3]/p[2]/a", "xpath:position"],
        ["xpath=//a[contains(.,'Get Report »')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "b1a163d3-2291-488d-a4c5-72b434845f63",
      "comment": "",
      "command": "click",
      "target": "linkText=Home",
      "targets": [
        ["linkText=Home", "linkText"],
        ["css=li:nth-child(1) > a", "css:finder"],
        ["xpath=//a[contains(text(),'Home')]", "xpath:link"],
        ["xpath=//a[contains(@href, '1.html')]", "xpath:href"],
        ["xpath=//a", "xpath:position"],
        ["xpath=//a[contains(.,'Home')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "9769669b-760c-4172-a159-783cb0940f32",
      "comment": "",
      "command": "click",
      "target": "linkText=log out",
      "targets": [
        ["linkText=log out", "linkText"],
        ["css=.nav-item:nth-child(4) > .nav-link", "css:finder"],
        ["xpath=//a[contains(text(),'log out')]", "xpath:link"],
        ["xpath=//a[contains(@href, 'homepage.html')]", "xpath:href"],
        ["xpath=//li[4]/a", "xpath:position"],
        ["xpath=//a[contains(.,'log out')]", "xpath:innerText"]
      ],
      "value": ""
    }, {
      "id": "5fb7dcee-a36c-4774-8df3-edac03e18be1",
      "comment": "",
      "command": "click",
      "target": "css=.hero",
      "targets": [
        ["css=.hero", "css:finder"],
        ["xpath=//section", "xpath:position"]
      ],
      "value": ""
    }]
  }],
  "suites": [{
    "id": "b962e5d0-1571-4d78-8d2a-c4c25faf3879",
    "name": "Default Suite",
    "persistSession": False,
    "parallel": False,
    "timeout": 300,
    "tests": ["379c4400-ef96-4964-b51e-1a06d5995f84"]
  }],
  "urls": ["http://localhost/"],
  "plugins": []
}