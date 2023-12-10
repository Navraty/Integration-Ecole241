import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <nav className="h-[50px] px-5 items-center bg-white flex py-6
					lg:h-[50px] lg:px-10 lg:flex lg:justify-between lg:items-center  md:flex md:justify-between md:5px">
		<nav className="w-[500px] h-[40px] flex justify-between 
						lg:w-[500px] lg:h-[40px] lg:flex lg:justify-between md:block">
			<nav className="w-[100px] h-[100%] flex border-[1px] border-[black]
							lg:w-[100px]">
				<nav><img src="./etudiant.png" className="m-2 w-[15px]"/></nav>
				
				<a href='cv_tech'>Promo</a>
			</nav>
			<div className="w-[390px] h-[100%]
							lg:w-[380px] lg:h-[100%] ">
				
				<a href='#' className=" border-[1px] text-black border-[black] h-[100%] w-[80%] text-[10px] flex  p-3
									lg:border-[1px] lg:text-black lg:border-[black] lg:h-[100%] lg:w-[80%] lg:gap-6 lg:items-center lg:text-[15spx] lg:p-3">
					<img src="./icone.png" className='w-[15px]'/>
					Participer au reunion d information en ligne	
				</a>
			</div>
		</nav>

		<div className="w-[200px] h-[50px] bg-white flex justify-between
						lg:w-[200px] lg:h-[50px] lg:bg-white lg:flex lg:justify-between lg:block hidden ">
			<div className="w-[40px] h-[100%] p-2">
				<button>
					<img src="./face.png"/>
				</button>
			</div>
			<div className="w-[30px] h-[100%] p-2">
				<button>
					<img src="./twiter.png"/>
				</button>
			</div>
			<div className="w-[30px] h-[100%]  p-2">
				<button>
					<img src="./lin.png"/>
				</button>
			</div>
			<div className="w-[20px] h-[100%] ">
		
				{/* <button>
					 <img src="./translate.png"/>
				</button> */}
					
				{/* <select className="bg-white text-black h-[20px] w-[60px] text-xs">
					<option>fr</option>
				</select>		 */}
			</div>
		</div>
	</nav>

          {/*-----BAR MENUE-----*/}

		<div className="h-[70px] bg-[black] flex justify-between items-center p-10 
						lg:h-[70px] lg:flex lg:justify-between lg: items-center lg:p-10">
			<div className="w-[100px] h-[40px] flex items-center">
				<img src="./241.png"/>
			</div>
			<nav className="  flex justify-between items-center">
				<ul className="flex justify-around items-center hidden w-[60%] gap-5
								lg:flex lg:justify-around lg:items-center lg:w-[100%] lg:gap-5 md:block md:flex md:justify-between md:text-xs md:w-[90%] ">
					<li> <a href="/" className="active text-red-500 ">Accueil</a> </li>
					<li> <a href="#" className="text-white hover:text-red-500">Nos Formations</a> </li>
					<li> <a href="#" className="text-white hover:text-red-500">Nos Campus</a> </li>
					<li> <a href="#" className="text-white hover:text-red-500">A propos de nous</a> </li>
					<li> <a href="#" className="text-white hover:text-red-500">Blog</a> </li>
					{/* <li> <a href="#" className="text-white hover:text-red-500">Contact</a> </li> */}
				</ul>
			</nav>
			<a href='contactez_nous' className="text-red-500 border-[1px] border-[red] p-2 hover:text-white hover:border-white hidden
								lg:text-red-500 lg:border-[1px] lg:border-[red] lg:p-2 hover:text-white lg:hover:border-white lg:block md:text-xs md:block md:flex ">Contactez-Nous</a>
		</div>

        {children}
        
	<footer className="bg-black flex justify-around p-10" >
		<div>
			<img src="./241.png" class="w-[200px] h-[50px]"/>
			<span className="text-white text-xs">Plus qu’une formation , un metier</span>
		</div>
		
			<ul className=" space-y-5">
				<li><a className="text-white" href="#">A propos de nous</a></li>
				<li><a className="text-white" href="#">Contact</a></li>
				<li><a className="text-white" href="#">Notre impact</a></li>
			</ul>
		
		    <ul className=" space-y-5">
				<li><a className="text-white" href="#">Devenir formateur</a></li>
				<li><a className="text-white" href="#">Devenir Partenaire</a></li>
			</ul>
		
		
			<ul class=" space-y-5">
				<li><a className="text-white" href="#">Formation référent Digital</a></li>
				<li><a className="text-white" href="#">Formation Developpeur web</a></li>
			</ul>
			
			<ul className="flex flex-col space-y-5">
				<li><a className="text-white" href="#">Campus de Libreville</a></li>
				<li><a className="text-white" href="#">Campus de Port Gentil</a></li>
				<li><a className="text-white"href="#">Campus de Moandat</a></li>
			</ul>
	</footer>
        </body>
    </html>
  )
}
