import React from 'react';

import styles from './KinoboxPlayer.module.css';

const KinoboxPlayer = ({ kinopoiskId, imdbId }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kinobox.tv/kinobox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (containerRef.current) {
        (window).kbox(containerRef.current, {
          search: {
            kinopoisk: kinopoiskId,
            imdb: imdbId
          },
          players: {
            Videocdn: {
              enabled: true,
              position: 1
            },
            alloha: {
              enabled: true,
              position: 2
            }
          },
          menu: {
            default: 'menu_list',
            mobile: 'menu_button',
            enabled: false,
          },
          notFoundMessage: 'Видео не найдено.'
        });
      }
    };

    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) { }
    };
  }, [kinopoiskId]);

  return <div ref={containerRef} className={styles.kinobox_player}></div>;

};

export default KinoboxPlayer;