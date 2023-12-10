// 


export default function contact(){
  return(
    <div className=" flex flex-col gap-5 bg-white">
      <div className=" mt-5 flex justify-evenly">
        <div className="px-10 text-black w-[50%]">
          <h1>Formulaire de Contact</h1>
       
        </div>
        <div className="px-10 text-black ">
          <span>LOCALISATION</span>
        </div>
      </div>
      <div className="flex justify-evenly ">
        <form className=" flex py-10 px-5 mx-3 shadow-xl w-full h-[390px]">
          <div className="flex  flex-col gap-5 py-5 w-full ">
            <h1 className= "ml-3">Entrer en Contact</h1>
            <input type="text" id="nom"  placeholder="Entrer votre Nom" className=" border-b border-black w-full rounded  text-black"/>
            <input type="text" id="prenom"  placeholder=" Entrer votre Prenom" className="border-b border-black w-full rounded text-black"/>
            <input type="email" id="email"  placeholder=" Entrer votre Email" className="border-b border-black w-full rounded text-black"/>
            <input type="text" id="message"  placeholder=" Entrer votre Message" className="border-b border-black w-full h-28 rounded text-black"/>
            <button className="w-[50%]  mx-10 bg-slate-600 rounded hover:bg-slate-800">
              Soumettre
            </button>
          </div>
        </form>
        <div className=" pl-10 h-[200px] w-[50%]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.423639728031!2d9.44090359357909!3d0.41863719999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b85ff34afc1%3A0xfa0291b2c915010d!2sEcole%20241!5e0!3m2!1sfr!2sga!4v1689817009103!5m2!1sfr!2sga" className="w-[500px] h-[390px] border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
     
      <div className="flex gap-5 mb-5 p-5 ">

        <div className=" bg-gray-100 shadow-md w-[70vh] h-[100px] px-5 rounded ">
          <div>
            <p></p>
            <p>Libreville</p>
            <p>Port-Gentil</p>
            <p>Moaonda</p>
          </div>
        </div>
         
        <div className="bg-gray-100 shadow-md w-[70vh] h-[100px] px-5 rounded">
          <span>LOCALISATION</span>
          <p>A l'ancien Sobraga</p>
          <p>PB 92103-9000</p>
        </div>
        <div className=" bg-gray-100 shadow-md w-[80vh] h-[100px] ">
          <div className=" w-[50px] h-[60%] px-5">
            <p>HEURES</p>
            <p>Lun_Ven</p> 
            <p>sam...</p>
            <img src='./img.png'/>
          </div>
        </div>
      </div>  
    </div> 
  )
}

