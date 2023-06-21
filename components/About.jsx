import React from 'react'

const About = () => {
	return (
		<div
			id='about'
			className='w-full md:h-screen p-2 flex items-center py-16'
		>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-[#5651e5]'>
						About
					</p>
					<h2 className='py-4'>Who I Am</h2>
					<p className='py-2 text-gray-600'>
						// I am not your normal developer
					</p>
					<p className='py-2 text-gray-600'>
						I have spent the last 22 years in the sales industry working as
						salesman on filed up to manager for import and wholesale. I have
						always had a knack for technology and working with computers. In
						2018 I started learning Python language, and year later I switch to
						HTML & CSS to make some imnor edits on a small business website that
						I was operating. What I thought was just a few small edits turned
						into a love for web programming. After that I was eger to learn
						WordPress CMS and WooCommerce for creating webshops and SOHO
						websites.
					</p>
					<p className='py-2 text-gray-600'>
						Fascinated with how intricate programming can be I was quickly drawn
						to learn more. I strated learning JavaScript and was even more
						enthused with making websites interactive. I then started
						freelancing for e-commerce companies on Upwork platform. I am now
						spending my time building projects with React.js, Firebase and
						learning new technologies.
					</p>
					<p className='py-2 text-gray-600 underline cursor-pointer'>
						Ckeck out some of my latest projects.
					</p>
				</div>
				<div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300'>
					<img
						className='rounded-xl'
						src='/assets/about.jpg'
					></img>
				</div>
			</div>
		</div>
	)
}

export default About
