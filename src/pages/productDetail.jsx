import { Carousel } from 'flowbite-react';

export default function ProductDetail(){
    return(
        <div className="h-50 sm:h-64 xl:h-80 2xl:h-96 w-full px-10 mb-4">
				<Carousel >
					<img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..."/>
					<img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..."/>
					<img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..."/>
					<img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..."/>
					<img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..."/>
				</Carousel>
                <p>Some description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurantSome description about the restaurant</p>
			</div>
    )
}