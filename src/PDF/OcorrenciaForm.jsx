import React, { useState } from 'react';
import Select from 'react-select';

const OcorrenciaForm = () => {
  const [naturezas, setNaturezas] = useState([]);
  const [selectedNaturezas, setSelectedNaturezas] = useState([]);
  const [inputNatureza, setInputNatureza] = useState('');

  const naturezasOptions = [
    { label: 'Incêndio', value: 'Incêndio' },
    { label: 'Furto', value: 'Furto' },
    { label: 'Roubo', value: 'Roubo' },
    // Adicione mais opções conforme necessário
  ];

  const handleNaturezaChange = (selectedOptions) => {
    setSelectedNaturezas(selectedOptions);
  };

  const handleInputChange = (input) => {
    setInputNatureza(input);
  };

  const handleNaturezaCreate = (input) => {
    // Adicione a nova natureza à lista de naturezas
    setNaturezas([...naturezas, { label: input, value: input }]);
    // Adicione a nova natureza à lista de naturezas selecionadas
    setSelectedNaturezas([...selectedNaturezas, { label: input, value: input }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faça o envio do formulário com as naturezas selecionadas
    console.log('Naturezas selecionadas:', selectedNaturezas);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="naturezas">Natureza da Ocorrência:</label>
      <Select
        id="naturezas"
        isMulti
        options={naturezasOptions}
        value={selectedNaturezas}
        onChange={handleNaturezaChange}
        onInputChange={handleInputChange}
        onCreateOption={handleNaturezaCreate}
        inputValue={inputNatureza}
      />

      <button type="submit">Cadastrar Ocorrência</button>
    </form>
  );
};

export default OcorrenciaForm;
