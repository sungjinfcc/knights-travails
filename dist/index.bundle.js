(self["webpackChunkknights_travails"] = self["webpackChunkknights_travails"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

let shortestMoveCount = 64;
const gameBoard = [];
let shortestPath = "";
let move = 0;
let skip = 0;
let offBoard = 0;
let alreadyChecked = 0;

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
    skip += 1;
  } else if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
    // console.log(`${start[0]},${start[1]} is off the board`);
    offBoard += 1;
  } else if (board[start[0]][start[1]]) {
    // console.log(`${start[0]},${start[1]} is already checked`);
    alreadyChecked += 1;
  } else {
    move += 1;
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
      // check board, go next
      const newBoard = JSON.parse(JSON.stringify(board));
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osc0JBQXNCLFNBQVMsR0FBRyxVQUFVO0FBQzVDO0FBQ0EsSUFBSTtBQUNKLHNCQUFzQixTQUFTLEdBQUcsVUFBVTtBQUM1QztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsR0FBRyxTQUFTO0FBQzFDLE1BQU07QUFDTix1QkFBdUIsU0FBUyxHQUFHLFNBQVM7QUFDNUM7O0FBRUE7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQkFBbUIsVUFBVSxhQUFhO0FBQ25GO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CLDZCQUE2QixhQUFhO0FBQ2pGO0FBQ0E7QUFDQSxjQUFjLEtBQUssVUFBVSxLQUFLLGNBQWMsU0FBUyxvQkFBb0IsZUFBZTtBQUM1RiIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNob3J0ZXN0TW92ZUNvdW50ID0gNjQ7XG5jb25zdCBnYW1lQm9hcmQgPSBbXTtcbmxldCBzaG9ydGVzdFBhdGggPSBcIlwiO1xubGV0IG1vdmUgPSAwO1xubGV0IHNraXAgPSAwO1xubGV0IG9mZkJvYXJkID0gMDtcbmxldCBhbHJlYWR5Q2hlY2tlZCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkgKz0gMSkge1xuICAgIGdhbWVCb2FyZC5wdXNoKFtdKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGogKz0gMSkge1xuICAgICAgZ2FtZUJvYXJkW2ldLnB1c2goZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBrbmlnaHRNb3Zlcyhib2FyZCwgc3RhcnQsIGVuZCwgY291bnQsIHBhdGgpIHtcbiAgLy8gY29uc29sZS5sb2cocGF0aCwgY291bnQpO1xuICBpZiAoY291bnQgPiBzaG9ydGVzdE1vdmVDb3VudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiTm8gbmVlZCB0byBjaGVja1wiKTtcbiAgICBza2lwICs9IDE7XG4gIH0gZWxzZSBpZiAoc3RhcnRbMF0gPCAwIHx8IHN0YXJ0WzBdID4gNyB8fCBzdGFydFsxXSA8IDAgfHwgc3RhcnRbMV0gPiA3KSB7XG4gICAgLy8gY29uc29sZS5sb2coYCR7c3RhcnRbMF19LCR7c3RhcnRbMV19IGlzIG9mZiB0aGUgYm9hcmRgKTtcbiAgICBvZmZCb2FyZCArPSAxO1xuICB9IGVsc2UgaWYgKGJvYXJkW3N0YXJ0WzBdXVtzdGFydFsxXV0pIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgJHtzdGFydFswXX0sJHtzdGFydFsxXX0gaXMgYWxyZWFkeSBjaGVja2VkYCk7XG4gICAgYWxyZWFkeUNoZWNrZWQgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICBtb3ZlICs9IDE7XG4gICAgLy8gY29uc29sZS5sb2coXCJTdWNjZXNzZnVsIG1vdmUhXCIpO1xuICAgIGNvbnN0IG5ld0NvdW50ID0gY291bnQgKyAxO1xuICAgIGxldCBuZXdQYXRoID0gcGF0aDtcbiAgICBpZiAobmV3UGF0aCA9PT0gXCJcIikge1xuICAgICAgbmV3UGF0aCArPSBgWyR7c3RhcnRbMF19LCR7c3RhcnRbMV19XWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1BhdGggKz0gYC0+WyR7c3RhcnRbMF19LCR7c3RhcnRbMV19XWA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0WzBdID09PSBlbmRbMF0gJiYgc3RhcnRbMV0gPT09IGVuZFsxXSkge1xuICAgICAgLy8gY29uc29sZS5sb2coYFJlYWNoZWQgZW5kIHBvaW50IHdpdGggY291bnQ6ICR7bmV3Q291bnR9YCk7XG4gICAgICBpZiAoc2hvcnRlc3RNb3ZlQ291bnQgPiBuZXdDb3VudCkge1xuICAgICAgICBzaG9ydGVzdE1vdmVDb3VudCA9IG5ld0NvdW50O1xuICAgICAgICBzaG9ydGVzdFBhdGggPSBuZXdQYXRoO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgICAgLy8gICBgU2hvcnRlc3QgbW92ZSB1cGRhdGVkISA6ICR7c2hvcnRlc3RNb3ZlQ291bnR9IG1vdmVzIC8gJHtzaG9ydGVzdFBhdGh9LCBgXG4gICAgICAgIC8vICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIGJvYXJkLCBnbyBuZXh0XG4gICAgICBjb25zdCBuZXdCb2FyZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcbiAgICAgIG5ld0JvYXJkW3N0YXJ0WzBdXVtzdGFydFsxXV0gPSB0cnVlO1xuICAgICAga25pZ2h0TW92ZXMoXG4gICAgICAgIG5ld0JvYXJkLFxuICAgICAgICBbc3RhcnRbMF0gKyAyLCBzdGFydFsxXSArIDFdLFxuICAgICAgICBlbmQsXG4gICAgICAgIG5ld0NvdW50LFxuICAgICAgICBuZXdQYXRoXG4gICAgICApO1xuICAgICAga25pZ2h0TW92ZXMoXG4gICAgICAgIG5ld0JvYXJkLFxuICAgICAgICBbc3RhcnRbMF0gKyAyLCBzdGFydFsxXSAtIDFdLFxuICAgICAgICBlbmQsXG4gICAgICAgIG5ld0NvdW50LFxuICAgICAgICBuZXdQYXRoXG4gICAgICApO1xuICAgICAga25pZ2h0TW92ZXMoXG4gICAgICAgIG5ld0JvYXJkLFxuICAgICAgICBbc3RhcnRbMF0gKyAxLCBzdGFydFsxXSArIDJdLFxuICAgICAgICBlbmQsXG4gICAgICAgIG5ld0NvdW50LFxuICAgICAgICBuZXdQYXRoXG4gICAgICApO1xuICAgICAga25pZ2h0TW92ZXMoXG4gICAgICAgIG5ld0JvYXJkLFxuICAgICAgICBbc3RhcnRbMF0gKyAxLCBzdGFydFsxXSAtIDJdLFxuICAgICAgICBlbmQsXG4gICAgICAgIG5ld0NvdW50LFxuICAgICAgICBuZXdQYXRoXG4gICAgICApO1xuICAgICAga25pZ2h0TW92ZXMoXG4gICAgICAgIG5ld0JvYXJkLFxuICAgICAgICBbc3RhcnRbMF0gLSAxLCBzdGFydFsxXSArIDJdLFxuICAgICAgICBlbmQsXG4gICAgICAgIG5ld0NvdW50LFxuICAgICAgICBuZXdQYXRoXG4gICAgICApO1xuICAgICAga25pZ2h0TW92ZXMoXG4gICAgICAgIG5ld0JvYXJkLFxuICAgICAgICBbc3RhcnRbMF0gLSAxLCBzdGFydFsxXSAtIDJdLFxuICAgICAgICBlbmQsXG4gICAgICAgIG5ld0NvdW50LFxuICAgICAgICBuZXdQYXRoXG4gICAgICApO1xuICAgICAga25pZ2h0TW92ZXMoXG4gICAgICAgIG5ld0JvYXJkLFxuICAgICAgICBbc3RhcnRbMF0gLSAyLCBzdGFydFsxXSArIDFdLFxuICAgICAgICBlbmQsXG4gICAgICAgIG5ld0NvdW50LFxuICAgICAgICBuZXdQYXRoXG4gICAgICApO1xuICAgICAga25pZ2h0TW92ZXMoXG4gICAgICAgIG5ld0JvYXJkLFxuICAgICAgICBbc3RhcnRbMF0gLSAyLCBzdGFydFsxXSAtIDFdLFxuICAgICAgICBlbmQsXG4gICAgICAgIG5ld0NvdW50LFxuICAgICAgICBuZXdQYXRoXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jcmVhdGVCb2FyZCgpO1xua25pZ2h0TW92ZXMoZ2FtZUJvYXJkLCBbMywgM10sIFs3LCAxXSwgLTEsIFwiXCIpO1xuY29uc29sZS5sb2coXG4gIGBZb3UgbWFkZSBpdCBpbiAke3Nob3J0ZXN0TW92ZUNvdW50fSBtb3ZlcyFcXG5IZXJlJ3MgeW91ciBwYXRoOlxcbiR7c2hvcnRlc3RQYXRofWBcbik7XG4vLyBjb25zb2xlLmxvZyhcbi8vICAgYG1vdmU6ICR7bW92ZX0sIHNraXA6ICR7c2tpcH0sIG9mZkJvYXJkOiAke29mZkJvYXJkfSwgYWxyZWFkeUNoZWNrZWQ6ICR7YWxyZWFkeUNoZWNrZWR9YFxuLy8gKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==