import {
  GetStudentsQuery,
  GetTeachersQuery,
} from "@entities/user/api/queries.gen";

type RemoveNullUndefined<T> = T extends null | undefined ? never : T;

type ExtractArrayType<T> = T extends ReadonlyArray<infer U> ? U : never;

export type Teacher = ExtractArrayType<
  RemoveNullUndefined<
    RemoveNullUndefined<GetTeachersQuery["usersPermissionsUsers"]>["data"]
  >
>;
export type Student = ExtractArrayType<
  RemoveNullUndefined<
    RemoveNullUndefined<GetStudentsQuery["usersPermissionsUsers"]>["data"]
  >
>;
export function formatDate(dateString: string) {
  // Создаем объект даты из переданной строки
  const date = new Date(dateString);

  // Форматируем дату в нужный вид: YYYY.MM.DD HH:MM
  const formattedDate = date
    .toLocaleString("ru", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/\//g, ".")
    .replace(",", " ");

  return formattedDate;
}

export function toggleBackgroundImage(playersCount: number) {
  const backgroundImage =
    playersCount > 1 ? "bg-manyCounterBg" : "bg-oneCounterBg";

  return backgroundImage;
}

export function reSizes(playersCount: number) {
  const backgroundSizes: { [key: number]: string } = {
    1: "100% 100%",
    2: "100% 100%",
    3: "100% 100%",
    4: "80% 100%",
    5: "100% 100%",
    6: "100% 100%",
    7: "100% 100%",
    8: "100% 100%",
    9: "100% 100%",
    10: "100% 100%",
  };

  const backgroundSize = backgroundSizes[playersCount] || "100% 100%";

  return backgroundSize;
}
