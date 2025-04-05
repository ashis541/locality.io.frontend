import React from 'react';
import { Bell, FolderDot, Users, PlusCircle } from 'lucide-react';

const StatusCard = ({ icon: Icon, title, subtitle, bgColor, iconColor }) => (
  <div className={`p-4 rounded-xl ${bgColor} w-full`}>
    <div className="flex items-center space-x-3">
      <div className={`p-3 rounded-full ${iconColor}`}>
        <Icon size={28} className="text-white" />
      </div>
      <div>
        <h3 className="font-medium text-base sm:text-lg">{title}</h3>
        <p className="text-sm sm:text-base opacity-75">{subtitle}</p>
      </div>
    </div>
  </div>
);

const StatusCards = () => {
  const cards = [
    {
      icon: Bell,
      title: "NOTIFICATION",
      subtitle: "6 Unread Notifications",
      bgColor: "bg-yellow-50",
      iconColor: "bg-yellow-400"
    },
    {
      icon: FolderDot,
      title: "Branch Details",
      subtitle: "4 Project Last Update",
      bgColor: "bg-green-50",
      iconColor: "bg-green-500"
    },
    {
      icon: Users,
      title: "CLIENT",
      subtitle: "5 Client Waiting",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-500"
    },
    {
      icon: PlusCircle,
      title: "CREATE NEW",
      subtitle: "PROJECT",
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-500"
    }
  ];

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full bg-white rounded-lg shadow">
  {cards.map((card, index) => (
    <StatusCard
      key={index}
      icon={card.icon}
      title={card.title}
      subtitle={card.subtitle}
      bgColor={card.bgColor}
      iconColor={card.iconColor}
    />
  ))}
</div>
  );
};

export default StatusCards;
