import Board from "../models/board.model";

export default {
  Query: {
    boards: Board.getBoards
  }
};
