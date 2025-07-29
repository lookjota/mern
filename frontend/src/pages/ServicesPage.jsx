import { useState } from "react";

const ServicesPage = () => {
	const [selectedService, setSelectedService] = useState(null);

	const services = [
		{
			id: 1,
			name: "Formatação de Computadores",
			price: "R$ 80,00",
			description: "Formatação completa com Windows 10/11, Linux e instalação de drivers",
			features: [
				"Windows 10/11",
				"Linux",
				"Instalação de Drivers",
				"Backup de Dados",
				"Otimização do Sistema"
			],
			icon: "💻",
			duration: "2-3 horas"
		},
		{
			id: 2,
			name: "Upgrade SSD 240GB",
			price: "R$ 270,00",
			description: "Upgrade completo com SSD Sandisk, pasta térmica e limpeza",
			features: [
				"SSD Sandisk 240GB",
				"Pasta Térmica",
				"Limpeza Completa",
				"Migração de Dados",
				"Teste de Performance"
			],
			icon: "🚀",
			duration: "1-2 horas"
		},
		{
			id: 3,
			name: "Reparo de Carcaça",
			price: "R$ 99,99",
			description: "Reparo e restauração de carcaças de notebooks",
			features: [
				"Restauração de Carcaça",
				"Substituição de Peças",
				"Revitalização",
				"Garantia de 30 dias",
				"Orçamento Gratuito"
			],
			icon: "🔧",
			duration: "1-3 dias"
		},
		{
			id: 4,
			name: "Troca de Tela",
			price: "A partir de R$ 150,00",
			description: "Troca de tela para smartphones e notebooks",
			features: [
				"Telas Originais",
				"Garantia de 90 dias",
				"Teste Completo",
				"Orçamento Gratuito",
				"Entrega Rápida"
			],
			icon: "📱",
			duration: "2-4 horas"
		},
		{
			id: 5,
			name: "Manutenção Preventiva",
			price: "R$ 60,00",
			description: "Limpeza e manutenção preventiva de computadores",
			features: [
				"Limpeza de Hardware",
				"Atualização de Software",
				"Verificação de Segurança",
				"Relatório Técnico",
				"Dicas de Manutenção"
			],
			icon: "🛡️",
			duration: "1-2 horas"
		},
		{
			id: 6,
			name: "Recuperação de Dados",
			price: "A partir de R$ 100,00",
			description: "Recuperação de dados perdidos ou deletados",
			features: [
				"HDs e SSDs",
				"Pen Drives",
				"Cartões de Memória",
				"Análise Gratuita",
				"Garantia de Privacidade"
			],
			icon: "💾",
			duration: "1-7 dias"
		}
	];

	const handleServiceClick = (service) => {
		setSelectedService(service);
	};

	const handleWhatsAppContact = (service) => {
		const message = `Olá! Gostaria de mais informações sobre o serviço: ${service.name} - ${service.price}`;
		const encodedMessage = encodeURIComponent(message);
		window.open(`https://wa.me/5561995646646?text=${encodedMessage}`, "_blank");
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white py-20">
			{/* Hero Section */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h1 className="text-4xl sm:text-6xl font-bold text-gray-100 mb-6">
						Nossos Serviços
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Assistência técnica especializada em smartphones e notebooks. 
						Qualidade garantida com os melhores preços do mercado.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{services.map((service) => (
						<div
							key={service.id}
							className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-blue-400"
							onClick={() => handleServiceClick(service)}
						>
							<div className="text-4xl mb-4">{service.icon}</div>
							<h3 className="text-xl font-semibold mb-2 text-blue-400">
								{service.name}
							</h3>
							<p className="text-2xl font-bold text-green-400 mb-3">
								{service.price}
							</p>
							<p className="text-gray-300 mb-4">
								{service.description}
							</p>
							<div className="flex items-center text-sm text-gray-400 mb-4">
								<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
								</svg>
								{service.duration}
							</div>
							<button
								className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
								onClick={(e) => {
									e.stopPropagation();
									handleWhatsAppContact(service);
								}}
							>
								Solicitar Orçamento
							</button>
						</div>
					))}
				</div>

				{/* Service Details Modal */}
				{selectedService && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
						<div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
							<div className="flex justify-between items-start mb-6">
								<div>
									<div className="text-4xl mb-2">{selectedService.icon}</div>
									<h2 className="text-2xl font-bold text-blue-400 mb-2">
										{selectedService.name}
									</h2>
									<p className="text-3xl font-bold text-green-400 mb-2">
										{selectedService.price}
									</p>
								</div>
								<button
									onClick={() => setSelectedService(null)}
									className="text-gray-400 hover:text-white text-2xl"
								>
									×
								</button>
							</div>
							
							<p className="text-gray-300 mb-6">
								{selectedService.description}
							</p>

							<div className="mb-6">
								<h3 className="text-lg font-semibold mb-3 text-white">
									O que está incluído:
								</h3>
								<ul className="space-y-2">
									{selectedService.features.map((feature, index) => (
										<li key={index} className="flex items-center text-gray-300">
											<svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
											</svg>
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<button
									className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
									onClick={() => handleWhatsAppContact(selectedService)}
								>
									📱 Solicitar via WhatsApp
								</button>
								<button
									className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
									onClick={() => setSelectedService(null)}
								>
									Fechar
								</button>
							</div>
						</div>
					</div>
				)}

				{/* Contact Section */}
				<div className="text-center bg-gray-800 rounded-lg p-8 border border-gray-700">
					<h2 className="text-3xl font-bold mb-4 text-blue-400">
						Precisa de um serviço personalizado?
					</h2>
					<p className="text-gray-300 mb-6">
						Entre em contato conosco para um orçamento gratuito e personalizado para suas necessidades.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
							onClick={() => window.open("https://wa.me/5561995646646?text=Olá! Gostaria de um orçamento personalizado.", "_blank")}
						>
							<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
							</svg>
							WhatsApp
						</button>
						<button
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
							onClick={() => window.open("tel:+5561995646646")}
						>
							📞 Ligar Agora
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesPage; 