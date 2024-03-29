import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const [navBg, setNavBg] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState('#1f2937')
	const router = useRouter()

	useEffect(() => {
		if (
			router.asPath === '/property' ||
			router.asPath === '/crypto' ||
			router.asPath === '/netflix' ||
			router.asPath === '/twitch'
		) {
			setNavBg('transparent')
			setLinkColor('#ecf0f3')
		} else {
			setNavBg('#ecf0f3')
			setLinkColor('#1f2937')
		}
	}, [router])

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow)
	}, [])
	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-32 shadow-xl z-[100] bg-[#ecf0f3]/90'
					: 'fixed w-full h-32 z-[100] bg-[#ecf0f3]/90'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<Image
						src='/assets/navLogo.png'
						alt='/'
						width='125'
						height='50'
					/>
				</Link>
				<div className=''>
					<ul
						style={{ color: `${linkColor}` }}
						className='hidden md:flex'
					>
						<Link href='/'>
							<li className='ml-10 text-md uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/#about'>
							<li className='ml-10 text-md uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/#skills'>
							<li className='ml-10 text-md uppercase hover:border-b'>Skills</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-md uppercase hover:border-b'>
								Projects
							</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-md uppercase hover:border-b'>
								Contact
							</li>
						</Link>
					</ul>
					<div
						onClick={handleNav}
						className='md:hidden cursor-pointer'
					>
						<AiOutlineMenu size={35} />
					</div>
				</div>
			</div>

			{/* MOBILE MENU */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div className='flex w-full items-center justify-between'>
						<Link href='/'>
							<Image
								src='/assets/navLogo.png'
								alt='/'
								width='87'
								height='35'
							/>
						</Link>
						<div
							onClick={handleNav}
							className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
						>
							<AiOutlineClose size={25} />
						</div>
					</div>
					<div className='border-b border-gray-300 my-4'>
						<p className='w-[85%] md:w-[90%] py-4'>
							Let&apos;s build something together
						</p>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase text-gray-800'>
							<Link href='/'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									Contact
								</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[#5651e5]'>
								Let&apos;s Connect
							</p>
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaLinkedinIn size={25} />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaGithub size={25} />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<AiOutlineMail size={25} />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<BsFillPersonLinesFill size={25} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
