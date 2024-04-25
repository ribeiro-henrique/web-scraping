import { Injectable } from "@nestjs/common";
import puppeteer from "puppeteer";

@Injectable()
export class MedCofService {
    async getRmais(): Promise<[{}]> {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://semiextensivo.grupomedcof.com.br/r-cirurgia');

    const semiExtensivo = await page.evaluate(() => {     
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

    const semiExtensivoElite = await page.evaluate(() => {     
        const produto = document.getElementsByClassName('mb-2')[1]
        const valorCheio = document.getElementsByClassName('mt-2 text-slate-50')[3];
        const quantidade = document.getElementsByClassName('mt-2 text-slate-50')[2];
        const parcela = document.getElementsByClassName('text-[#34D399]')[1]
        return {
            empresa: 'Grupo Medcof',
            url: 'https://semiextensivo.grupomedcof.com.br/r-cirurgia',
            produto: produto.textContent.trim(),
            valor_cheio: valorCheio.textContent.trim(),
            valor_parcelado: `${quantidade.textContent.trim()} ${parcela.textContent.trim()}`,
         } 	
     });

     const semiExtensivoPremium = await page.evaluate(() => {     
        const produto = document.getElementsByClassName('mb-2')[2]
        const valorCheio = document.getElementsByClassName('mt-2 text-slate-50')[5];
        const quantidade = document.getElementsByClassName('mt-2 text-slate-50')[4];
        const parcela = document.getElementsByClassName('text-[#34D399]')[2]
        return {
            empresa: 'Grupo Medcof',
            url: 'https://semiextensivo.grupomedcof.com.br/r-cirurgia',
            produto: produto.textContent.trim(),
            valor_cheio: valorCheio.textContent.trim(),
            valor_parcelado: `${quantidade.textContent.trim()} ${parcela.textContent.trim()}`,
         } 	
     });

    await browser.close();

    return [{semiExtensivo, semiExtensivoElite, semiExtensivoPremium}]
    };

    async getRUm(): Promise<[{}]> {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
    
        // Navigate the page to a URL
        await page.goto('https://semiextensivo.grupomedcof.com.br/r1-acesso-direto#prices');
    
        const semiExtensivo = await page.evaluate(() => {     
           const produto = document.getElementsByClassName('mb-2')[0]
           const valorCheio = document.getElementsByClassName('mt-2 text-slate-50')[1];
           const quantidade = document.getElementsByClassName('mt-2 text-slate-50')[0];
           const parcela = document.getElementsByClassName('text-[#34D399]')[0]
           return {
               empresa: 'Grupo Medcof',
               url: 'https://semiextensivo.grupomedcof.com.br/r1-acesso-direto#prices',
               produto: produto.textContent.trim(),
               valor_cheio: valorCheio.textContent.trim(),
               valor_parcelado: `${quantidade.textContent.trim()} ${parcela.textContent.trim()}`,
            } 	
        });
    
        const semiExtensivoElite = await page.evaluate(() => {     
            const produto = document.getElementsByClassName('mb-2')[1]
            const valorCheio = document.getElementsByClassName('mt-2 text-slate-50')[3];
            const quantidade = document.getElementsByClassName('mt-2 text-slate-50')[2]
            const parcela = document.getElementsByClassName('text-[#34D399]')[1]
            return {
                empresa: 'Grupo Medcof',
                url: 'https://semiextensivo.grupomedcof.com.br/r1-acesso-direto#prices',
                produto: produto.textContent.trim(),
                valor_cheio: valorCheio.textContent.trim(),
                valor_parcelado: `${quantidade.textContent.trim()} ${parcela.textContent.trim()}`,
             } 	
         });
    
         const semiExtensivoPremium = await page.evaluate(() => {     
            const produto = document.getElementsByClassName('mb-2')[2]
            const valorCheio = document.getElementsByClassName('mt-2 text-slate-50')[5];
            const quantidade = document.getElementsByClassName('mt-2 text-slate-50')[4];
            const parcela = document.getElementsByClassName('text-[#34D399]')[2]
            return {
                empresa: 'Grupo Medcof',
                url: 'https://semiextensivo.grupomedcof.com.br/r-cirurgia',
                produto: produto.textContent.trim(),
                valor_cheio: valorCheio.textContent.trim(),
                valor_parcelado: `${quantidade.textContent.trim()} ${parcela.textContent.trim()}`,
             } 	
         });
    
        await browser.close();
    
        return [{semiExtensivo, semiExtensivoElite, semiExtensivoPremium}]
        }
}