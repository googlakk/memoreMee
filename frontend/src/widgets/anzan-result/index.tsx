import { Card } from "react-daisyui";
import { FC } from "react";

const AnzanResult: FC<{ rightAnswer: number[]; userAnwer: number[] }> = ({
  userAnwer,
  rightAnswer,
}) => {
  return (
    <>
      <div className={` items-center text-center`}>
        <div>
          <div className="flex justify-center h-screen">
            <Card className="w-3/4 h-3/4 flex items-center mt-10 justify-center  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-indigo-200  bg-opacity-10  text-primary-content  ">
              <Card.Body>
                {userAnwer.map((answer, index) => (
                  <>
                    {answer == rightAnswer[index]
                      ? "Ответ верный"
                      : "Game over!"}
                    <div key={index} className="flex gap-x-10">
                      <div className=" w-3/4 glass shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-indigo-100 rounded-xl p-5  bg-opacity-10">
                        <h1 className=" font-bold text-3xl text-white">
                          Правильный ответ
                        </h1>
                        <h1>{rightAnswer[index]}</h1>
                      </div>
                      <div
                        className={
                          "glass w-3/4 bg-opacity-80 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] rounded-xl p-5" &&
                          `${answer}` == `${rightAnswer[index]}`
                            ? ` bg-green-500`
                            : `bg-red-700`
                        }
                      >
                        <h1 className="font-bold text-3xl text-white">
                          Ваш ответ
                        </h1>
                        <h2>{answer}</h2>
                      </div>
                    </div>
                  </>
                ))}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnzanResult;
