import { Selector } from 'testcafe';

fixture `Data-Driven Tests`
    .page `https://peopleportal2.sapient.com/`;

test('login into people portal and update emergency detail', async t => {
    const loginSelector = Selector('.idp').nth(0);
    const loginInput = Selector('#userNameArea');
    const passwordInput = Selector('#passwordArea');
    const submitButton = Selector('#submitButton');
    const emergencyId = Selector('#dvEmergencyContacts');
    const emergenyContactDropDown = emergencyId.find('#ddlEmergencyContacts')
    const emergenyContactOption = emergenyContactDropDown.find('option');
    const saveButton = emergencyId.find('a').nth(4)
    const dialog = Selector('#dvMessageBox').find('span')

    await t
    .click(loginSelector)
    .typeText(loginInput, 'anksaini1')
    .typeText(passwordInput, 'Hsukna@1959')
    .click(submitButton)
    .click(emergenyContactDropDown)
    .click(emergenyContactOption.withText('Naresh Saini'))
    .expect(saveButton.visible).ok()
    .click(saveButton)
    .expect(dialog.textContent).contains('Contact saved successfully.');
});
