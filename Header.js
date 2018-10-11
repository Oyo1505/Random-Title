import React, { Component } from 'react';
import Nav from "../components/Nav"
import Title from "../components/Title"
import ControlledCarousel from '../components/ControlledCarousel'

class Header extends Component {
	constructor() {
		super();

		this.state = { title: "",
						position: 0
					};
	
		this.updateTitle = this.updateTitle.bind(this);
	}

	randomString (){
		
		const letters = "éabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890 ";
		//const letters = [""," ","é","-","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];

		var title = 'Henri-Pierre RIGOULET Intégrateur - Developpeur Web';
		let titleCount = title.length
		var titleCopy= this.state.title.slice(0, titleCount);
	
		var  result=[];
		// 
		var j ;
		for( var i=0; i < titleCount; i++ ){
				 result += letters[Math.floor(Math.random() * letters.length)];

		}
		
       	return result;	
		
	}

	updateRandomTitle( arrayTest){
					
					var title = 'Henri-Pierre RIGOULET Intégrateur - Développeur Web';
					var titleCopy2 = Array.from(title);
					let titleCount = title.length
					var stringRandom = this.randomString();
					
					var titleCopy = Array.from(this.state.title);
						

			
					for(var i =0; i < titleCount; i++ ){
						var char1 = titleCopy2[i];

						for(var j = 0 ; j < stringRandom.length; j++){
								
								
								var char2 = stringRandom[j];
								var str = char1.localeCompare(char2);

							if(titleCopy2.indexOf(char1, i) === titleCopy.indexOf(char2, j) ){
											//console.log(titleCopy === titleCopy2))					
									arrayTest.splice(i , 1, char1);

																
							}else if(titleCopy === titleCopy2){
								console.log('its done bro good job')
								return;
							}
						}
					}
															
					
					
					var updatedTitle = this.updateTitle(stringRandom, arrayTest);				
					this.setState({title: updatedTitle});

	}

	updateTitle(string, array) {
		
				
			for(var i = 0 ; i <= string.length; i++){
				
				if(array[i]){
						var arrayString = array.join('')

						var loli = string.slice(0, arrayString.length)

						var res = string.slice(0, string.length);

						var subChar = res.substring(arrayString.length);

					
						var  arrayString2 = [arrayString, subChar];
						var newString = arrayString2.join('');
					

						return newString ;
						
					}else if(array == 'undefined' || array == null || !array  ){
					
							
						return string;
					
					}
			}

					return string;

	}

	componentDidMount(){
	
		var firstTitle = this.randomString();
			this.setState({title: firstTitle});
		var arrayTest = [];
	
	
		this._interval = setInterval(() =>this.updateRandomTitle(arrayTest) ,500);
		
	}

	componentWillUnmount(){
		
			  clearInterval(this._interval);
	}

	



	render(){
		
						
							

		return(
				<header>
			
						<div className='carousel-box'>
							<div className='pixel-overlay'></div>	
							<Title key="1" title={this.state.title} />
							<ControlledCarousel />

						</div>
						
			
						
						<Nav />
		

				</header>

			);
	}
}

export default Header