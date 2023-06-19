import _ from "lodash";

let shortestMoveCount = 64;
const gameBoard = [];
let shortestPath = "";
// let move = 0;
// let skip = 0;
// let offBoard = 0;
// let alreadyChecked = 0;

function createBoard() {
  for (let i = 0; i < 8; i += 1) {
    gameBoard.push([]);
    for (let j = 0; j < 8; j += 1) {
      gameBoard[i].push(false);
    }
  }
}

function knightMoves(board, start, end, count, path) {
  // console.log(path, count);
  if (count > shortestMoveCount) {
    // console.log("No need to check");
    // skip += 1;
  } else if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
    // console.log(`${start[0]},${start[1]} is off the board`);
    // offBoard += 1;
  } else if (board[start[0]][start[1]]) {
    // console.log(`${start[0]},${start[1]} is already checked`);
    // alreadyChecked += 1;
  } else {
    // move += 1;
    // console.log("Successful move!");
    const newCount = count + 1;
    let newPath = path;
    if (newPath === "") {
      newPath += `[${start[0]},${start[1]}]`;
    } else {
      newPath += `->[${start[0]},${start[1]}]`;
    }

    if (start[0] === end[0] && start[1] === end[1]) {
      // console.log(`Reached end point with count: ${newCount}`);
      if (shortestMoveCount > newCount) {
        shortestMoveCount = newCount;
        shortestPath = newPath;
        // console.log(
        //   `Shortest move updated! : ${shortestMoveCount} moves / ${shortestPath}, `
        // );
      }
    } else {
      // create clone board, check, move 8
      const newBoard = _.cloneDeep(board);
      newBoard[start[0]][start[1]] = true;
      knightMoves(
        newBoard,
        [start[0] + 2, start[1] + 1],
        end,
        newCount,
        newPath
      );
      knightMoves(
        newBoard,
        [start[0] + 2, start[1] - 1],
        end,
        newCount,
        newPath
      );
      knightMoves(
        newBoard,
        [start[0] + 1, start[1] + 2],
        end,
        newCount,
        newPath
      );
      knightMoves(
        newBoard,
        [start[0] + 1, start[1] - 2],
        end,
        newCount,
        newPath
      );
      knightMoves(
        newBoard,
        [start[0] - 1, start[1] + 2],
        end,
        newCount,
        newPath
      );
      knightMoves(
        newBoard,
        [start[0] - 1, start[1] - 2],
        end,
        newCount,
        newPath
      );
      knightMoves(
        newBoard,
        [start[0] - 2, start[1] + 1],
        end,
        newCount,
        newPath
      );
      knightMoves(
        newBoard,
        [start[0] - 2, start[1] - 1],
        end,
        newCount,
        newPath
      );
    }
  }
}

createBoard();
knightMoves(gameBoard, [3, 3], [7, 1], -1, "");
console.log(
  `You made it in ${shortestMoveCount} moves!\nHere's your path:\n${shortestPath}`
);
// console.log(
//   `move: ${move}, skip: ${skip}, offBoard: ${offBoard}, alreadyChecked: ${alreadyChecked}`
// );
