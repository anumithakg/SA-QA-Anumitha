import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Negative login with locked_out_user', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('locked_out_user', 'secret_sauce');
  await login.assertLoginError();
});