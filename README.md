# Installing TestCafe
npm install -g testcafe

# Run
testcafe browser 'path/to/test/file.js'

# Generate Report
testcafe browser 'path/to/test/file.js' --reporter json

# Run concurrent file
testcafe -c 3 browser 'path/to/test/file.js'

# Report Generator
testcafe chrome 'path/to/test/file.js' --reporter json

# Run on remote device
testcafe remote 'path/to/test/file.js' --qr-code

