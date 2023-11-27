import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';


const ParticlesIndex = () => {


    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    });

    return <>

        <Particles init={particlesInit} id='particles' options={{
            
            background: {
                color: {
                    value: "#fff"
                }
            },

            particles: {
                color: {
                    value: "#000"
                },

                links: {
                    color: "#000",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },

                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 100,
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: "circle",
                },                
            }
        }} />
    </>
}

export default ParticlesIndex;