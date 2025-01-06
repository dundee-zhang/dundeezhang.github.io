import pfp from "/src/img/specimenB.jpeg";
import { motion } from "framer-motion";

export default function ProfilePicture() {
    return (
        <div id="intro">
            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                    delay: 1.6,
                    ease: [0, 0, 0, 1.2],
                }}
            >
                <div
                    id="pic-outer"
                >
                    <div id="pic-inner">
                        <img src={pfp} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
