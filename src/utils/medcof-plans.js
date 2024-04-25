import puppeteer from "puppeteer";

const getMedCofPlan = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://semiextensivo.grupomedcof.com.br/r-cirurgia');

    const firstCard = await page.evaluate(() => {
        const produto = document.getElementsByClassName('mb-2')[0]
        const valorCheio = document.getElementsByClassName('mt-2 text-slate-50')[1];
        const quantidade = document.getElementsByClassName('mt-2 text-slate-50')[0];
        const parcela = document.getElementsByClassName('text-[#34D399]')[0]
        return {
            empresa: 'Grupo Medcof',
            url: 'https://semiextensivo.grupomedcof.com.br/r-cirurgia',
            produto: produto.textContent.trim(),
            valor_cheio: valorCheio.textContent.trim(),
            valor_parcelado: `${quantidade.textContent.trim()} ${parcela.textContent.trim()}`,
        }
    });

    await browser.close();

    return firstCard

}

export default {
    getMedCofPlan
}
