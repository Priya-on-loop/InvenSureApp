function StatusBadge({ status }) {
  const colors = {
    Fresh: "green",
    "Near Expiry": "orange",
    Expired: "red",
  };

  return (
    <span style={{ color: colors[status], fontWeight: "bold" }}>
      {status}
    </span>
  );
}

export default StatusBadge;