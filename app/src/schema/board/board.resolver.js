import Board from "./board.model";

export default {
  Query: {
    boards: Board.getBoards
  },
  Board: {
    createdDate: board => board.createdDate.toISOString()
  }
};
