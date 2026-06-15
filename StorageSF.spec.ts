import {test, expect} from '@Playwright/test'

test("Store the Saleforce credentials", async ({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com") 
    await page.locator("#password").fill("TestLeaf@2025") 
    await page.locator("//input[@class='button r4 wide primary']").click()

    await page.context().storageState({path:'Data/Saleforce.json'})
})