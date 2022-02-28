import { Transition } from "@headlessui/react";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Notification, useNotifications, useTransactions } from "@usedapp/core";
import { Fragment, ReactElement } from "react";

const notificationContent: {
  [key in Notification["type"]]: { title: string; icon: ReactElement };
} = {
  transactionFailed: {
    title: "Transaction failed",
    icon: <XIcon className="h-6 w-6" />,
  },
  transactionStarted: {
    title: "Transaction started",
    icon: <ClockIcon className="h-6 w-6" />,
  },
  transactionSucceed: {
    title: "Transaction succeed",
    icon: <CheckCircleIcon className="h-6 w-6" />,
  },
  walletConnected: {
    title: "Wallet connected",
    icon: <BriefcaseIcon className="h-6 w-6" />,
  },
};

export const NotificationWrapper: React.FC = ({ children }) => (
  <Transition
    show={true}
    as={Fragment}
    enter="transform ease-out duration-300 transition"
    enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enterTo="translate-y-0 opacity-100 sm:translate-x-0"
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    {children}
  </Transition>
);

const Notification: React.FC<{ notification: Notification }> = ({
  notification,
}) => (
  <NotificationWrapper>
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <span className="h-6 w-6">
              {notificationContent[notification.type].icon}
            </span>
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">
              {notificationContent[notification.type].title}
            </p>
          </div>
        </div>
      </div>
    </div>
  </NotificationWrapper>
);

export const Notifications = () => {
  // const [show, setShow] = useState(true);
  const { notifications } = useNotifications();
  const { transactions } = useTransactions();
  console.log({ notifications, transactions });

  return (
    <>
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start h-full justify-end"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end h-full justify-end">
          {notifications.map((notification) => {
            if ("transaction" in notification)
              return (
                <Notification
                  key={notification.id}
                  notification={notification}
                />
              );
            else
              return (
                <Notification
                  key={notification.id}
                  notification={notification}
                />
              );
          })}
        </div>
      </div>
    </>
  );
};
