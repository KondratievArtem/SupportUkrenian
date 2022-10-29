type OferType = {
	imges: string;
	type: string;
	tegline: string;
	color: string;
	size: string;
	price: number;
	count: number;
};

const OferIkon: React.FC<OferType> = ({ imges, type, tegline, color, size, price, count }) => {
	return (
		<div className="order-composition__content">
			<div className="order-composition__content-icon">
				<div className="order-composition__content-img">
					<img src={imges} alt="goods/image.webp" />
				</div>
				<div className="order-composition__content-titles">
					<div className="order-composition__content-title">
						<p>
							{type} {tegline} {color}
						</p>
					</div>
					<div className="order-composition__content-rozm">
						<b>{size}</b>
					</div>
					<div className="order-composition__content-pracie">
						<p>{price} грн</p>
						{count > 1 ? (
							<>
								<p>+</p> <p>{count}</p>
							</>
						) : (
							' '
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OferIkon;
