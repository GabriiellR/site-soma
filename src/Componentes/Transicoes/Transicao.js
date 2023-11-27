import { motion } from 'framer-motion';
import './Transicao.css'

import '../../index.css'

const Transicao = (Component) => {

    return () => (
        <>
            <Component />

            <motion.div className='slide-in'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.5}} >
                
            </motion.div>

            <motion.div className='slide-out'
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5 }} >
            </motion.div>
        </>
    )
};

export default Transicao;