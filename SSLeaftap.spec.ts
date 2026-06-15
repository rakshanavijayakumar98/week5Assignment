import {test,expect} from '@playwright/test'

test.use({storageState:'Data/LeafLogin.json'})

test.only("LeafTaps Login Using Storage", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.locator(`text='CRM/SFA'`).click()
    await page.waitForTimeout(2000)
    await expect(page.locator("//a[text()='My Home']")).toBeVisible()
})

test.fail("Invalid login", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.locator(`text='CRM/SFAdfgdfgh'`).click()
})

test.skip("Skip the lead creation", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.locator(`text='CRM/SFA'`).click()
    await page.waitForTimeout(2000)
    await page.locator(`text='Leads'`).click() 
    await page.waitForTimeout(2000) 
    await page.locator(`text='Create Lead'`).first().click()
})
test.fixme("Broken testcase", async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.locator(`text='Leads'`).click() 
    await page.waitForTimeout(2000) 

})
