import React from "react";
import Light from "./Light";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";


const Home = () => {

	const [lights, setLights] = useState([
		{colorClass: "red"},
		{colorClass: "yellow"},
		{colorClass: "green"},
	])

	const [selectedLight, setSelectedLight] = useState(null)
	const [showPurpleLight, setShowPurpleLight] = useState(false)

	const lightColors = ["red", "yellow", "green"]
	

    const handleClickSelected = (id) => {
        setSelectedLight(id)
	}

	const handlePurpleLight = () => {
        if (showPurpleLight) {
            setLights(lights.filter(light => light.colorClass !== "purple"));
        } else {
            setLights([...lights, { colorClass: "purple" }]);
        }
        setShowPurpleLight(!showPurpleLight);
    };

	const changeLightColor = (randomLightColors) => {
		if(selectedLight !== null){
			const randomLightColors = lightColors[Math.floor(Math.random()*lightColors.length)]
			const updateColor = lights.map((light, index) => {
				if(index === selectedLight){
					return {...light, colorClass: randomLightColors}
				}
				return light
			})
			setLights(updateColor)
		}
	}

	return (
		<>
			<Header/>
			<Main>
				{lights.map((light, index) => {
					return(
						<Light
							key={index}
							colorClass={light.colorClass}
							isSelected={selectedLight === index}
							onclick={() => handleClickSelected(index)}
						/>
					)
				})}
			</Main>
			<button className="add-light-button" onClick={changeLightColor}>
				Cambiar color
			</button>
			<button className="add-light-button" onClick={handlePurpleLight}>
				{showPurpleLight ? "Remover luz purpura" : "Añadir luz purpura"}
			</button>
		</>
	);
};

export default Home;
