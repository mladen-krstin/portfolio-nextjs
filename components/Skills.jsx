import Image from 'next/image'
import React from 'react'

const Skills = () => {
	return (
		<div
			id='skills'
			className='w-full lg:h-screen p-2'
		>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className='text-xl tracking-widest uppercase text-[#5651e5]'>
					Skills
				</p>
				<h2 className='py-4'>What I Can Do</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/html.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>HTML</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/css.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>CSS</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/javascript.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/react.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>React.js</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/tailwind.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Tailwind CSS</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/firebase.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Firebase</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/github1.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>GitHub</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/nextjs.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Next.js</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/mongo.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/node.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>Node.js</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/wordpress.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>WordPress CMS</h3>
							</div>
						</div>
					</div>

					<div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<Image
									src='/assets/skills/woo.png'
									alt='/'
									width='64'
									height='64'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<h3>WooCommerce</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
