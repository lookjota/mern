import { useEffect } from "react";
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
		<div className='relative min-h-screen text-black overflow-hidden'>
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
			

			{/* Hero Section */}

			<section className="pb-12 ">
				<div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
					<div className="justify-center w-full text-center lg:p-10 max-auto">
						<div className="justify-center w-full mx-auto">

						<div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
						<img
								className='w-32 h-32 rounded-full border border-[#E8E3F4]'
								src='/profile.png'
						/>
						</div>


						<p className="mt-4 sm:px-32 text-[#E8E3F4] sm:text-xl text-sm font-semibold tracking-tighter">
							Github by @lookjota 🏝️
						</p>

							<p className="sm:mt-8 mt-3 sm:px-44 text-[#E8E3F4] text-4xl sm:text-6xl font-semibold tracking-tighter">
								Assistência Técnica Especilizada 
							</p>
							<p className="sm:mt-8 mt-3 sm:px-44 text-[#E8E3F4] text-4xl sm:text-6xl font-semibold tracking-tighter">
							<span className="underline leading-8 underline-offset-8	decoration-8 decoration-blue-400">Smartphone <p>&</p> Notebook/pc's</span>
							</p>

							<p className="sm:mt-8 mt-2.5 text-[#E8E3F4] sm:px-72  sm:leading-loose text-lg font-normal tracking-tighter">
							- Orçamentos Gratuitos<p></p> 
							<p></p>
							<span className="font-semibold">- Upgrade, Manutenção, Reparo de Carcaça</span> <p></p>
							Viste nossa loja
							</p>
						</div>
					</div>
			
				</div>
           


				<div className="text-center space-x-4 mt-6">
					<button 
						className="hover:bg-blue-500 bg-blue-400 translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center"
						onClick={() => window.open("https://wa.me/5561995646646?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços.", "_blank")}
					>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
					<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
				</svg>


						&nbsp; &nbsp;<span> Fazer Orçamento </span>
					</button>
				</div>

				</section>

					{/* Price */}
			<div className="flex flex-col items-center justify-center min-h-screen p-10 text-green-100 md:p-20">
				<h2 className="text-2xl font-medium">Assistência Técnica Especializada</h2>

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
								<span className="text-6xl font-bold">270</span>
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
								<span className="text-5xl font-bold">99</span>
								<span className="text-2xl text-white">,99</span>
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
								Solicitar Serviço
							</button>
						</div>
					</div>
				</div>

			</div>


		</div>
	);
};
export default HomePage;
