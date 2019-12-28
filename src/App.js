import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import logo from './logo.svg';
import nodelogo from './nodejs.svg';

const particleOptions = {
	    "particles": {
	        "number": {
	            "value": 8,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 1,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "images",
	                "circle"
	            ],
	            "images": [
	                {
	                    "src":logo,
	                    "height": 20,
	                    "width": 23
                  },
                  {
                    "src":nodelogo,
                    "height":20,
                    "width":23
                  }
	            ]
	        },
	        "color": {
	            "value": "#CCC"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": false
	};

function App() {
  return (
    <div>
      <h1 style={{color:'white'}}>Hello World</h1>
      <Particles  params={particleOptions}/> 
    </div>
  );
}

export default App;
