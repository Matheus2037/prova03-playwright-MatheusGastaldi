import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ToolShapeElements from '../elements/ToolShopElements';
import BasePage from './BasePage';

export default class CadastroPage extends BasePage {
  readonly toolShapeElements: ToolShapeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.toolShapeElements = new ToolShapeElements(page);
  }

  async preencherCamposValidos() {
    const nome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = faker.internet.email();
    const mensagem = faker.lorem.sentence(20);

    await this.toolShapeElements.getCampoPrimeiroNome().fill(nome);
    await this.toolShapeElements.getCampoUltimoNome().fill(sobrenome);
    await this.toolShapeElements.getCampoEmail().fill(email);
    await this.toolShapeElements.getCampoAssunto().selectOption('customer-service');
    await this.toolShapeElements.getCampoMensagem().fill(mensagem);
  }

  async anexarArquivo(caminhoArquivo = '../playwright-e2e/src/support/fixtures/test.txt') {
    await this.toolShapeElements.getCampoAnexo().setInputFiles(caminhoArquivo);
  }

  async enviarFormulario() {
    await this.toolShapeElements.getBotaoEnviar().click();
  }

  async validarEnvio() {
    await this.page.waitForTimeout(3000);
    const alertas = this.page.locator('div[role="alert"]');
  
    if (await alertas.count() === 0) {
      console.log('⚠️ Nenhum alerta encontrado no DOM.');
      await this.page.screenshot({ path: 'artifacts/no_alert.png', fullPage: true });
      throw new Error('Nenhum alerta de sucesso foi exibido.');
    }
  
    const texto = await alertas.first().innerText();
    console.log('🧩 Texto encontrado no alerta:', texto);
  
    await expect(texto).toContain('Thanks for your message');
  }
}
