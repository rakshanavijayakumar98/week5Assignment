import test from '@Playwright/test'

test("Download the file", async({page})=> {
    await page.goto("https://the-internet.herokuapp.com/download")
    await page.waitForTimeout(2000)
    
    //create an event
    const downloadJpeg = page.waitForEvent('download')
    //do action
    await page.locator("//a[text()='random_data.txt']").click()
    await page.waitForTimeout(2000)
    //resolve the action
    const downloadFile = await downloadJpeg

    await downloadFile.saveAs("Testdata/"+ downloadFile.suggestedFilename())
})
