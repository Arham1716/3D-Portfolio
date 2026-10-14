import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const shimmerVariants = {
  initial: { x: "-130%", opacity: 0 },
  hover: {
    x: "180%",
    opacity: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
};

const CertLogo = ({ icon, name, badgeColor }) => (
  <div className='relative flex items-center justify-center flex-shrink-0 self-center' style={{ width: 110, height: 110 }}>
    {/* Outer pulsing ring */}
    <motion.div
      className='absolute inset-0 rounded-full'
      style={{ border: `1.5px solid ${badgeColor}`, boxShadow: `0 0 14px ${badgeColor}55` }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Subtle inner ring */}
    <motion.div
      className='absolute rounded-full'
      style={{ inset: 8, border: `1px solid ${badgeColor}40` }}
      animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
    />
    {/* Logo circle */}
    <div
      className='flex items-center justify-center rounded-full'
      style={{
        width: 76,
        height: 76,
        background: `radial-gradient(circle at 40% 35%, ${badgeColor}28, ${badgeColor}08 70%)`,
      }}
    >
      <img src={icon} alt={name} className='object-contain' style={{ width: 48, height: 48 }} />
    </div>
  </div>
);

const CertCard = ({ index, name, issuer, date, icon, badgeColor, credential_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.45, 0.75)} className='w-full md:w-[calc(50%-12px)]'>
      <motion.div whileHover='hover' initial='initial' className='h-full'>
        <Tilt options={{ max: 12, scale: 1.015, speed: 500 }} className='h-full'>
          <div
            className='green-pink-gradient p-[1px] rounded-[20px] h-full'
            style={{ boxShadow: `0 0 28px 2px ${badgeColor}22` }}
          >
            <div className='bg-tertiary rounded-[20px] p-5 flex flex-row gap-5 relative overflow-hidden h-full min-h-[150px]'>

              {/* Shimmer sweep on hover */}
              <motion.div
                variants={shimmerVariants}
                className='absolute inset-y-0 w-[45%] pointer-events-none z-10'
                style={{
                  background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.06) 50%, transparent 80%)",
                  transform: "skewX(-15deg)",
                }}
              />

              {/* Left accent bar */}
              <div
                className='w-[3px] rounded-full flex-shrink-0 self-stretch'
                style={{ background: `linear-gradient(to bottom, ${badgeColor}, ${badgeColor}33)` }}
              />

              {/* Pulsing logo */}
              <CertLogo icon={icon} name={name} badgeColor={badgeColor} />

              {/* Info */}
              <div className='flex flex-col justify-between flex-1 py-1 min-w-0'>
                <div className='flex justify-end'>
                  <span
                    className='text-[10px] font-bold px-2 py-[3px] rounded-full tracking-wide'
                    style={{
                      background: `${badgeColor}22`,
                      color: badgeColor,
                      border: `1px solid ${badgeColor}55`,
                    }}
                  >
                    ✓&nbsp;CERTIFIED
                  </span>
                </div>

                <div className='mt-1'>
                  <h3 className='text-white font-bold text-[17px] leading-snug'>{name}</h3>
                  <p className='text-secondary text-[13px] mt-1'>{issuer}</p>
                </div>

                <div className='flex items-center justify-between mt-3 flex-wrap gap-2'>
                  <span
                    className='text-[11px] px-3 py-[3px] rounded-full font-medium'
                    style={{
                      background: "rgba(0,0,0,0.35)",
                      color: badgeColor,
                      border: `1px solid ${badgeColor}33`,
                    }}
                  >
                    {date}
                  </span>

                  {credential_link && credential_link !== "#" ? (
                    <a
                      href={credential_link}
                      target='_blank'
                      rel='noreferrer'
                      className='text-[12px] font-semibold px-3 py-[4px] rounded-full transition-opacity hover:opacity-75'
                      style={{
                        background: `${badgeColor}22`,
                        color: badgeColor,
                        border: `1px solid ${badgeColor}55`,
                      }}
                    >
                      View Certificate →
                    </a>
                  ) : (
                    <span
                      className='text-[12px] font-semibold px-3 py-[4px] rounded-full cursor-not-allowed select-none'
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.2)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      View Certificate →
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </Tilt>
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I've earned</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Industry certifications that validate my expertise in cloud platforms,
        DevOps tooling, and infrastructure engineering — backed by hands-on
        production experience.
      </motion.p>

      <div className='mt-16 flex flex-wrap gap-6'>
        {certifications.map((cert, index) => (
          <CertCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
