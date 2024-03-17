import { Carousel, Rating } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { restaurantList } from "../services/restaurant";
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
	const [data, setData] = useState(null);
	const params = useParams();


	useEffect(() => {
		if (params.id) {
			(async () => {
				const result = await restaurantList(params.id);
				if (result.error) {
					alert(result.error);
					return;
				}
				setData(result.data.find(v => v.restaurant_uuid === params.id));
			})()
		}
	}, [params.id]);

	return (
		<div className="h-50 sm:h-64 xl:h-80 2xl:h-96 w-full px-10 mb-4">
			<Carousel >
				{data?.images.map(v => <img key={v.url} src={v.url} alt="..." />)}
			</Carousel>
			<p>{data?.restaurant_name}</p>
			<div className='flex gap-4'>
				{/* <img className='rounded-[10px]' src={data?.images?.length ? data?.images[0].url : "/image-1.jpg"} width={200} height={220} alt="..." /> */}
				<div className='flex flex-col'>
					<span className="text-[13px] tracking-wider text-gray-600 dark:text-white">
						{data?.cuisines?.map(v => v.cuisine_name).join(", ")}
					</span>
					<span className="text-[12px] tracking-wide text-gray-600 dark:text-white">
						{data?.location?.city_name}, {data?.location?.state_name}
					</span>
					<span className='text-sm font-semibold text-orange-400 mt-1 mb-1'>4 offers treding</span>
					<div className='flex justify-between'>
						<div className='flex flex-col'>
							<Rating>
								<Rating.Star />
								<p className="ml-2 text-sm font-bold text-gray-900">{data?.rating?.restaurant_avg_rating}</p>
							</Rating>
							<span className='text-[12px] text-gray-700' >Popularity</span>
						</div>
						<div className='flex flex-col'>
							<p className="ml-2 text-sm font-bold text-gray-900">{data?.currency.symbol}{data?.avg_cost_for_two}</p>
							<span className='text-[12px] text-gray-700' >Cost for two</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}