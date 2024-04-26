import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class MedGrupoService {
  async getRmais(): Promise<[object]> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://medgrupo.com.br/rmais/');

    const rMaisCM = await page.evaluate(() => {
      const produto = document.getElementsByClassName(
        'card-pagamento__title',
      )[0];
      const parcelaUmAno = document.getElementsByClassName(
        'card-pagamento__text-parcelado',
      )[0];
      const parcelaDoisAnos = document.getElementsByClassName(
        'card-pagamento__opcao-total card-pagamento__opcao-total--maior',
      )[0];
      const parcelaExAluno = document.getElementsByClassName(
        'card-pagamento__opcao-total--maior',
      )[1];
      return {
        empresa: 'Med Grupo',
        url: 'https://medgrupo.com.br/rmais/',
        produto: produto.textContent.trim(),
        parcela_um_ano: parcelaUmAno.textContent.trim(),
        parcela_dois_anos: parcelaDoisAnos.textContent.trim(),
        parcela_ex_aluno: parcelaExAluno.textContent.trim(),
      };
    });

    await browser.close();

    return [{ rMaisCM }];
  }
}
