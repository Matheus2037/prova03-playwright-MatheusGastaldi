import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ToolShapeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  
  getCampoPrimeiroNome(): Locator {
    return this.page.locator('#first_name');
  }

  getCampoUltimoNome(): Locator {
    return this.page.locator('#last_name');
  }

  getCampoEmail(): Locator {
    return this.page.locator('#email');
  }

  getCampoAssunto(): Locator {
    return this.page.locator('#subject');
  }

  getCampoMensagem(): Locator {
    return this.page.locator('#message');
  }

  getCampoAnexo(): Locator {
    return this.page.locator('#attachment');
  }

  getBotaoEnviar(): Locator {
    return this.page.locator('input[data-test="contact-submit"]');
  }
}
