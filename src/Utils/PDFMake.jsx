import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class BoletimOcorrenciaPDF extends React.Component {
  generatePDF = () => {
    const ocorrencia = {
      numero: '2023-001',
      data: '10/11/2023',
      local: 'Rua Principal, 123',
      envolvidos: [
        { nome: 'João Silva', idade: 30, endereco: 'Av. Central, 456' },
        { nome: 'Maria Oliveira', idade: 25, endereco: 'Rua Secundária, 789' },
      ],
      historico: 'Ocorreu uma briga na rua principal envolvendo João Silva e Maria Oliveira.',
      policiais: [
        { nome: 'Sargento Pereira', cargo: 'Sargento' },
        { nome: 'Soldado Santos', cargo: 'Soldado' },
      ],
    };

    const content = [
      { text: 'Boletim de Ocorrência', style: 'header' },
      { text: `Número: ${ocorrencia.numero}`, style: 'subheader' },
      { text: `Data: ${ocorrencia.data}`, style: 'subheader' },
      { text: `Local: ${ocorrencia.local}`, style: 'subheader' },
      { text: 'Envolvidos', style: 'subheader' },
      this.buildTable(['Nome', 'Idade', 'Endereço'], ocorrencia.envolvidos),
      { text: 'Histórico da Ocorrência', style: 'subheader' },
      { text: ocorrencia.historico },
      { text: 'Policiais Envolvidos', style: 'subheader' },
      this.buildTable(['Nome', 'Cargo'], ocorrencia.policiais),
    ];

    const styles = {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 10],
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5],
      },
      table: {
        margin: [0, 5, 0, 15],
      },
      tableHeader: {
        bold: true,
        fontSize: 12,
        color: 'black',
      },
    };

    const documentDefinition = {
      content,
      styles,
    };

    pdfMake.createPdf(documentDefinition).download('boletim_ocorrencia.pdf');
  };

  buildTable(header, data) {
    const body = [];
    body.push(header);

    data.forEach((row) => {
      const rowData = Object.values(row);
      body.push(rowData);
    });

    return {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*'],
        body,
      },
      style: 'table',
    };
  }

  render() {
    return (
      <div>
        <h2>Boletim de Ocorrência</h2>
        <button onClick={this.generatePDF}>Gerar PDF</button>
      </div>
    );
  }
}

export default BoletimOcorrenciaPDF;
