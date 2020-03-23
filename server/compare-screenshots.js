import looksSame from 'looks-same'

export default function (screenshotPath, modelPath) {
	looksSame(screenshotPath, modelPath, function(error, {equal}) {
		// equal will be true, if images looks the same
		console.log('error---',error,'equal-----',equal)
		if(equal) {
			console.log(" Images are equal");
		} else {
			console.log("Passed: false");
			throw new Error("Images are different");
		}
	});
}
