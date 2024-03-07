import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import CryptoDetailsCoinTrending from './Crypto/CryptoDetailsCoinTrending';

const LikeCarosal = ({ data }) => {

	if (data.length == 0) {
		return null;
	}

	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={8}
			slidesPerView={2}
			navigation
			breakpoints={{
				786: {
					slidesPerView: 4,
				},
			}}>
			{data.coins.map((coin) => (
				<SwiperSlide key={coin.id}>
					<CryptoDetailsCoinTrending data={coin} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default LikeCarosal;
