import React from 'react';
import { motion } from 'framer-motion';

/**
 * ==============   Styles   ================
 */

const box = {
    margin: 100,
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

const ball = {
    margin: 100,
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}

function App(){
    return(
        // 旋轉
        // <motion.div
        //     style={box}
        //     animate={{ rotate: 360 }}
        //     transition={{ duration: 1 }}
        // />

        // 震動
        // <motion.div
        //     initial={{ opacity: 0, scale: 0 }}
        //     animate={{ opacity: 1, scale: 1 }}
        //     transition={{
        //         duration: 0.4,
        //         scale: { type: "spring", visualDuration: .3, bounce: 1 },
        //     }}
        //     style={ball}
        // />

        // 縮放
        <motion.div
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.8 }}
            style={box}
        />
    )
}export default App

