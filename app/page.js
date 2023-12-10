import Image from 'next/image'

export default function Home() {
  return (
    <main> 
		<section className="flex justify-between bg-white 
							lg:flex lg:justify-between lg:bg-white"> 
			<div className="w-[50%] ml-[40px] flex flex-col justify-between">
 			<p className="font-normal text-[20px] text-black
							lg:font-normal lg:text-[40px] lg:text-black">
				Ecole 241 , Plus qu’une 
				formation un <b>métier</b>
			</p>
			<p className="text-[10px] text-black mt-[80px]
							lg:text-[15px] lg:text-black lg:mt-[80px] ">
				Ecole 241 forme aux métiers du numérique dans tout le Gabon . ​Rejoignez un réseau 
				de plus de 25 000 apprenants et apprenantes. ​Vous souhaitez vous aussi intégrer un 
				parcours de formation Simplon ou être conseillé-e dans votre parcours?
			</p>

			<button className="bg-red-500 w-[40%] mt-[30px]
				[40px] p-4 rounded border-none 
				text-[15px] text-white 
				font-semibold">
			   	Contactez-nous
			</button>
		</div>
			
	<div className=" h-[55vh] flex justify-evenly relative m-5 flex-col
					lg:h-[55vh] lg:flex lg:justify-evenly lg:relative lg:m-5 md:flex-row ">

		<div className="w-[50%] h-[45vh] mt-2 rounded overflow-hidden relative px-2">
			<img src="./femme1.jpg" className="absolute inset-0 h-full w-full object-cover" alt="femme"/>
			<div className="absolute inset-0 bg-gray-900 bg-opacity-70">
			
				<div className="flex flex-col h-full w-1/2 relative text-white underline underline-offset-1 mt-[50%] px-2">
					<p className=' text-xs'><a href="">Lorem ipsum dolor sit amet. Vel 
					quia sint ex fuga quae et </a></p>
					<a href="" className=" font-semibold text-xs">Lire</a>
				</div>
			</div>
		</div>
			<div className="absolute top-[90%] ml-[-50%] items-center w-[30%] flex justify-around underline underline-offset-1">
				<p className="text-black text-xs"><a href="">Nos Articles de blog </a></p>
				<img src="./fleche.png" className="w-[20px] h-[20px]" alt=""/>
			</div>
		
		<div className="w-[40%] h-[47vh]">
			<div className="text-white underline underline-offset-1 h-[20vh] bg-lime-800 overflow-hidden px-2 relative rounded mt-[10%]">
				<img src="./femme1.jpg" alt="femme" className="absolute inset-0 h-full w-full object-cover"/>
				<div className="absolute inset-0 bg-gray-900 bg-opacity-70">
				  	<div className="flex flex-col h-full relative text-white mt-[10%] underline underline-offset-1">
						<p className=' text-xs'><a href="">Lorem ipsum dolor sit amet. Vel 
						quia sint ex fuga quae et </a></p>
						<a href=""className="font-semibold mt-[2%] text-xs">Lire</a>
					</div>
				</div>	
			</div>

			<div className="w-full h-[47vh]">
		    <div className="text-white underline underline-offset-1 h-[20vh] bg-lime-800 overflow-hidden px-2 relative rounded mt-[10%]">
				<img src="./femme1.jpg" alt="femme" className="absolute inset-0 h-full w-full object-cover"/>
			   		<div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>	
						<div className="flex flex-col h-full relative text-white mt-[10%] undreline underline-offset-1">
							<p className=' text-xs'><a href="">Lorem ipsum dolor sit amet. Vel 
							quia sint ex fuga quae et </a></p>
							<a href=""className="font-semibold mt-[2%] text-xs ">Lire</a>
						</div>	
				 </div>
			</div>
	  	</div>
	</div>
		</section>
		<section className=" bg-black flex justify-between border border-black items center flex flex-col  my-6">

            <div className="w-[64%] h-[90%] text-white mx-[3%] my-5 " >
				<p className="font-semibold text-[40px]">Notre programme</p>
				<p className='text-xs'>Ecole 241, c’est une formation en informatique d’excellence pour tous et toutes. Au programme de cette école différente et 
					innovante : une approche par projets pour progresser et développer des compétences techniques et humaines 
					recherchées sur le marché du travail.
				</p>
            </div>

            <div className=" w-[90%] h-[90%] justify-around flex mx-[3%] text-white">

	          <div className=" justify-around w-[20%] h-[20p%] items-center flex">
		        <img src="./capa.png"/>
		        <div className="w-[47%] text-xs">PAS DE COURS. PAS DE PROFS.</div>
		     </div>
			<div className=" justify-around w-[20%] h-[20p%] items-center flex">
				<img src="./calque.png"/>
				<div className="w-[47%] text-xs">UNE PÉDAGOGIE PAR PROJETS.</div>
			</div>
			<div className=" justify-around w-[20%] h-[20p%] items-center flex">
				<img src="./capa.png"/>
				<div className="w-[47%] text-xs">UN APPRENTISSAGE PEER TO PEER.</div>
			</div>
			<div className=" justify-around w-[20%] h-[20p%] items-center flex">
				<img src="./calque_1.png"/>
				<div className="w-[47%] text-xs">Apprendre en s’ammusant.</div>
			</div>
			</div>
			
		</section>
		<section  className="flex flex-col bg-white">
			<div className="flex  gap-4 justify-between">
				<div className=" px-10 w-[60%]">
					<p className="text-[50px] font-semibold text-black ">Nos valeurs</p>
					<p className='text-xs text-black [50%]'>La position de Ecole 241 est une première et unique au Gabon , elle repose sur des 
						valeurs fortes pour une insertion professionnelle durable sur le marché de
						l’emploi.
						Pourquoi Ecole 241 est elle si différente ?
					</p>
					<button className="bg-red-500 w-[50%] mt-[40px]
						 [40px] p-4 rounded border-none 
						 text-[15px] text-white 
						 font-semibold">
						Unique au Gabon
					</button>
				</div>
				<div class="flex justify-between ml-5 w-[50%] p-5 ">
					<div class=" w-[50%]">
						<div class="flex w-[50%]">
							<img src="./layer.png"/>
							<p className='text-xs text-black'>GRATUITÉ</p>
						</div>
						<div>
							<img src="./layer.png"/>
							<p className='text-xs text-black'>AUCUN DIPLÔME REQUIS</p>
						</div>
					</div>
				</div>
				<div class=" w-[40%] p-2 ">
					<div class="flex justify-between">
						<img src="./layer.png"/>
						<p className='text-xs text-black'>POUR TOUS POUR TOUTES</p>
					</div>
					<div class="flex justity-between w-[80%]">
						<img src="./layer.png"/>
						<p className='text-xs text-black'>PAS BESOIN DE SAVOIR DÉJÀ CODER OU D AIMER LES MATHS</p>
					</div>
				</div>
			</div>
		</section>

		<section className="bg-white flex flex-col p-3">
		    <span className="font-semibold text-[40px] text-black mx-3">Nos cohortes</span>
			<span className="mx-5 text-black text-sm">Se former à un métier</span>

			<div className="flex justify-between px-8 py-10">

				<div className="bg-gray-300 flex flex-col px-4 py-4 gap-4 rounded w-[48%]">
					<div className="justify-between flex text-xl font-semibold">
						<p>Développeur Web et Web<br/> Mobile</p>
						<img src="./code.png" className=""/>
					</div>
					<div className='flex flex-col gap-4'>
						<p>Le développeur web mobile a pour mission de créer et de 
							mettre en œuvre des applications mobiles exploitables sur 
							smartphone et tablette.
						</p>

						<p>Dans le cadre de son travail, il code et élabore des logiciels pour
							traiter les données. Il est aussi chargé de construire des sites
							web, des applications en ligne, des outils interactifs et autres 
							produits accomplis selon les demandes du client.
						</p>
					</div>

					<button className="bg-red-500 w-[44%] p-4 rounded text-white font-semibold">
						En savoir plus
					</button>
				</div>

				<div className="bg-gray-300 flex flex-col px-4 py-4 gap-4 rounded w-[48%]">
					<div className="justify-between flex text-xl font-semibold">
						<p>Référent Digital</p>
						<img src="./web.png" className=""/>
					</div>
					<div className='flex flex-col gap-4'>
						<p>Le développeur web mobile a pour tâche de concevoir et de créer 
							des applications mobiles compatibles avec les smartphones et 
							tablettes. Il codifie et programme des programmes afin de gérer les 
							données
						</p>

						<p>En outre, il est responsable de construire des sites web, des 
							applications en ligne, des outils interactifs et d’autres produits 
							achevés selon les besoins spécifiques de la clientèle.
						</p>
					</div>

					<button className="bg-red-500 w-[44%] p-4 rounded text-white font-semibold">
						En savoir plus
					</button>
				</div>

			</div>
		</section>
		<section className="p-5 mx-3 bg-gray-100">
			<div className="">
				<p className="font-semibold text-[40px] text-black"><b>Status des promos formations</b></p>
				<p className="font-semibold text-xs text-black">Nous vous listons les promotions en cours et celle avenirs</p>
			</div>

			<div className="w-[90%] bg-gray-100 flex gap-5  justify- around rounded border-none p-2 bg-white">
				<div className="w-1/2  border border-black mx-2">
					<p className="font-semibold text-black text-xs m-2 flex gap-3">Développement web et web mobile</p>
					<p className="font semibold mx-2 text-black text-xs ">Promo 5 2023 - 2024</p>
					<div className=" flex justify-between mx-3">
						<div className="flex justify-evenly gap-10">
							<p className='text-black text-xs' >Ville:Libreville</p>
							<button className=' text-black text-[8px]' >PROMOTION EN COURS</button>
							<img src="./images/cercle.png" className="rounded full bg-red-500 "/>
						</div>
					</div>
				</div>
				<div class="w-1/2 border border-black bg-white">
					<p  class="font-semibold text-black text-xs  m-2">Développement web et web mobile</p>
					<p  class="font-semibold text-black text-xs  m-2">Promo 5 2023 - 2024</p>
					<div class=" flex justify-between m-2">
						<p className='text-black text-xs'>Ville : Moanda</p>
						<button className='text-black text-xs'>SELECTION EN COURS</button>
						<img src="./images/rond.png" class="rounded full bg-green-500 "/>
					</div>	
				</div>
				<div class="w-1/2  border border-black bg-white">
							<p  class="font-semibold text-black text-xs m-2">Réfèrent Digital</p>
							<p  class="font-semibold text-black text-xs m-2">Promo 5 2023 - 2024</p>
						<div class=" flex justify-between mx-2">
								<p className='text-black text-xs'>Ville : Libreville</p>
							<button className='text-xs text-black'>PROMOTION EN COURS</button>
							<img src="./image/rond.png"class="rounded full bg-red-800 "/>
						</div>
			       </div>
			</div>
		</section>
		<section className="mx-3 p-5 bg-white">
			<div className="h-[50%]">
				<p className="font-semibold text-black text-black text-[40px]"><b>Nous sommes à</b></p>
				<p className="w-[50%] text-black text-xs ">École 241 possède à nos deux campus notamment sur les villes de Libreville et Port
				Gentil, cette année nous nous déployons du côté de la ville de Moanda.
				</p>

			</div>
			<div className="flex bg-gray-200 gap-x-4 p-x-5">
				<div className=" w-[50%] h-[500px] rounded overflow-hidden relative px-2">
				<img src="./libreville.jpg" className="absolute inset-0 h-full w-full object-cover" alt="libreville"/>
				<div className="absolute inset-0 bg-gray-900 bg-opacity-70 ">	
			</div>
					<p className='text-white'>120 ETUDIANTS FORMES A CE JOUR</p>
					<p className="font-semibold text-[60px] text-white ml-5 my-20">LIBREVILLE</p>
					<p className='text-white'>qui voluptatibus natus qui repudiandae pariatur et    	
						quisquam aperiam qui dolorem sequi aut error omnis
					</p>

				</div>
				<div className=" w-[50%] h-[500px] flex flex-col gap-5">
					<div className="w-full h-[50%]  rounded overflow-hidden relative px-2">
						<img src="./téléchargement.jpg" className="absolute inset-0 h-full w-full object-cover" alt="port-gentil"/>
						<div className="absolute inset-0 bg-gray-900 bg-opacity-70 ">	
						</div>
					</div>
					<div className="w-full h-[50%] ">
						<div className="w-full h-[250px] rounded overflow-hidden relative px-2">
							<img src="./moanda.jpg" className="absolute inset-0 h-full w-full object-cover" alt=""/><p>LIBREVILLE</p>
							<div className="absolute inset-0 bg-gray-900 bg-opacity-70 ">	
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="mx-3 p-5 bg-gray-200 px-5 ">
		<div className="">
			<p className="font-bold text-[30px] text-black">Témoignage des alumnis</p>
		</div>
		<div className="flex p-y-5 h-48 ">
		<div className='h-[40px] w-[40px] bg-gray-900 mt-20 mx-5'></div>
			<div className=" h-[100%] w-[30%] bg-white ">
				<p className='text-black text-xs items-center m-5 text-center px-5'>Eum veritatis excepturi sed blanditiis 
					consequatur quo officia cumque quo 
				 	accusantium voluptate. Qui eligendi 
				 	quaerat et natus voluptatum cum natus 
					 velit! Ut accusamus galisum aut dolorum 
				 	 eaque et ullam odio
					<div className='flex'>
					  <img src="./img.png" class="rounded-full w-[30px] h-[30px]"/>
					  	<div className='flex flex-col'>
					  		<span className='text-black '>stella</span>
					  		<span className='text-red-400'>Freelancer developpeur web</span>
					  	</div>
					</div>
				</p>
			</div>

			<div className=" h-[100%] w-[30%] bg-sky-200">
				<p className='text-black text-xs items-center m-5 text-center px-5'>Eum veritatis excepturi sed blanditiis 
					consequatur quo officia cumque quo 
				 	accusantium voluptate. Qui eligendi 
				 	quaerat et natus voluptatum cum natus 
					 velit! Ut accusamus galisum aut dolorum 
				 	 eaque et ullam odio
					<div className='flex'>
					  <img src="./img.png" class="rounded-full w-[30px] h-[30px]"/>
					  	<div className='flex flex-col'>
					  		<span className='text-black '>stella</span>
					  		<span className='text-red-400'>Freelancer developpeur web</span>
					  	</div>
					</div>
				</p>
			</div>

			<div className=" h-[100%] w-[30%] bg-white shadow-md"> 
				<p className='text-black text-xs  m-5 text-center px-5'>Eum veritatis excepturi sed blanditiis 
					consequatur quo officia cumque quo 
				 	accusantium voluptate. Qui eligendi 
				 	quaerat et natus voluptatum cum natus 
					 velit! Ut accusamus galisum aut dolorum 
				 	 eaque et ullam odio
					<div className='flex'>
					  <img src="./img.png" class="rounded-full w-[30px] h-[30px]"/>
					  	<div className='flex flex-col'>
					  		<span className='text-black '>stella</span>
					  		<span className='text-red-400'>Freelancer developpeur web</span>
					  	</div>
					</div>
				</p>
			</div>
		</div>
		</section>
		<section class=" flex justify-between px-9 bg-white m-5 p-5">
			<div class="w-[40%] ">
				<h1 class="font-bold text-[20px] text-black w-[40%] p-3">Les compagnies qui nous font confiance</h1>
				<p class="font-semibold text-[30] text-black text-xs w-[50%]">Vous souhaitez devenir partenaire de l école cliquer
					sur le bouton ci-dessous
				</p>
				<button class="bg-red-500 w-[50%] mt-[40px] p-4 rounded border-none text-[15px]
					text-white font-semibold  ">En savoir plus
				</button>
			</div>
			<div class=" w-[50%] flex justify-between px-15">
				<div class=" flex-col w-[25%] flex justify-between">
					<img src="./15.jpeg"/>
					<img src="./ogooue.png"/>
					<img src="./aramet.png"/>
				</div>
			
				<div class=" flex-col w-[25%] flex justify-between">
					<img src="./comilog.png"/>
					<img src="./pnpe.png"/>
					<img src="./simplon.png"/>
				</div>		
			</div>
		</section>
		<section class="w-[100%] m-10 bg-white">
			<div class="h-[200px] w-[70%] bg-gray-100 mx-40"></div>
		</section> 
    </main>
  )
}


