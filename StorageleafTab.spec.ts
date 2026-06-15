import test from '@Playwright/test'

test("storing Leaftabs login", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/")
    await page.locator("#username").fill("democsr") 
    await page.locator("#password").fill("crmsfa") 
    await page.locator(".decorativeSubmit").click() 

    await page.context().storageState({path:'Data/LeafLogin.json'})
})
