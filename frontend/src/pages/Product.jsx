import React from 'react'
import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/ssd", name: "Ssd", imageUrl: "/ssdSanDisk.jfif" },
	{ href: "/headPhone", name: "Head Phone", imageUrl: "/headphone.jfif" },
	{ href: "/tv", name: "Tv Box", imageUrl: "/tvbox.jfif" },
	{ href: "/phone", name: "Phones", imageUrl: "/glasses.png" },
	{ href: "/memory", name: "Memorias", imageUrl: "/jackets.jpg" },
	{ href: "/smartWatch", name: "Smart Watch", imageUrl: "/suits.jpg" },
	{ href: "/camera", name: "Camera", imageUrl: "/bags.jpg" },
	{ href: "/celular", name: "Smart Phone", imageUrl: "/bags.jpg" },
	{ href: "/mouse", name: "Mouse", imageUrl: "/bags.jpg" },
	{ href: "/keyboard", name: "Teclado", imageUrl: "/bags.jpg" },
];

const Product = () => {
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
    </div></div>
  )
}

export default Product