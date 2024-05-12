"use client"
import { useState } from "react";

export default function Home() {
  const [showLabelName, setShowLabelName] = useState(true); 
  const [showLabelEmail, setShowLabelEmail] = useState(true); 
  const [showLabelTel, setShowLabelTel] = useState(true); 
  const [showLabelMessage, setShowLabelMessage] = useState(true); 

  const [typedName, setTypedName] = useState(''); 
  const [typedEmail, setTypedEmail] = useState(''); 
  const [typedTel, setTypedTel] = useState(''); 
  const [typedMessage, setTypedMessage] = useState(''); 

  const [isSelectOpen, setIsSelectOpen] = useState(false); 
  const [meatsList, setMeatsList] = useState([
    'Selecione',
    'Suína',
    'Bovina',
    'Frango',
    'Carneiro'
  ]); 
  const [selectedMeat, setSelectedMeat] = useState(0); 

  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);

  const state = checkState();

  function clickAll(){
    const state = checkState();

    if(state === 2 || state === 1){
      setIsCheckedOne(false),
      setIsCheckedTwo(false)
    } else if(state === 0){
      setIsCheckedOne(true),
      setIsCheckedTwo(true)
    }
  }
  
  function getCheckAllStyles(){
    if(state === 2 || state === 1) return ' bg-orange-500 '
    if(state === 0) return ' '
  }

  function checkState(){
    if(isCheckedOne && isCheckedTwo){
      return 2
    }
    if(isCheckedOne || isCheckedTwo){
      return 1
    }
    return 0
  }

  return (
    <body>
		<header>

      <div className="menu-hamburguer">
          <span className="row-span"></span>
          <span className="row-span"></span>
          <span className="row-span"></span>
      </div>

			<div id="header-text">
          <h1>VEGGIE SHOP</h1>
          <span id="main-subtitle">Veggie meats</span>
      </div>

		</header>
	
		<section id="banner">
			<img src="images/file-mignom-banner.jpg" alt="filé mignom" /> 
			
			<div className="overlay-text">
				<h2>O mais puro sabor <br/> sem nenhuma dor</h2>
				<p>Porque o seu prazer não precisa vir do sofrimento de ninguém</p>
			</div>
		</section>
	
	  
		<section id="quem-somos" className="container" >
			<div className="caixa-texto">
				<h2>Quem somos</h2>
	
				<p>Somos uma loja de carnes veganas nobres e exóticas que competem até mesmo com as melhores carnes não veganas. Nosso objetivo é trazer uma experiência exclusiva que marque a vida de todos os nossos clientes como uma referência do sabor.</p>
			</div>
	
			<img src="images/logo-VS.png" alt="logo Veggie Shop veggie meats" title="logo Veggie Shop" id="logo-VS"/>
		</section>
	
	    
		<section id="exoticas">
			<div className="caixa-texto container">
				<h2>Carnes exóticas</h2>
				<p className="subtitle">Para redescobrir seu paladar</p>  
			</div>
			
			<div className="card-container container">
				
				<div className="card">
					<img src="images/camarao.jpg"/>
					<h3>Camarão vegano</h3>
					<p>Camarão delícioso pronto para qualquer prato. Cozido, assado ou frito, experimente</p>
				</div>
	
				<div className="card">
					<img src="images/carne-ra.jpg"/>
					<h3>Carne de rã vegana</h3>
					<p>Para os amantes da carne de rã apresentamos uma opção surpreendente</p>
				</div>
	
				<div className="card">
					<img src="images/codorna.jpg"/>
					<h3>Carne de codorna vegana</h3>
					<p>Para aqueles que não se contentam com pouco. O sabor da codorna por completo</p>
				</div>
	
				<div className="card">
					<img src="images/cervo.jpg"/>
					<h3>Carne de cervo vegana</h3>
					<p>Um sabor impressionante que só a carne de cervo pode oferecer</p>
				</div>
				
			</div>
		</section>
	
	    
		<section id="nobres">
			<div className="caixa-texto container">
				<h2>Carnes Nobres</h2>
				<p className="subtitle">Para quem nã aceita menos que a melhor</p>
			</div>
	
			<div className="card-container container">
				
				<div className="card">
					<img src="images/picanha.jpg"/>
					<h3>Picanha vegana</h3>
					<p>Carne macia e suculenta para os amantes de um belo churrasco</p>
				</div>
	
				<div className="card">
					<img src="images/file-mignom.jpg"/>
					<h3>Filé mignom vegano</h3>
					<p>Carne versátil e excelente para todas as situações</p>
				</div>
	
				<div className="card">
					<img src="images/peixe.jpg"/>
					<h3>Peixe vegano</h3>
					<p>Nossa versão do filé de peixe com sabor acentuado e preparada para seu prato</p>
				</div>
	
				<div className="card">
					<img src="images/carneiro.jpg"/>
					<h3>Carne de carneiro vegana</h3>
					<p>Sabor, maciez e textura de se admirar, uma das delícias mais apreciadas de nossa loja</p>
				</div>
				
			</div>
		</section>
	
	
		<section id="localizacao">
			
			
			<div className="container">
	
				<iframe className="mapa-local" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.2696787508253!2d-43.17943573190514!3d-22.507041367133187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99007e82d9236f%3A0xa9241871d369007a!2sPetr%C3%B3polis%20-%20Cascatinha%2C%20Petr%C3%B3polis%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1685040311551!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
	
				<div className="caixa-texto">
					<h2>Localização</h2>
					<p className="subtitle">Venha conhecer nossa loja! Estamos localizados no Centro de Petrópolis, rua Certinha número 200</p>
				</div>  
			</div>
			
		</section>
	
	
	    
		<section id="mensagem">
			<div className="caixa-texto container">
				<h2>Nos envie uma mensagem</h2>
				<p className="subtitle"> Estamos sempre prontos para atendê-lo</p>
			</div>
	
			<form className="container">
	
				<div className="text-inputs">
	
					<div className="input-container" id="input-nome">
            <p className="error-message hide">O nome deve conter ao menos dois nomes</p>
						<input type="text" autoComplete="name" id="nome-contato" data-name="nome" title="Preencha esse campo" className="border-b bg-neutral-50" value={typedName} onChange={e=>setTypedName(e.target.value)} onFocus={()=>setShowLabelName(false)} onBlur={()=> { if(typedName.length===0) setShowLabelName(true) } }/>
						{showLabelName && 
            <label className="" htmlFor="nome-contato">Nome Completo</label>
            }
					</div>
	
					<div className="input-container" id="">
            <p className="error-message hide">O email deve ser um email válido</p>
						<input type="email" autoComplete="email" id="email-contato" data-name="email" title="Preencha esse campo" className="border-b bg-neutral-50" value={typedEmail} onChange={e=>setTypedEmail(e.target.value)} onFocus={()=>setShowLabelEmail(false)} onBlur={()=> { if(typedEmail.length===0) setShowLabelEmail(true) } }/>
						{showLabelEmail && 
            <label className="" htmlFor="email-contato">Email</label>
            }
					</div>
					
					<div className="input-container">
            <p className="error-message hide">O telefone deve conter 11 dígitos numéricos</p>
						<input type="tel" autoComplete="tel" id="tel-contato" data-name="tel" title="Preencha esse campo" className=" border-b bg-neutral-50 " value={typedTel} onChange={e=>setTypedTel(e.target.value)} onFocus={()=>setShowLabelTel(false)} onBlur={()=> { if(typedTel.length===0) setShowLabelTel(true) } }/>
						{showLabelTel && 
            <label className="" htmlFor="tel-contato">Telefone</label>
            }
					</div>
	
					<div className="input-container">
            <p className="error-message hide">A mensagem deve conter ao menos 6 letras</p>
						<textarea id="mensagem-contato" data-name="mensagem" title="Preencha esse campo" className="text-input" value={typedMessage} onChange={e=>setTypedMessage(e.target.value)} onFocus={()=>setShowLabelMessage(false)} onBlur={()=> { if(typedMessage.length===0) setShowLabelMessage(true) } }/>
						{showLabelMessage && 
            <label className="" htmlFor="mensagem-contato">Mensagem</label>
            }
					</div>
					
				</div>
	
				<div className="select-inputs">
	
					<div className="form-sec">
              <h3>Preferências</h3>
              <div className="radio-inputs">
              
                  <div className="input-container">
              

                      <input type="radio" name="preferencia" id="ambas-prefer" />
              
                      <label htmlFor="ambas-prefer">Ambas</label>
              
                  </div>
                  <div className="input-container">
              
                      <input type="radio" name="preferencia" id="exoticas-prefer" />
              
                      <label htmlFor="exoticas-prefer">Exóticas</label>
              
                  </div>
                  <div className="input-container">
              
                      <input type="radio" name="preferencia" id="tradicionais-prefer" />
                      <label htmlFor="tradicionais-prefer">Tradicionais</label>
              
                  </div> 
              </div>
          </div>

					<div className="form-sec">
              <h3>Tipo de carne favorita</h3>

              
              <div className="relative" data-name="carne-favorita">
                  
                  <div className="border p-2 rounded-t-lg cursor-pointer hover:bg-neutral-100" onClick={()=>setIsSelectOpen(!isSelectOpen)}>
                      <span>{meatsList[selectedMeat]}</span>
                  </div>

                  {isSelectOpen && 
                    <div className=" absolute top-11 bg-neutral-50  flex flex-col z-10 w-full">
                      
                      {meatsList.map((meat, index) =>{
                        if(meat !== meatsList[selectedMeat]){
                          return (
                            <span className="p-2 border-x border-b hover:bg-neutral-100 cursor-pointer" key={index} onClick={()=> {setIsSelectOpen(false) ;setSelectedMeat(index)}} >{meat}</span>
                          );
                        }
                      })}
                      
                    </div>
                  }
              </div>
          </div>

          <div className="form-sec">
              <h3>Receber comunicações por</h3>
              <div className="check-inputs">
                  <div className="flex items-center gap-2">

                      <div className={ (isCheckedOne ? ' bg-orange-500 ' : '') + ' border w-4 h-4 cursor-pointer'} onClick={()=>setIsCheckedOne(!isCheckedOne)} id="check-sms" data-name="comunicacoes">
                        {isCheckedOne &&
                          <img src="images/done.svg" alt="" className="p-0.5" />
                        }
                      </div>

                      <label htmlFor="check-sms">SMS</label>

                  </div>

                  <div className="flex items-center gap-2">

                      <div className={ (isCheckedTwo ? ' bg-orange-500 ' : '') + ' border w-4 h-4 cursor-pointer'} onClick={()=>setIsCheckedTwo(!isCheckedTwo)} id="check-email" data-name="comunicacoes">
                        {isCheckedTwo &&
                          <img src="images/done.svg" alt="" className="p-0.5" />
                        }
                      </div>

                      <label htmlFor="check-email">Email</label>

                  </div>

                  <div className="flex items-center gap-2">

                      <div className={ getCheckAllStyles() + ' border w-4 h-4 cursor-pointer '} onClick={()=> clickAll()} id="" data-name="comunicacoes">
                        {state===2 &&
                          <img src="images/done.svg" alt="" className="p-0.5" />
                        }
                        {state===1 &&
                          <img src="images/dash.svg" alt="" className="p-0.5"/>
                        }
                      </div>

                      <label htmlFor="check-todos">Todos os meios</label>

                  </div>
              </div>
          </div>


			    </div>
			
				<button type="button" className="submit-btn" id="submit-contato">Enviar</button>
				
			</form>
	    </section>
	
	<footer id="contato">
		<div className="container">
			<h2>Fale conosco</h2>
			<p className="subtitle">
				Será um prazer para nós atender seu chamado
			</p>
	
			<p>Telefone: <a href="tel:+5521991890768"> (21) 99189-0768</a></p>
	
			<p>Email: <a href="mailto:lucaslim.dias@gmail.com?subject=Contato pelo site Veggie Shop&body=Olá gostaria de mais informações sobre os produtos Veggie Shop"> lucaslim.dias@gmail.com</a></p>
	  
			<div className="social-media">
				<a href="https://wa.me/5521991890768?text=Olá%20gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20Veggie%20Shop" target="_blank">
				<img className="whatsapp-icon" src="images/whatsapp-icon.svg" alt="WhatsApp"/>
				</a>
	
				<a href="https://www.instagram.com/veggieshop" target="_blank">
				<img className="instagram-icon" src="images/instagram-icon.svg" alt="Instagram"/>
				</a>
	
				<a href="https://www.facebook.com/veggieshop" target="_blank">
				<img className="facebook-icon" src="images/facebook-icon.svg" alt="Facebook"/>
				</a>
			</div>
	
		</div>
		
		<div className="footer-bottom">
			<p>© 2023 Veggie Shop. Todos os direitos reservados.</p>
		</div>
	</footer>
	
    <script src="myLibComponents/lib.js"></script>
	

	  </body>
  );
}
