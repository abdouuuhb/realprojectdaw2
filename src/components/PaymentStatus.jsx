function PaymentStatus({ status }) {
  const statusConfig = {
    paid: { text: "Paid", color: "bg-green-100 text-green-800" },
    "paid-on-site": { text: "Pay on Site", color: "bg-blue-100 text-blue-800" },
    pending: { text: "Pending", color: "bg-yellow-100 text-yellow-800" },
    free: { text: "Free", color: "bg-purple-100 text-purple-800" },
  };

  const config = statusConfig[status] || { text: "Unknown", color: "bg-gray-100 text-gray-800" };

  return (
    <span className={`px-4 py-2 rounded-full font-bold text-sm ${config.color}`}>
      💳 {config.text}
    </span>
  );
}

export default PaymentStatus;