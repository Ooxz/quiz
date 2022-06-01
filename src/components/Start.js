import YellowBubble from '../images/start-yellow-bubble.png';
import BlueBubble from '../images/start-blue-bubble.png';

export default function Start() {
  return (
	  <div className="start-main">
		  <div className="yellow-bubble-container">
			  <img src={YellowBubble} alt="yellow bubble" className="start-yellow-bubble" />
		  </div>
	<div className="start-container">
	  <h1 className='start-title'>Quizzical</h1>
	  <p className='start-text'>Have fun with our Quizzical Quiz!</p>
	  <button className="start-button">Start quiz</button>
	</div>
	<div className="blue-bubble-container">
			  <img src={BlueBubble} alt="blue bubble" className="start-yellow-bubble" />
		  </div>
	</div>
  );
}