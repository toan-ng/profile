/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { memo, useEffect, useState } from 'react';
import s3prjImg from '../../assets/img/s3prj.png';

const ProjectImage = memo(({ id, imgUrl }) => {
  const imgId = "prj-img-id-" + id;
  const [isFullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = (e) => {
    setFullscreen(!isFullscreen);
    e.preventDefault();
  }

  useEffect(() => {
    const image = document.getElementById(imgId);

    if (isFullscreen) {
      image.style.width = 'auto';
      image.style.height = '100vh';
      image.style.position = 'fixed';
      image.style.zIndex = '20';
      image.style.top = '0';
      image.style.left = (document.body.clientWidth - image.clientWidth) / 2 + 'px';
      image.style.transform = 'scale(1)';
      image.style.opacity = '1';
      image.style.boxShadow = '0px 10px 10px grey !important';
    } else {
      image.removeAttribute("style");
    }
  }, [imgId, isFullscreen]);

  return (
    <div onClick={toggleFullscreen}>
      <img id={imgId} src={id === 1 ? s3prjImg : imgUrl} className="project-image" alt={"Image"}  />
    </div>
  );
});

export default ProjectImage;