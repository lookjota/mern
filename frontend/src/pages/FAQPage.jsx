import { useState } from "react";
import { Link } from "react-router-dom";

const FAQPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [activeCategory, setActiveCategory] = useState("todos");
	const [openItems, setOpenItems] = useState(new Set());

	const categories = [
		{ id: "todos", name: "Todos", icon: "📋" },
		{ id: "servicos", name: "Serviços", icon: "🔧" },
		{ id: "precos", name: "Preços", icon: "💰" },
		{ id: "garantia", name: "Garantia", icon: "🛡️" },
		{ id: "contato", name: "Contato", icon: "📞" },
		{ id: "tecnico", name: "Técnico", icon: "💻" }
	];

	const faqData = [
		{
			id: 1,
			category: "servicos",
			question: "Quais serviços de assistência técnica vocês oferecem?",
			answer: "Oferecemos uma ampla gama de serviços incluindo formatação de computadores, upgrade de SSD, reparo de carcaça, troca de tela, manutenção preventiva e recuperação de dados. Todos os serviços são realizados por técnicos especializados com garantia."
		},
		{
			id: 2,
			category: "precos",
			question: "Os orçamentos são gratuitos?",
			answer: "Sim! Todos os nossos orçamentos são completamente gratuitos. Você pode solicitar um orçamento através do WhatsApp ou visitar nossa loja para uma avaliação presencial sem custo."
		},
		{
			id: 3,
			category: "garantia",
			question: "Vocês oferecem garantia nos serviços?",
			answer: "Sim, oferecemos garantia em todos os nossos serviços. A garantia varia de 30 a 90 dias dependendo do tipo de serviço realizado. Peças originais têm garantia estendida conforme especificações do fabricante."
		},
		{
			id: 4,
			category: "tecnico",
			question: "Quanto tempo leva para formatar um computador?",
			answer: "O tempo de formatação varia de 2 a 3 horas, dependendo da configuração do computador e do sistema operacional escolhido. Incluímos a instalação de drivers e otimização do sistema."
		},
		{
			id: 5,
			category: "precos",
			question: "Qual o preço do upgrade de SSD?",
			answer: "O upgrade de SSD 240GB custa R$ 270,00 e inclui o SSD Sandisk, pasta térmica, limpeza completa, migração de dados e teste de performance. O serviço leva de 1 a 2 horas."
		},
		{
			id: 6,
			category: "servicos",
			question: "Vocês atendem smartphones e notebooks?",
			answer: "Sim! Atendemos tanto smartphones quanto notebooks. Realizamos troca de tela, reparo de carcaça, manutenção preventiva e outros serviços para ambos os tipos de dispositivos."
		},
		{
			id: 7,
			category: "contato",
			question: "Como posso entrar em contato para agendar um serviço?",
			answer: "Você pode entrar em contato através do WhatsApp (61) 99564-6646, por telefone ou visitar nossa loja. Respondemos rapidamente e oferecemos atendimento personalizado para suas necessidades."
		},
		{
			id: 8,
			category: "tecnico",
			question: "Vocês fazem backup dos dados antes da formatação?",
			answer: "Sim! Sempre fazemos backup dos dados importantes antes de qualquer formatação. Recomendamos que você também faça um backup pessoal, mas garantimos a segurança dos seus arquivos."
		},
		{
			id: 9,
			category: "garantia",
			question: "As peças utilizadas são originais?",
			answer: "Utilizamos peças originais sempre que possível. Quando não há disponibilidade de peças originais, utilizamos peças de qualidade equivalente com garantia de funcionamento."
		},
		{
			id: 10,
			category: "precos",
			question: "Vocês aceitam cartão de crédito e débito?",
			answer: "Sim! Aceitamos todas as formas de pagamento: dinheiro, PIX, cartão de crédito e débito. Também oferecemos parcelamento em até 6x sem juros no cartão."
		},
		{
			id: 11,
			category: "servicos",
			question: "Fazem recuperação de dados de HDs danificados?",
			answer: "Sim! Realizamos recuperação de dados de HDs, SSDs, pen drives e cartões de memória. O preço varia conforme o tipo de dano e a complexidade da recuperação."
		},
		{
			id: 12,
			category: "contato",
			question: "Vocês fazem atendimento domiciliar?",
			answer: "Atualmente atendemos apenas em nossa loja para garantir a qualidade dos serviços e o uso adequado de equipamentos especializados. Oferecemos serviço de retirada e entrega."
		},
		{
			id: 13,
			category: "tecnico",
			question: "Qual a diferença entre SSD e HD?",
			answer: "SSD (Solid State Drive) é mais rápido, silencioso e resistente a impactos que o HD tradicional. O SSD melhora significativamente a performance do computador, reduzindo o tempo de inicialização e carregamento de programas."
		},
		{
			id: 14,
			category: "garantia",
			question: "O que está coberto pela garantia?",
			answer: "A garantia cobre defeitos de mão de obra e funcionamento adequado do serviço realizado. Não cobre danos causados por mau uso, quedas, líquidos ou outros danos físicos após a entrega."
		},
		{
			id: 15,
			category: "servicos",
			question: "Vocês instalam programas específicos após a formatação?",
			answer: "Sim! Após a formatação, instalamos os programas básicos (navegador, office, antivírus) e podemos instalar programas específicos conforme sua necessidade, sem custo adicional."
		}
	];

	const toggleItem = (id) => {
		const newOpenItems = new Set(openItems);
		if (newOpenItems.has(id)) {
			newOpenItems.delete(id);
		} else {
			newOpenItems.add(id);
		}
		setOpenItems(newOpenItems);
	};

	const filteredFAQ = faqData.filter(item => {
		const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
							 item.answer.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory = activeCategory === "todos" || item.category === activeCategory;
		return matchesSearch && matchesCategory;
	});

	const handleWhatsAppContact = () => {
		const message = "Olá! Gostaria de tirar algumas dúvidas sobre os serviços.";
		const encodedMessage = encodeURIComponent(message);
		window.open(`https://wa.me/5561995646646?text=${encodedMessage}`, "_blank");
	};

	return (
		<div className="min-h-screen bg-gray-900 text-white py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl sm:text-6xl font-bold text-gray-100 mb-6">
						Perguntas Frequentes
					</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Encontre respostas para as dúvidas mais comuns sobre nossos serviços de assistência técnica
					</p>
				</div>

				{/* Search Bar */}
				<div className="max-w-2xl mx-auto mb-8">
					<div className="relative">
						<input
							type="text"
							placeholder="Buscar perguntas..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full px-4 py-3 pl-12 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
						<svg
							className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
				</div>

				{/* Category Filter */}
				<div className="flex flex-wrap justify-center gap-4 mb-8">
					{categories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(category.id)}
							className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
								activeCategory === category.id
									? "bg-blue-600 text-white"
									: "bg-gray-800 text-gray-300 hover:bg-gray-700"
							}`}
						>
							<span className="mr-2">{category.icon}</span>
							{category.name}
						</button>
					))}
				</div>

				{/* FAQ Items */}
				<div className="max-w-4xl mx-auto space-y-4">
					{filteredFAQ.length > 0 ? (
						filteredFAQ.map((item) => (
							<div
								key={item.id}
								className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
							>
								<button
									onClick={() => toggleItem(item.id)}
									className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors duration-200"
								>
									<span className="font-semibold text-lg text-gray-100">
										{item.question}
									</span>
									<svg
										className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
											openItems.has(item.id) ? "rotate-180" : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</button>
								{openItems.has(item.id) && (
									<div className="px-6 pb-4">
										<p className="text-gray-300 leading-relaxed">
											{item.answer}
										</p>
									</div>
								)}
							</div>
						))
					) : (
						<div className="text-center py-12">
							<div className="text-6xl mb-4">🔍</div>
							<h3 className="text-xl font-semibold text-gray-300 mb-2">
								Nenhuma pergunta encontrada
							</h3>
							<p className="text-gray-400">
								Tente ajustar sua busca ou entre em contato conosco
							</p>
						</div>
					)}
				</div>

				{/* Contact Section */}
				<div className="mt-16 text-center bg-gray-800 rounded-lg p-8 border border-gray-700">
					<h2 className="text-3xl font-bold mb-4 text-blue-400">
						Ainda tem dúvidas?
					</h2>
					<p className="text-gray-300 mb-6">
						Não encontrou a resposta que procurava? Entre em contato conosco!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={handleWhatsAppContact}
							className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
						>
							<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
							</svg>
							WhatsApp
						</button>
						<button
							onClick={() => window.open("tel:+5561995646646")}
							className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
						>
							📞 Ligar Agora
						</button>
						<Link
							to="/services"
							className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
						>
							Ver Serviços
						</Link>
					</div>
				</div>

				{/* Back to Home */}
				<div className="text-center mt-8">
					<Link
						to="/"
						className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
					>
						<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
						Voltar para a página inicial
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FAQPage; 