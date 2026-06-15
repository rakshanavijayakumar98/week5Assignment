import {test, expect} from '@Playwright/test'

test ("File uploading on Web application", async({page})=> {
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com") //id locator type is used here
    await page.locator("#password").fill("TestLeaf@2025") //fill will clear the existing value and then enter the new value
    await page.locator("//input[@class='button r4 wide primary']").click()

    await page.locator("//div[@class='slds-icon-waffle']").click() //clicking on App Launcher icon
    await page.waitForTimeout(2000)

    await page.locator("//button[text()='View All']").click()   //clicking on View all
    await page.waitForTimeout(2000)

    await page.locator("//p[text()='Accounts']").click() //clicking on accounts option

    await page.locator("//div[text()='New']").click() //click on New
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='Name']").fill("Rakshana") //entering account name

    await page.locator("//label[text()='Type']").click() //click on Type dropdown option
    await page.locator("//span[text()='Prospect']").click() //selecting prospect option

    await page.locator("//label[text()='Industry']").click() //click on Industry dropdown option
    await page.locator("//span[text()='Banking']").click() //selecting banking option

    await page.locator("//button[@name='SaveEdit']").click() //click on save button
    await page.waitForTimeout(2000)
    await expect (page.locator("//slot[@name='primaryField']")).toHaveText("Rakshana") //Assert the Account created with the primary name
    await page.waitForTimeout(5000)
    //await page.mouse.wheel(0, 3000)

    await page.locator("//input[@type='file']").last().setInputFiles('./Testdata/sampleimage.jpeg')
    await page.waitForTimeout(5000)
    await page.locator("//span[text()='Done']").click() //clicking on done button
    await page.waitForTimeout(2000)

    //await page.mouse.wheel(0, 3000)
    await expect(page.locator("//span[@title='sampleimage']")).toHaveText('sampleimage') //assert the file is uploaded
})
