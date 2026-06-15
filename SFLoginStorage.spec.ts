import {test,expect} from '@playwright/test'

test.use({storageState:'Data/Saleforce.json'})

test.only("Salesforce Login Using Storage", async({page})=>{
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home")    
})

test("Page navigation", async({page})=>{
    test.slow()
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    const homePageTitle = await page.title()
    console.log("Title is: " + homePageTitle)
})

test.fail("Failed case",async({page})=>{
    await page.goto("https://testleaf.lightning.force.com/lightning")
    await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home") //when we give valid url then tc will be failed state

})

