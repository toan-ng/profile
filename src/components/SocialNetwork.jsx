import React from 'react';
import discorImg from '../assets/img/discord-mark-blue.png';

const SocialNetwork = () => {
  return (
    <>
      <ul className="nav d-flex gap-3 flex-nowrap justify-content-between">
        <li>
          <a alt='github' href='https://github.com/mindullness' target='blank'>
            <img alt='github' src="https://www.svgrepo.com/show/445786/github.svg" />
          </a>
        </li>
        <li>
          <a alt='linkedin' href='https://www.linkedin.com/in/toan-nguyen/' target='_blank' rel="noreferrer" >
            <img alt='linkedin' src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" />
          </a>
        </li>
        <li>
          <a alt='gmail' href='mailto:toannguyenannn@gmail.com' target='_top'  >
            <img alt='gmail' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" />
          </a>
        </li>
        <li>
          <a alt='discord' href='https://discordapp.com/users/870661213472817162' target='_blank' rel="noreferrer" >
            <img alt='discord' src={discorImg} />
          </a>
        </li>
        <li>
          <a alt='telegram' href='https://t.me/toanneanderthal' target='_blank' rel="noreferrer" >
            <img alt='telegram' src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" />
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialNetwork;