import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class DemoFireElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  
  getCampoNome(): Locator {
    return this.page.locator('input[name="name"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[name="email_addr"]');
  }

  getCampoAssunto(): Locator {
    return this.page.locator('input[name="subject"]');
  }

  getCampoComentario(): Locator {
    return this.page.locator('textarea[name="comments"]');
  }

  getBotaoEnviar(): Locator {
    return this.page.locator('input[name="submit"]');
  }
}
