import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import DemoFireElements from '../elements/DemoFireElements';
import BasePage from './BasePage';


const nome = faker.person.firstName();
const email = faker.internet.email();
const assunto = faker.lorem.words();
const mensagem = faker.lorem.sentence(20);

export default class CadastroPage extends BasePage {
  readonly demoFireElements: DemoFireElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.demoFireElements = new DemoFireElements(page);
  }
  
  async preencherCamposValidos() {
    await this.demoFireElements.getCampoNome().fill(nome);
    await this.demoFireElements.getCampoEmail().fill(email);
    await this.demoFireElements.getCampoAssunto().fill(assunto);
    await this.demoFireElements.getCampoComentario().click();
    await this.demoFireElements.getCampoComentario().fill(mensagem);
  }

  async enviarFormulario() {
    await this.demoFireElements.getBotaoEnviar().click();
  }

  async validarEnvio() {
    const tituloSucesso = this.page.getByRole('heading', { name: 'Thank You' });
    const paragrafoMensagem = this.page.locator('p:has-text("Thank you for your comments")');

    await expect(tituloSucesso).toBeVisible({ timeout: 10000 });
    await expect(paragrafoMensagem).toBeVisible();

    await expect(paragrafoMensagem).toContainText(
    `Our reply will be sent to your email: ${email}`,
    { ignoreCase: true }
    );
  }
}
