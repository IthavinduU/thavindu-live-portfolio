import React from 'react';
import { motion } from 'framer-motion';

const CardView = ({ title, content, icons, degree, school, year, info, link }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='p-4 bg-white/10 border border-white/20 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {degree ? (
                <div>
                    <h3 className='text-xl font-semibold mb-2'>{degree}</h3>
                    <div className='text-sm mb-2'>{school}</div>
                    <div className='text-sm mb-2'>{year}</div>
                    <div className='text-sm'>{info}</div>
                </div>
            ) : (
                <div>
                    <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                    <div className='text-sm mb-2'>{content}</div>
                    <div className='text-sm mb-2'>{info}</div>
                    <div className='flex gap-x-4'>
                        {icons && icons.map((icon, index) => (
                            <div key={index} className='text-2xl text-white'>
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </motion.a>
    );
};

export default CardView;
