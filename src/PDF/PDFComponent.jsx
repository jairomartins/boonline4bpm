import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import OcorrenciaForm from './OcorrenciaForm';
import { Button } from 'react-bootstrap';


pdfMake.vfs = pdfFonts.pdfMake.vfs;



const generatePDF = (boletim) => {
  var {natureza, data, horario, bairro, municipio, numeroEndereco, numero, latitude, longitude, efetivo, endereco, envolvidos, materiaisApreendidos, historicohtml } = boletim;
  // Se o numero do endereço estivar undefined define como S/N (sem numero)
  numeroEndereco = numeroEndereco ?? 'S/N';
  // Define o conteúdo do PDF
  const conteudoPDF = [];

  // Estilos para as seções
  const styles = {
    header: {
      fontSize: 14,
      bold: true,
      margin: [0, 10, 0, 5],
      color: "red",
    },
    subheader: {
      fontSize: 14,
      bold: true,
      margin: [0, 10, 0, 5],
    },
    separador: {
      margin: [0, 10, 0, 5],
      decoration: 'underline',
    },
    justificado:{
      alignment: 'justify',
    },
    centralizado:{
      alignment: 'center',
    },
  };

 
  //cabecalho do pdf
  conteudoPDF.push([
    {
      layout: 'noBorders', // optional
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 0,
        widths: [ '*', 'auto', '*'],

        body: [
          // [ 'First', 'Second', 'zero'],
          // [ 
          //   {rowSpan:5, 
          //     stack: [
          //       {alignment: 'left',
          //          image: `data:image/png;base64,${pmmabase64.img}`,
          //       width: 45,
          //       height: 45 // Use a imagem importada aqui
          //      }, 
          //     ],
          //   },
          //   {text:"ESTADO DO MARANHÃO", style:'centralizado'},
          //   {rowSpan:5, 
          //     stack: [
          //       {alignment: 'right', 
          //         image: `data:image/png;base64,${imagemBatalhao64base.img}`,
          //       width: 45,
          //       height: 45 // Use a imagem importada aqui
          //      }, 
          //     ],
          //   },
          // ],
          [ ' ', {text:"SECRETARIA DE ESTADO DA SEGURANÇA PÚBLICA",style:'centralizado'}, ' '],
          [ ' ', {text:"POLÍCIA MILITAR DO MARANHÃO",style:'centralizado'}, ' '],
          [ ' ', {text:"COMANDO DO POLICIAMENTO DE ÁREA DO INTERIOR – CPAI-6",style:'centralizado'}, ' '],
          [ ' ', {text:"4º BATALHÃO DE POLÍCIA MILITAR",style:'centralizado'}, ' '],
        ],heights: [12,12],
      }
    },
    
  ])

  // Função para adicionar uma linha separadora
  const separador = () => ({ text: '\n', style: 'separador' });

  // Função para adicionar uma seção com seu título e conteúdo
  const adicionarSecao = (titulo, conteudo) => {
    conteudoPDF.push({ text: titulo, style: 'header' });
    // conteudoPDF.push({ text: '--------------------------------------------', style: 'subheader' });
    // Verificando se o conteúdo é um array para evitar problemas com o spread operator
  if (Array.isArray(conteudo)) {
    conteudoPDF.push(...conteudo);
  } else {
    conteudoPDF.push(conteudo);
  }
    // conteudoPDF.push(...conteudo);
  };
    
  // Adiciona seção de Identificação

  const novaData = data.split("/")
  const ano = novaData[2]

  adicionarSecao('DADOS DA OCORRÊNCIA',{ 
    text: [
      { text: 'Número: ', bold: true },
      { text: `${numero}/${ano}\n` },
      { text: 'Natureza: ', bold: true },
      { text: `${natureza}\n` },
      { text: 'Data: ', bold: true },
      { text: `${data}\n` },
      { text: 'Horário: ', bold: true },
      { text: `${horario}\n` },
      { text: 'Logradouro ', bold: true },
      { text: `${endereco}, ${numeroEndereco}\n`},
      { text: 'Bairro: ', bold: true },
      { text: `${bairro}\n` },
      { text: 'Município: ', bold: true },
      { text: `${municipio}\n` },
      { text: 'Latitude: ', bold: true },
      { text: `${latitude}` },
      { text: 'Longitude: ', bold: true },
      { text: `${longitude}\n` }
    ]
    
  },separador());

  // Adiciona seção de Envolvidos
  const envolvidosDetails = envolvidos.map((envolvido) => ({
    text: [
      { text: 'Tipo de Envolvimento: ', bold: true },
      { text: `${envolvido.tipo}\n` },
      { text: 'Nome: ', bold: true },
      { text: `${envolvido.nome}\n` },
      { text: 'CPF: ', bold: true },
      { text: `${envolvido.cpf}\n` },
      { text: 'Sexo: ', bold: true },
      { text: `${envolvido.sexo}\n` },
      { text: 'Data de Nascimento: ', bold: true },
      { text: `${envolvido.nascimento}\n` },
      { text: 'Telefone: ', bold: true },
      { text: `${envolvido.telefone}\n` },
      { text: 'Nome da Mãe: ', bold: true },
      { text: `${envolvido.nomeMae}\n` },
      { text: 'Observações: ', bold: true },
      { text: `${envolvido.observacoes}\n` },
      { text: 'Ponto de Referência: ', bold: true },
      { text: `${envolvido.pontoReferencia}\n` },
      { text: 'Endereço: ', bold: true },
      { text: `${envolvido.endereco}, Número: ${envolvido.numero}\n` },
      { text: 'Bairro: ', bold: true },
      { text: `${envolvido.bairro}\n` },
      { text: 'Município: ', bold: true },
      { text: `${envolvido.municipio}\n` }
    ],
    margin: [0, 0, 0, 5]
  }));
  adicionarSecao('ENVOLVIDOS', envolvidosDetails);
  conteudoPDF.push(separador());

  // Adiciona seção de Materiais apreendidos
  const listaDeMateriaisApreendidos = {
    // layout: 'lightHorizontalLines',
    table: {
      headerRows: 1,
      widths: ['*','*'],
      body: [['DESCRIÇÃO', 'QUANTIDADE']], // Inicialmente vazia para ser preenchida dinamicamente
      heights: [8, 8, 8,8],
    },
  };
  materiaisApreendidos.forEach((material) => {
    // Para cada membro, adiciona uma linha à tabela
    listaDeMateriaisApreendidos.table.body.push([
      material.descricao,
      material.quantidade,
    ]);
  });

  adicionarSecao('ARMAS E OBJETOS APREENDIDOS', listaDeMateriaisApreendidos);
  conteudoPDF.push(separador());

  // Adiciona seção de Histórico
  adicionarSecao('HISTÓRICO', [
    { text: historicohtml.replace(/<[^>]+>/g, '').replace(/&nbsp;/g,''), margin: [0, 0, 0, 10], style:'justificado'},
    separador(),
  ]);

  const efetivoDetails = {
    // layout: 'lightHorizontalLines',
    table: {
      headerRows: 1,
      widths: [80,60, 200,140],
      body: [['GRADUAÇÃO', 'N°/BARRA', 'NOME COMPLETO', 'ASS.']], // Inicialmente vazia para ser preenchida dinamicamente
      heights: [8, 8, 8,8],
    },
  };
  
  efetivo.forEach((membro) => {
    // Para cada membro, adiciona uma linha à tabela
    efetivoDetails.table.body.push([
      membro.graduacao,
      membro.numeroBarra,
      membro.nome,
      '',
    ]);
  });

  adicionarSecao('EFETIVO EMPREGADO', efetivoDetails);
  conteudoPDF.push(separador());


  adicionarSecao('VERSÃO DIGITAL', [
    { qr: 'text in QR', fit: '64' },]
  );
  // Define o documento PDF
  const documentDefinition = {
    // watermark: { text: '4°BPM-PMMA', color: 'blue', opacity: 0.02, bold: true, italics: false },
    content: conteudoPDF,
    styles: styles,
  };

  // Gera o PDF
  const pdfDoc = pdfMake.createPdf(documentDefinition);
  pdfDoc.open();
  // Opcionalmente, você pode definir o nome do arquivo PDF ao salvar
  pdfDoc.download(`boletim_${numero}_${data}.pdf`);
};

// Exemplo de uso:
const PDFComponent = ({boletim}) => {
 
  return (
    <>
      <Button onClick={() => generatePDF(boletim)}>Gerar PDF Modelo 2024</Button>

      {/* <OcorrenciaForm/> */}
    </>


  );
};

export default PDFComponent;
