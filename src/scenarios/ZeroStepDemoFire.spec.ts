import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep demofire', async ({ page }) => {

  const aiArgs = { page, test };
  await page.goto('https://demo.testfire.net/feedback.jsp');
  await ai('Clique no link "Sign In"', aiArgs);
  await ai('Preencha o campo "Username" com "admin"', aiArgs);
  await ai('Preencha o campo "Password" com "admin"', aiArgs);
  await ai('Clique no botão de Login', aiArgs);
  await ai('Clique no link "here"', aiArgs);
  await ai('Preencha o campo "Current Password" com "admin"', aiArgs);
  await ai('Clique no botão "Change Password"', aiArgs);
});
