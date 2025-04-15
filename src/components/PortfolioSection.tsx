
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PortfolioSectionProps {
  id: string;
  bgClass: string;
  leftContent: ReactNode;
  rightContent: ReactNode;
}

const PortfolioSection = ({ id, bgClass, leftContent, rightContent }: PortfolioSectionProps) => {
  return (
    <section id={id} className={`portfolio-section ${bgClass}`}>
      <div className="portfolio-container py-10 md:py-20">
        <div className="portfolio-grid">
          <motion.div
            className="portfolio-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            {leftContent}
          </motion.div>
          
          <motion.div
            className="portfolio-right"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
          >
            {rightContent}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
