(() => {
  let playing = true,
    activeHole = 1,
    dead = 0,
    lost = 0;

  const stop = () => playing = false,
    getHole = index => document.getElementById(`hole${index}`),
    updateScore = () => {
      document.getElementById('dead').textContent = dead;
      document.getElementById('lost').textContent = lost;
    },
    resetGame = () => {
      dead = 0;
      lost = 0;
      updateScore();
    },
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    checkGameStatus = () => {
      if (dead >= 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
      } else if (lost >= 5) {
        alert('Игра окончена! Слишком много промахов!');
        resetGame();
      }
    },
    handleClick = ( index ) => {
      if (getHole( index ).classList.contains('hole_has-mole')) {
        dead++;
      } else {
        lost++;
      }
      updateScore();
      checkGameStatus();
    },
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  // Назначаем обработчики кликов на все лунки
  for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', () => handleClick(i));
  }

  next();
})();
