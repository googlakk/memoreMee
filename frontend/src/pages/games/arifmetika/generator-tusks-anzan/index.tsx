// import { AnzanConfig, OPERATIONS } from "@shared/core/games/anzan";
// import React, { useState } from "react";

// import GeneratorNavbar from "@widgets/generatorAnzanTusk/generatorNavbar";

// const defaultAnzanConfig: AnzanConfig = {
//   numberDepth: 2,
//   numbersCount: 5,
//   operations: [OPERATIONS.MINUS, OPERATIONS.PLUS],
//   speed: 1,
//   usedNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
// };
// interface propsSetting {
//   onSettingsSave: (settings: {
//     config: AnzanConfig;
//     playersCount: number;
//   }) => void;
//   defautSeetings: {
//     config: AnzanConfig;
//     playersCount: number;
//   };
// }
// const GeneratorTusks: React.FC = () => {
//   const [config, setConfig] = useState<AnzanConfig>(defaultAnzanConfig);
//   const [playersCount, setPlayersCount] = useState(5);
//   const toolbarProps: propsSetting = {
//     onSave: (settings) => {
//       setConfig(settings.config);
//       setPlayersCount(settings.playersCount);
//     },
//     defautSeetings: {
//       config: config,
//       playersCount: playersCount,
//     },
//   };

//   return <></>;
// };

// export default GeneratorTusks;
