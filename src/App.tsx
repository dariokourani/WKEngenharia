import React from 'react';
import './App.css';
import ObrasGaleria from './components/ObrasGaleria';
import logoWK from './assets/images/LogoWKNovo.jpg';

function App() {
  // Dados de exemplo para obras
  const obrasRealizadas = [
    {
      id: 1,
      titulo: "Reforma de Fachada",
      descricao: "Recuperação estrutural e pintura da fachada de condomínio residencial.",
      localizacao: "Boa Viagem, Recife",
      imagem: ""
    },
    {
      id: 2,
      titulo: "Impermeabilização de Laje",
      descricao: "Serviço completo de impermeabilização de laje de cobertura.",
      localizacao: "Espinheiro, Recife",
      imagem: ""
    },
    {
      id: 3,
      titulo: "Reforma de Área de Lazer",
      descricao: "Revitalização completa da área de lazer de condomínio.",
      localizacao: "Casa Forte, Recife",
      imagem: ""
    },
    {
      id: 4,
      titulo: "Instalações Elétricas",
      descricao: "Atualização das instalações elétricas conforme normas vigentes.",
      localizacao: "Pina, Recife",
      imagem: ""
    },
    {
      id: 5,
      titulo: "Projeto Estrutural",
      descricao: "Elaboração de projeto estrutural para ampliação de área comum.",
      localizacao: "Jaqueira, Recife",
      imagem: ""
    },
    {
      id: 6,
      titulo: "Laudo Técnico",
      descricao: "Elaboração de laudo técnico para avaliação de patologias estruturais.",
      localizacao: "Boa Vista, Recife",
      imagem: ""
    }
  ];

  // Função para criar link do WhatsApp
  const whatsappLink = () => {
    const phone = "5581992322293"; // Formato internacional sem caracteres especiais
    const message = "Olá! Gostaria de solicitar um orçamento para serviços de engenharia.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoWK} alt="WK Engenharia Logo" className="h-16 mr-3" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#sobre" className="text-gray-700 hover:text-blue-800 transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-800 transition-colors">Serviços</a>
            <a href="#obras" className="text-gray-700 hover:text-blue-800 transition-colors">Obras</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-800 transition-colors">Contato</a>
          </nav>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">Soluções em Engenharia Civil para Condomínios</h2>
            <p className="text-xl mb-8">Oferecemos serviços especializados para condomínios residenciais e comerciais em Recife e região metropolitana.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contato" className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">Entre em contato</a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre a WK Engenharia</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                A WK Engenharia é uma empresa especializada em serviços de engenharia civil para condomínios residenciais e comerciais em Recife, Pernambuco. Com anos de experiência no mercado, nossa equipe de profissionais qualificados está comprometida em oferecer soluções técnicas de alta qualidade.
              </p>
              <p className="text-gray-700 mb-4">
                Nossa missão é garantir a segurança, funcionalidade e valorização dos empreendimentos de nossos clientes, através de projetos bem elaborados e execuções precisas, sempre respeitando normas técnicas e prazos estabelecidos.
              </p>
              <p className="text-gray-700">
                Atuamos em toda a região metropolitana de Recife, levando nosso conhecimento técnico e compromisso com a excelência para diversos tipos de edificações.
              </p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center">
              <img src={logoWK} alt="WK Engenharia" className="max-w-full h-auto max-h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Laudos Técnicos</h3>
              <p className="text-gray-700">Elaboração de laudos técnicos para avaliação estrutural, patologias construtivas e conformidade com normas técnicas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Manutenção Predial</h3>
              <p className="text-gray-700">Planejamento e execução de manutenções preventivas e corretivas em edificações residenciais e comerciais.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reformas</h3>
              <p className="text-gray-700">Projetos e execução de reformas em áreas comuns de condomínios, incluindo fachadas, áreas de lazer e instalações.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impermeabilização</h3>
              <p className="text-gray-700">Serviços de impermeabilização para lajes, reservatórios, piscinas e áreas molhadas, prevenindo infiltrações e danos estruturais.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Projetos Estruturais</h3>
              <p className="text-gray-700">Desenvolvimento de projetos estruturais para novas construções, ampliações e reforços em estruturas existentes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instalações Elétricas</h3>
              <p className="text-gray-700">Projetos e execução de instalações elétricas, incluindo adequações às normas vigentes e melhorias em sistemas existentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Obras Section */}
      <section id="obras" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Obras Realizadas</h2>
          <ObrasGaleria obras={obrasRealizadas} />
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-gray-700 mb-2">Nome</label>
                  <input type="text" id="nome" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="telefone" className="block text-gray-700 mb-2">Telefone</label>
                  <input type="tel" id="telefone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="mensagem" className="block text-gray-700 mb-2">Mensagem</label>
                  <textarea id="mensagem" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">Enviar Mensagem</button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-800 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-gray-700">Recife, Pernambuco</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-800 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-700">contato@wkengenharia.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-800 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-gray-700">(81) 99232-2293</p>
                      <div className="mt-2">
                        <a 
                          href={whatsappLink()} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                          </svg>
                          Fale conosco pelo WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-800 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Redes Sociais</p>
                      <div className="flex space-x-4 mt-2">
                        <a href="https://www.instagram.com/wkengenharia/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <img src={logoWK} alt="WK Engenharia Logo" className="h-12 mr-3 bg-white p-1 rounded" />
              </div>
              <p className="max-w-md">Soluções em engenharia civil para condomínios residenciais e comerciais em Recife e região metropolitana.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <nav className="flex flex-col space-y-2">
                <a href="#sobre" className="hover:text-blue-300 transition-colors">Sobre</a>
                <a href="#servicos" className="hover:text-blue-300 transition-colors">Serviços</a>
                <a href="#obras" className="hover:text-blue-300 transition-colors">Obras</a>
                <a href="#contato" className="hover:text-blue-300 transition-colors">Contato</a>
              </nav>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} WK Engenharia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
