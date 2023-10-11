import { Tooltip as ReactTooltip } from 'react-tooltip';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
      console.log(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const getDuration = (startDate, endDate) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : currentDate;
  
    const duration = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const durationText = duration > 1 ? `${duration} months` : `${duration} month`;
  
    return durationText;
  };

  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='app__skills-exp'>
          {experiences.map((experience) => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                <div className='app__skills-exp-works-title'>
                  <p className='bold-text-company'>{experience.company}</p>
                  <p className='app__skils-duration'>{getDuration(experience.start, experience.end)}</p>
                </div>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <div className='app__skills-exp-show'>
                        <div className='app__skils-stepper-show'>
                          <img
                            src={images.history}
                            alt='profile_bg'
                            width={20}
                            height={20}
                          />
                          <div className='vertical-divider'></div>
                        </div>
                        <div className='app_skills-exp-details'>
                          <h4 className='bold-text'>{work.name}</h4>
                          <p className='p-text'>{work.company}</p>
                          <p className='p-text'>{work.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
