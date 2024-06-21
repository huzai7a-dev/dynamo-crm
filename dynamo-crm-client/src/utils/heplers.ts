import { notification } from "antd";
import { IconType } from "antd/es/notification/interface";
const showNotification = (type: IconType, message: string) => {
  notification.open({
    message: message,
    placement: "top",
    type: type,
  });
};

const getNameLetters = (fullName: string) => {
  const [firstName, lastName] = fullName.split(" ");
  if (firstName && lastName) return `${firstName[0]}${lastName[0]}`;
  return firstName[0];
};

export { showNotification, getNameLetters };
