module.exports = async function (browser, inputParameters) {


const main = async () => {
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle2' })
  await page.pdf({ path: process.env.ARTIFACTS_PATH  + "/" + 'hn.pdf', format: 'A4' })

  await browser.close()
}

main()

};