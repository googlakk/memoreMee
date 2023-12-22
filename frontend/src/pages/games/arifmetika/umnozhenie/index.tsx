import { MultiConfig, OPERATIONS } from "@shared/core/games/multiplication";

import { FC } from "react";
import MultiplicationStep from "@widgets/multiply-game/ui";
import { withMainLayout } from "@app/hocs/withMainLayout";

const USED_NUMBER1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const USED_NUMBER2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultMultiConfig: MultiConfig = {
  operation: OPERATIONS.DIVIDE,
  numberDepth1: 2,
  numberDepth2: 2,
  usedNumbers1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  usedNumbers2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};
// 1) Выбор кол-во игроков
// 2) Отоброжение игр

const MultiplicationGame: FC = () => {
  return <></>;
};
export default withMainLayout(MultiplicationGame);
