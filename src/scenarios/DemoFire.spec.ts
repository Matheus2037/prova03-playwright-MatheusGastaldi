import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import DemoFirePage from '../support/pages/DemoFirePage';

test.describe('Testes funcionais no formulário de contato', () => {
  let demoFirePage: DemoFirePage;
    const CONFIG = join(__dirname, '../support/fixtures/config.yml');
    const BASE_URL = TheConfig.fromFile(CONFIG)
      .andPath('application.demofire')
      .retrieveData();

  test.beforeEach(async ({ page }) => {
    demoFirePage = new DemoFirePage(page);
    await page.goto(BASE_URL);
  });

  test('Validar envio de mensagem pelo formulário de contato', async () => {
    await demoFirePage.preencherCamposValidos();
    await demoFirePage.enviarFormulario();
    await demoFirePage.validarEnvio();
  });
});
