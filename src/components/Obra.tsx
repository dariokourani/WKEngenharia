import React from 'react';

interface ObraProps {
  id: number;
  titulo: string;
  descricao: string;
  localizacao: string;
  imagem: string;
}

const Obra: React.FC<ObraProps> = ({ id, titulo, descricao, localizacao, imagem }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        {imagem ? (
          <img 
            src={imagem} 
            alt={`Projeto ${titulo}`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-500">Imagem não disponível</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{titulo}</h3>
        <p className="text-gray-700 mb-2">{descricao}</p>
        <p className="text-sm text-gray-500">Localização: {localizacao}</p>
      </div>
    </div>
  );
};

export default Obra;
