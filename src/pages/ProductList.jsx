import { useState, useEffect } from "react";
import { Card, Button, Carousel, Rating } from 'flowbite-react';
import { restaurantList } from "../services/restaurant";

function Resturant(restaurant) {
	const imgUrl = restaurant.images ? restaurant.images[0].url : "/image-1.jpg";
	return <>
		<Card
			className="w-64 bg-gray-400"
			imgAlt="Meaningful alt text for an image that is not purely decorative"
			imgSrc={imgUrl}
		>
			<div className=''>
				<h5 className="text-l font-bold tracking-tight text-gray-90">
					{restaurant.restaurant_name}
				</h5>
				<p>
					Some description about the restaurant
				</p>
			</div>
		</Card>
	</>
}

function ProductList() {

	const [restaurants, setRestaurants] = useState([]);

	const getRestaurantList = async () => {
		const result = await restaurantList();
		if (result.error) {
			alert(result.error);
			return;
		}
		setRestaurants(result.data);
	}

	useEffect(() => {
		getRestaurantList();
	}, [])

	return (
		<>

			<nav className="bg-white p-4 shadow-md mb-6 w-full">
				<div className="flex flex-col ml-6">
					<div className="text-grey block">Pre Order From</div>
					<div className="text-black font-bold">Connaught Place</div>
				</div>
			</nav>

			<div className='mx-auto flex items-center justify-between px-10 mb-6'>
				<Card className='shadow-none border-none bg-gray-100 w-[200px]'>
					<div className='flex flex-col gap-1'>
						<span className='text-gray-600 tracking-wide font-bold text-[22px]'>Karan</span>
						<h5 className='text-[17px] font-semibold text-gray-800'>Let's explore this evening</h5>
					</div>
				</Card>
				<div className="flex space-x-4">
					<Button>Icon</Button>
					<Button>Icon</Button>
				</div>
			</div>


			<div className='flex justify-between px-10 mb-6 '>
				<span className=' tracking-wider font-bold text-[20px]'>Your Taste</span>
				<span className=' text-gray-500'>See all</span>
			</div>

			<div className='grid grid-cols-5 px-10 pb-6 gap-10'>
				{restaurants.map((item, ind)=>{
					return <Resturant key={ind} restaurant={item} />
				})}
			</div>

			{/* //// carousel */}

			<div className="h-50 sm:h-64 xl:h-80 2xl:h-96 w-full px-10 mb-4">
				<Carousel >
					<img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
					<img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
				</Carousel>
			</div>


			{/* product */}
			<h5 className='px-10 tracking-wider font-bold text-[20px]' py-2>Popular Onces</h5>
			<div className=' px-10 mt-6 gap-8 grid grid-cols-3'>
				<Card className="shadow-none w-[430px] "  >
					<div className='flex gap-4'>
						<img className='rounded-[10px]' src="/image-1.jpg" width={200} height={220} alt="..." />
						<div className='flex flex-col'>
							<h5 className="text-l font-bold tracking-wide text-gray-900 dark:text-white">
								Lazy Bear
							</h5>
							<span className="text-[13px] tracking-wider text-gray-600 dark:text-white">
								Cake,Pastry,Pasta
							</span>
							<span className="text-[12px] tracking-wide text-gray-600 dark:text-white">
								Connaught Place, New Delhi
							</span>
							<span className='text-sm font-semibold text-orange-400 mt-1 mb-1'>4 offers treding</span>
							<div className='flex justify-between'>
								<div className='flex flex-col'>
									<Rating>
										<Rating.Star />
										<p className="ml-2 text-sm font-bold text-gray-900">4.95</p>
									</Rating>
									<span className='text-[12px] text-gray-700' >Popularity</span>
								</div>
								<div className='flex flex-col'>
									<p className="ml-2 text-sm font-bold text-gray-900">$230</p>
									<span className='text-[12px] text-gray-700' >Cost for two</span>
								</div>


							</div>
						</div>
					</div>
				</Card>
				<Card className="shadow-none w-[430px] "  >
					<div className='flex gap-4'>
						<img className='rounded-[10px]' src="/image-1.jpg" width={200} height={220} alt="..." />
						<div className='flex flex-col'>
							<h5 className="text-l font-bold tracking-wide text-gray-900 dark:text-white">
								Lazy Bear
							</h5>
							<span className="text-[13px] tracking-wider text-gray-600 dark:text-white">
								Cake,Pastry,Pasta
							</span>
							<span className="text-[12px] tracking-wide text-gray-600 dark:text-white">
								Connaught Place, New Delhi
							</span>
							<span className='text-sm font-semibold text-orange-400 mt-1 mb-1'>4 offers treding</span>
							<div className='flex justify-between'>
								<div className='flex flex-col'>
									<Rating>
										<Rating.Star />
										<p className="ml-2 text-sm font-bold text-gray-900">4.95</p>
									</Rating>
									<span className='text-[12px] text-gray-700' >Popularity</span>
								</div>
								<div className='flex flex-col'>
									<p className="ml-2 text-sm font-bold text-gray-900">$230</p>
									<span className='text-[12px] text-gray-700' >Cost for two</span>
								</div>


							</div>
						</div>
					</div>
				</Card>
				<Card className="shadow-none w-[430px] "  >
					<div className='flex gap-4'>
						<img className='rounded-[10px]' src="/image-1.jpg" width={200} height={220} alt="..." />
						<div className='flex flex-col'>
							<h5 className="text-l font-bold tracking-wide text-gray-900 dark:text-white">
								Lazy Bear
							</h5>
							<span className="text-[13px] tracking-wider text-gray-600 dark:text-white">
								Cake,Pastry,Pasta
							</span>
							<span className="text-[12px] tracking-wide text-gray-600 dark:text-white">
								Connaught Place, New Delhi
							</span>
							<span className='text-sm font-semibold text-orange-400 mt-1 mb-1'>4 offers treding</span>
							<div className='flex justify-between'>
								<div className='flex flex-col'>
									<Rating>
										<Rating.Star />
										<p className="ml-2 text-sm font-bold text-gray-900">4.95</p>
									</Rating>
									<span className='text-[12px] text-gray-700' >Popularity</span>
								</div>
								<div className='flex flex-col'>
									<p className="ml-2 text-sm font-bold text-gray-900">$230</p>
									<span className='text-[12px] text-gray-700' >Cost for two</span>
								</div>


							</div>
						</div>
					</div>
				</Card>
				<Card className="shadow-none w-[430px] "  >
					<div className='flex gap-4'>
						<img className='rounded-[10px]' src="/image-1.jpg" width={200} height={220} alt="..." />
						<div className='flex flex-col'>
							<h5 className="text-l font-bold tracking-wide text-gray-900 dark:text-white">
								Lazy Bear
							</h5>
							<span className="text-[13px] tracking-wider text-gray-600 dark:text-white">
								Cake,Pastry,Pasta
							</span>
							<span className="text-[12px] tracking-wide text-gray-600 dark:text-white">
								Connaught Place, New Delhi
							</span>
							<span className='text-sm font-semibold text-orange-400 mt-1 mb-1'>4 offers treding</span>
							<div className='flex justify-between'>
								<div className='flex flex-col'>
									<Rating>
										<Rating.Star />
										<p className="ml-2 text-sm font-bold text-gray-900">4.95</p>
									</Rating>
									<span className='text-[12px] text-gray-700' >Popularity</span>
								</div>
								<div className='flex flex-col'>
									<p className="ml-2 text-sm font-bold text-gray-900">$230</p>
									<span className='text-[12px] text-gray-700' >Cost for two</span>
								</div>


							</div>
						</div>
					</div>
				</Card>
			</div>
		</>
	)
}

export default ProductList