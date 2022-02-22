import './Container.css';
import icon from './Images/icon.png';

function Container(props) {
    return(
        <><div class="container-2">
		<div class="center">
			<h2>Lorem ipsum</h2>
			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
		</div>
        <div className='arrow'></div>
        </div>

        
        <div className='section-1'>
            <div className='center'>
                <h2>Aprenda com quem está no mercado</h2>

                <div className='container-section'>

                    <div className='container-single'>
                        <img src={icon} />
                        <div className='text-container-single'>
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volelit esse molestie consequat, vel illum dolore</p>
                        </div>
                    </div>

                    <div className='container-single'>
                        <img src={icon} />
                        <div className='text-container-single'>
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volelit esse molestie consequat, vel illum dolore</p>
                        </div>
                    </div>

                    <div className='container-single'>
                        <img src={icon} />
                        <div className='text-container-single'>
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volelit esse molestie consequat, vel illum dolore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>

    );
}

export default Container;