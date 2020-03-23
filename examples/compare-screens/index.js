import { Selector } from 'testcafe';
import compareScreenshots from '../../server/compare-screenshots'
import { UAParser } from 'ua-parser-js'

fixture `compare screens`
  .page `https://peopleportal2.sapient.com/`;

const screenshotPath = "./examples/compare-screens/screenshots/",
modelPath = "models/";

test('Screenshot test', async t => {
	const userAgent = await t.eval(() => window.navigator.userAgent);
	const browserName = new UAParser().setUA(userAgent).getBrowser().name;

	const testScreenshotPath = "tests/",
		imgName = browserName + ".png";

	const screenshotName = screenshotPath + testScreenshotPath + imgName,
    screenshotModel = screenshotPath + modelPath    + imgName;

	const loginSelector = Selector('.idp').nth(0);
	const loginInput = Selector('#userNameArea');
	const passwordInput = Selector('#passwordArea');
	const submitButton = Selector('#submitButton');

	await t
		.click(loginSelector)
		.typeText(loginInput, 'anksaini1')
		.typeText(passwordInput, '*****')
		.click(submitButton)
		.takeScreenshot(testScreenshotPath + imgName);

	await compareScreenshots(screenshotModel, screenshotName);

});
