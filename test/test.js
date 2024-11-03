const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Teste de Selenium', function() {
    let driver;

    // Aumentar o timeout para 10 segundos
    this.timeout(10000);

    before(async function() {
        try {
            driver = await new Builder().forBrowser('chrome').build();
        } catch (error) {
            console.error('Erro ao iniciar o WebDriver:', error);
            throw error; // Para garantir que o teste falhe
        }
    });

    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });

    it('Deve abrir a página do Google e verificar o título', async function() {
        await driver.get('http://www.google.com');
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Google');

       await driver.sleep(5000)
    });
});
