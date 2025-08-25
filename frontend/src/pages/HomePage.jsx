import { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/ssd", name: "Ssd", imageUrl: "/ssdSanDisk.jfif" },
	{ href: "/headPhone", name: "Head Phone", imageUrl: "/headphone.jfif" },
	{ href: "/tv", name: "Tv Box", imageUrl: "/tvbox.jfif" },
	{ href: "/phone", name: "Phones", imageUrl: "/phone.jpg" },
	{ href: "/memory", name: "Memorias", imageUrl: "/mP.jpg" },
	{ href: "/smartWatch", name: "Smart Watch", imageUrl: "/SmartwatchPrincipal.jpg" },
	{ href: "/camera", name: "Camera", imageUrl: "/cameraPrincipal.jpg" },
	{ href: "/celular", name: "Smart Phone", imageUrl: "/smartPhonePrincipal.jpg" },
	{ href: "/mouse", name: "Mouse", imageUrl: "/mousePrincipal.jpg" },
	{ href: "/keyboard", name: "Teclado", imageUrl: "/keyboardMain.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			{/* Modern Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.3)_0%,rgba(255,255,255,0)_50%)]"></div>
			
			{/* Floating Elements */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
			<div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
			<div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

			{/* Hero Section */}
			<section className="relative z-10 pb-12">
				<div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
					<div className="justify-center w-full text-center lg:p-10 max-auto">
						<div className="justify-center w-full mx-auto">
							{/* Profile Section */}
							<div className="flex flex-col items-center justify-center max-w-xl gap-6 mx-auto lg:flex-row mb-8">
								<div className="relative">
									<img
										className='w-32 h-32 rounded-full border-4 border-purple-400 shadow-2xl shadow-purple-500/50 object-cover object-center'
										src='/profile.png'
										alt="Profile"
									/>
									<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
								</div>
								<div className="text-center lg:text-left">
									<p className="text-purple-300 sm:text-xl text-sm font-semibold tracking-tighter">
										Github by @lookjota 🚀
									</p>
								</div>
							</div>

							{/* Main Headlines */}
							<div className="space-y-6 mb-8">
								<h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
									Dev FullStack
								</h1>
								<p className="text-xl sm:text-2xl text-purple-200 font-medium">
									MERN Stack • React • Node.js • Express • MongoDB
								</p>
							</div>

							{/* Services Section */}
							<div className="space-y-6 mb-12">
								<h2 className="text-4xl sm:text-6xl font-bold text-white">
									Assistência Especializada
								</h2>
								<div className="text-3xl sm:text-5xl font-bold">
									<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
										Smartphone & Notebook/PC's
									</span>
								</div>
							</div>

							{/* Features */}
							<div className="max-w-4xl mx-auto space-y-4 mb-8">
								<div className="flex items-center justify-center space-x-4 text-lg sm:text-xl">
									<div className="flex items-center space-x-2">
										<span className="text-green-400">✓</span>
										<span className="text-gray-200">Orçamentos Gratuitos</span>
									</div>
									<div className="flex items-center space-x-2">
										<span className="text-green-400">✓</span>
										<span className="text-gray-200">Garantia</span>
									</div>
								</div>
								<div className="text-center">
									<p className="text-lg sm:text-xl text-gray-300 font-medium">
										<span className="font-bold text-purple-300">Troca de tela • Upgrade • Manutenção • Reparo de Carcaça</span>
									</p>
									<p className="text-lg text-purple-200 mt-2">
										Visite nossa loja
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
           


				<div className="text-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
					<button 
						className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md hover:scale-105"
						onClick={() => window.open("https://wa.me/5561995646646?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços.", "_blank")}
					>
						<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:translate-x-0 ease">
							<svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
							</svg>
							Fazer Orçamento
						</span>
						<span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
							<svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
							</svg>
							Fazer Orçamento
						</span>
						<span className="relative invisible">Fazer Orçamento</span>
					</button>
					
					<Link 
						to="/services"
						className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md hover:scale-105"
					>
						<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:translate-x-0 ease">
							<svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
								<path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348L9.928 3.817c-.151-.904-.933-1.567-1.85-1.567h-1.844zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
							</svg>
							Ver Todos os Serviços
						</span>
						<span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
							<svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
								<path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348L9.928 3.817c-.151-.904-.933-1.567-1.85-1.567h-1.844zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
							</svg>
							Ver Todos os Serviços
						</span>
						<span className="relative invisible">Ver Todos os Serviços</span>
					</Link>
				</div>

				</section>

					{/* Price */}
			<div className="flex flex-col items-center justify-center min-h-screen p-10 text-white md:p-20">
				<h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
					Assistência Técnica Especializada
				</h2>
				<div className="text-center mb-8">
					<Link 
						to="/services"
						className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
					>
						<span className="mr-2">Ver todos os serviços disponíveis</span>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</Link>
				</div>

				<div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
					<div className="flex flex-col flex-grow mt-8 overflow-hidden bg-black rounded-lg shadow-lg">
						<div className="flex flex-col items-center p-10 bg-blue-400">
							<span className="font-semibold">Formatação</span>
							<div className="flex items-center">
								<span className="text-3xl">R$</span>
								<span className="text-5xl font-bold">80</span>
								<span className="text-2xl text-white">,00</span>
							</div>
						</div>
						<div className="p-10">
							<ul>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2">windows 10/11</span>
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2">Linux</span>
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2">Instalação Driver</span>
								</li>
							</ul>
						</div>
						<div className="flex px-10 pb-10 justify-center">
							<button 
								className=" hover:bg-blue-300 hover:text-white flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-white text-emerald-600 font-bold
								. rounded-lg"
								onClick={() => window.open("https://wa.me/5561995646646?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços.", "_blank")}
								>
									Solicitar Serviço
							</button>
						</div>
					</div>

					<div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-black rounded-lg shadow-lg md:scale-110">
						<div className="flex flex-col items-center p-10 bg-blue-400">
							<span className="font-semibold">Upgrade SSD 240gb</span>
							<div className="flex items-center">
								<span className="text-3xl">R$</span>
								<span className="text-6xl font-bold">250</span>
								<span className="text-2xl text-white">,00</span>
							</div>
						</div>
						<div className="p-10">
							<ul>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2 italic">SSD Sandisk</span>
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2">Pasta Térmica</span>
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2">Limpeza</span>
								</li>
							</ul>
						</div>
						<div className="flex px-10 pb-10 justify-center">
							<button 
								className="hover:bg-blue-300 hover:text-white flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-white text-emerald-600 font-bold rounded-lg"
								onClick={() => window.open("https://wa.me/5561995646646?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços.", "_blank")}
							>
								Solicitar Serviço
							</button>
						</div>
					</div>

					<div className="flex flex-col flex-grow overflow-hidden bg-black rounded-lg shadow-lg mt-19">
						<div className="flex flex-col items-center p-10 bg-blue-400">
							<span className="font-semibold">Reparo Carcaça</span>
							<div className="flex items-center">
								<span className="text-3xl">R$</span>
								<span className="text-5xl font-bold">100</span>
								<span className="text-2xl text-white">,00</span>
							</div>
						</div>
						<div className="p-10">
							<ul>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2 italic">Notebooks</span>
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2">Restauração</span>
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
									</svg>
									<span className="ml-2">Revitalização</span>
								</li>
							</ul>
						</div>
						<div className="flex px-10 pb-10 justify-center">
							<button 
								className="hover:bg-blue-300 hover:text-white flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-white text-emerald-600 font-bold rounded-lg"
								onClick={() => window.open("https://wa.me/5561995646646?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços.", "_blank")}
							>
								Solicitar Serviços
							</button>
						</div>
					</div>
				</div>

			</div>
		{/* explore page */}
		<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-gray-300 mb-4'>
					Explore nosso Catalogo
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12 underline leading-8 underline-offset-8	decoration-4 decoration-blue-400'>
				Descubra as últimas tendências da Tecnologia
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>

			{/* FAQ Section */}
			<div className="text-center py-16 bg-gray-800 bg-opacity-50 rounded-lg mx-4 mb-8">
				<h2 className="text-3xl font-bold mb-4 text-blue-400">
					Perguntas Frequentes
				</h2>
				<p className="text-gray-300 mb-6 max-w-2xl mx-auto">
					Tem dúvidas sobre nossos serviços? Consulte nossa seção de perguntas frequentes ou entre em contato conosco.
				</p>
				<Link
					to="/faq"
					className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
				>
					❓ Ver FAQ Completo
					<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</Link>
			</div>

		</div>
	);
};
export default HomePage;
