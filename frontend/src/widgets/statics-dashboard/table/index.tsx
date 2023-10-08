import { FC, useEffect, useState } from "react";

import { GameHistroryEntity } from "@shared/api/models.gen";
import moment from "moment";
import { useAuthContext } from "@app/hooks";
import { useGetGameHistoryLazyQuery } from "@app/api/queries.gen";

const TableData: FC = () => {
  const [getGameHistory, { data }] = useGetGameHistoryLazyQuery();
  const [open, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const [selectedGame, setSelectedGame] = useState<GameHistroryEntity>();

  useEffect(() => {
    if (user) {
      getGameHistory({ variables: { userID: user.id } });
    }
  }, [user]);

  const handleDetailsClick = (id: number) => {
    const selected = data?.gameHistrories?.data.find(
      (data) => Number(data.id) === id
    );

    if (selected) {
      setSelectedGame(selected);
    }
    setIsOpen(true);
  };

  return (
    <>
      <div className="overflow-x-auto bg-base-100 mt-2 rounded-2xl mb-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>№</th>
              <th>Имя </th>
              <th>Операция</th>
              <th>Тренажер</th>
              <th></th>
            </tr>
          </thead>
          {data?.gameHistrories?.data.map((data) => (
            <tbody>
              {/* row 1 */}
              <tr className={`${data.attributes?.isWin ? "bg-accent" : ""}`}>
                <th>
                  <label>{data.id}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://media.radaronline.com/brand-img/dvOfEmbPz/0x0/2019/04/celebrities-with-the-highest-SAT-scores-Will-Smith-featured-photo.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.username}</div>
                      <div className="text-sm opacity-50">{user?.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {moment(data.attributes?.publishedAt).format(
                    "DD-MM-yy  HH:mm"
                  )}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Операция
                    <span className="text-primary pl-2">
                      {JSON.stringify(
                        data.attributes?.result?.gameSettings?.operations
                      )}
                    </span>
                  </span>
                </td>
                <td>{data.attributes?.game?.data?.attributes?.name}</td>
                <th>
                  <button
                    onClick={() => handleDetailsClick(Number(data.id))}
                    className="btn btn-ghost btn-xs"
                  >
                    Подробнее
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Operations</th>
              <th>Gym</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
        <input
          type="checkbox"
          id="settignsModal"
          className="modal-toggle"
          checked={open}
        />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <>
              {selectedGame && (
                <div>
                  <div className="overflow-x-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                      <thead>
                        <tr>
                          <th></th>
                          <td>Числа</td>
                          <td>Операция</td>
                          <td>Используесы числа</td>
                          <td>Разрядность чисел</td>
                          <td>Скорость</td>
                          <td>Количество действий</td>
                          <td>Правильный ответ</td>
                          <td>Ваш ответ</td>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <th>
                            <label></label>
                          </th>
                          <td>
                            <div className="font-bold text-center ">
                              {selectedGame.attributes?.result.numbers.map(
                                (num: number) => (
                                  <h5>{num}</h5>
                                )
                              )}
                            </div>
                          </td>
                          <td>
                            <div className="font-bold">
                              {
                                selectedGame.attributes?.result.gameSettings
                                  .operations
                              }
                            </div>
                          </td>
                          <td>
                            <div className="font-bold">
                              {
                                selectedGame.attributes?.result.gameSettings
                                  .usedNumber
                              }
                            </div>
                          </td>
                          <td>
                            <div className="font-bold">
                              {
                                selectedGame.attributes?.result.gameSettings
                                  .numberDepth
                              }
                            </div>
                          </td>
                          <td>
                            <div className="font-bold">
                              {
                                selectedGame.attributes?.result.gameSettings
                                  .speed
                              }
                            </div>
                          </td>
                          <td>
                            <div className="font-bold">
                              {
                                selectedGame.attributes?.result.gameSettings
                                  .numbersCount
                              }
                            </div>
                          </td>
                          <td>
                            <div className="font-bold">
                              {selectedGame.attributes?.result.rightAnswer}
                            </div>
                          </td>
                          <td>
                            <div className="font-bold">
                              {selectedGame.attributes?.result.userAnwer}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          </div>
          <label
            className="modal-backdrop"
            htmlFor="settignsModal"
            onClick={() => setIsOpen(false)}
          >
            Close
          </label>
        </div>
      </div>
    </>
  );
};
export default TableData;
