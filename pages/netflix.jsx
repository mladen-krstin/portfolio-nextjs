import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import netflixImg from '../public/assets/projects/netflix.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import { TfiControlBackward } from 'react-icons/tfi'

const netflix = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={netflixImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
					<h2 className='py-2'>Netflix Clone</h2>
					<h3>React.js / Tailwind CSS / Firebase</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<p className='text-2xl text-[#5651e5]'>Project</p>
					<h2 className='py-2'>Overview</h2>
					<p>
						This app was built using React.js and hosted on Firebase. Users are
						able to search properties based on an Address, City, or ZIP code to
						retrive a list of active properties currently for sale. You will be
						able to view property information as well as the specific location
						of the property integrated with the Google Maps API. User
						authentication is available so you can signup & signin to your
						account with an email address in order to save your favorite
						properties. This is made possible with Zillow API.
					</p>
					<button className='px-8 py-2 mt-4 mr-4'>Demo</button>
					<button className='px-8 py-2 mt-4'>Code</button>
				</div>
				<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
					<div className='p-2'>
						<p>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> React.js
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Tailwind CSS
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> JavaScript
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Firebase
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Google API
							</p>
							<p className='text-gray-600 py-2 flex items-center'>
								<RiRadioButtonFill className='pr-1' /> Zillow API
							</p>
						</div>
					</div>
				</div>
				<Link
					href='/#projects'
					className='flex items-center'
				>
					<TfiControlBackward size={20} />
					<p className='underline cursor-pointer ml-1'>Back</p>
				</Link>
			</div>
		</div>
	)
}

export default netflix
