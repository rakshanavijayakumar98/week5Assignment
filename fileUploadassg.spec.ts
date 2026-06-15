import {test, expect} from '@Playwright/test'

test("File Upload using SetInputFiles", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.waitForTimeout(3000)
    await page.locator("#file-upload").setInputFiles("./Testdata/sampleimage.jpeg") //uploaded the image using choose file button which has input tag and type is file
    await page.waitForTimeout(3000)

})
    
test.only("File upload using Event listener",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
     await page.waitForTimeout(3000)
    //create an event
    const uploadFile = page.waitForEvent('filechooser')
    //Do action
     await page.locator("//input[@id='file-upload']").click()
    //resolve the promise
    const ImportFile = await uploadFile
    await ImportFile.setFiles("./Testdata/samplefile.pdf") 
})