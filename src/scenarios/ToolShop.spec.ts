import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import ToolShopPage from '../support/pages/ToolShopPage';

test.describe('Testes funcionais no formulário de contato', () => {
  let toolShopPage: ToolShopPage;
  const BASE_URL = "https://practicesoftwaretesting.com/contact"

  test.beforeEach(async ({ page }) => {
    toolShopPage = new ToolShopPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar envio de mensagem pelo formulário de contato', async () => {
    await toolShopPage.preencherCamposValidos();
    await toolShopPage.anexarArquivo();
    await toolShopPage.enviarFormulario();
    await toolShopPage.validarEnvio();
  });
});
