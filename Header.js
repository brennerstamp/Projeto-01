import { click } from '@testing-library/user-event/dist/click';
import { isClickableInput } from '@testing-library/user-event/dist/utils';
import './Header.css';
import logo from './Images/logo.png'

function Header(props) {
    return (
        <><div className="header">
            <div className='center'>
                <img src={logo} />
            </div>
        </div>
        <div class="container-banner">
		<div class="center">
		<div>
		<div class="container-list">
			<ul>
				<li>Lorem ipsum silor domor amet</li>
				<li>Lorem ipsum silor domor amet</li>
				<li>Lorem ipsum silor domor amet</li>
				<li>Lorem ipsum silor domor amet</li>
			</ul>
		</div> 
		</div>
		<div>
			<div class="form">
				<h2>Preencha o formulário e inicie a sua
				caminhada para virar um webmaster!</h2>
				<form>
					<div class="input-container">
						<span>Nome*</span>
						<input type="text" name="nome" required />
					</div>

					<div class="input-container">
						<span>E-mail*</span>
						<input type="text" name="nome" required />
					</div>

					<div class="input-container">
						<span>Telefone*</span>
						<input type="text" name="nome" required />
					</div>

					<p class="warning">*Campos obrigatórios</p>

					<div class="input-submit-container">
						<input type="submit" name="acao" value="Enviar"/>
							
						
					</div>
				</form>
			</div>
		</div>
			<div class="clear"></div>
		</div>
	</div>
        
       
		        
			
	

            
            </>

    );
}

export default Header;