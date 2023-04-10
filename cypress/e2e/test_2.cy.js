import { Login } from '../pages/Login';
import { HomePage } from '../pages/HomePage';

const LoginPage = new Login();
const MyPage = new HomePage();


describe('Second test', () => {

    it('Visit site again, log in and log out', () => {
        LoginPage.navigate(),
        LoginPage.getEmailInput().type('testowyqa@qa.team'),
        LoginPage.getPasswordInput().type('QA!automation-1'),
        LoginPage.getLogInButton().click(),
        MyPage.getMenuButton().click(),
        MyPage.getLogOutButton2().click()
    });

    
})