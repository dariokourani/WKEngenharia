import React from 'react';

interface ObrasGaleriaProps {
  obras: {
    id: number;
    titulo: string;
    descricao: string;
    localizacao: string;
    imagem: string;
  }[];
}

const ObrasGaleria: React.FC<ObrasGaleriaProps> = ({ obras }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {obras.map((obra) => (
        <div key={obra.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
          <div className="h-48 overflow-hidden">
            {obra.imagem ? (
              <img 
                src={obra.imagem} 
                alt={`Projeto ${obra.titulo}`} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500">Imagem não disponível</p>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{obra.titulo}</h3>
            <p className="text-gray-700 mb-2">{obra.descricao}</p>
            <p className="text-sm text-gray-500">Localização: {obra.localizacao}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ObrasGaleria;
