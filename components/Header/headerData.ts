export interface IHeaderItems {
  title: string;
  pageLink: string;
}

export const baseHeaderItems: IHeaderItems[] = [
  { title: "Главная", pageLink: "/" },
  { title: "Личный кабинет", pageLink: "/about" },
  { title: "Справочник", pageLink: "/phone-list" },
];
