function DashboardStats({ products }) {
  const total = products.length;
  const fresh = products.filter(p => p.status === "Fresh").length;
  const nearExpiry = products.filter(p => p.status === "Near Expiry").length;
  const expired = products.filter(p => p.status === "Expired").length;

  const boxStyle = {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "180px",
    textAlign: "center",
    fontWeight: "bold"
  };

  return (
    <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <div style={boxStyle}> Total<br />{total}</div>
      <div style={{ ...boxStyle, color: "green" }}> Fresh<br />{fresh}</div>
      <div style={{ ...boxStyle, color: "orange" }}> Near Expiry<br />{nearExpiry}</div>
      <div style={{ ...boxStyle, color: "red" }}>Expired<br />{expired}</div>
    </div>
  );
}

export default DashboardStats;