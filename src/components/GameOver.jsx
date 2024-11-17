export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>Winner is {winner}</p> : <p>It's a draw</p>}
      <p>
        <button>Restart</button>
      </p>
    </div>
  );
}
