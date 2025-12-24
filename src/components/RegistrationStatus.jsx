function RegistrationStatus({ status }) {
  const statusConfig = {
    confirmed: { text: "Confirmed", color: "bg-green-100 text-green-800" },
    pending: { text: "Pending", color: "bg-yellow-100 text-yellow-800" },
    rejected: { text: "Rejected", color: "bg-red-100 text-red-800" },
  };

  const config = statusConfig[status] || { text: "Unknown", color: "bg-gray-100 text-gray-800" };

  return (
    <span className={`px-4 py-2 rounded-full font-bold text-sm ${config.color}`}>
      {config.text}
    </span>
  );
}

export default RegistrationStatus;