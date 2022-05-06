import React from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import { MdContentCopy, MdCall } from 'react-icons/md';
import toast from 'react-hot-toast';

const Card = ({ friend }) => {
	const { name, phone } = friend;

	const handleCopy = () => {
		navigator.clipboard.writeText(phone);
		toast.success('Coppied to clipboard');
	};

	return (
		<div className='card'>
			<div className='contact-wrapper'>
				<LetteredAvatar name={name} />
				<div>
					<h4 className='name'>{name}</h4>
					<div className='numberWrapper'>
						<p className='number'>{phone}</p>
						<MdContentCopy
							size={16}
							onClick={handleCopy}
							className='copy-btn'
						/>
					</div>
				</div>
			</div>
			<a href={`tel:${phone}`} className='call-btn'>
				<MdCall size={20} />
			</a>
		</div>
	);
};

export default Card;
