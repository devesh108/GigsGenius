export default function Pricing() {
  return (
    <div
      style={{
        // background: "linear-gradient(180deg, #FFF9E6 0%, #FFFFFF 100%)",
        backgroundColor: "#F8F9FA",
        minHeight: "100vh",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold text-primary">
          Freelancer Payout Model
        </h2>

        <div className="row justify-content-center g-4">
          {/* Tier 1 */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-light text-center p-4 rounded-4">
              <div className="card-body">
                <h3 className="card-title fw-bold text-dark mb-2">13%</h3>
                <p className="card-text mb-1 text-muted">Below 10K</p>
                <small className="text-secondary">Inclusive of Platform Fees</small>
              </div>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-light text-center p-4 rounded-4">
              <div className="card-body">
                <h3 className="card-title fw-bold text-dark mb-2">12%</h3>
                <p className="card-text mb-1 text-muted">10K - 50K</p>
                <small className="text-secondary">Inclusive of Platform Fees</small>
              </div>
            </div>
          </div>

          {/* Tier 3 */}
          <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-light text-center p-4 rounded-4">
              <div className="card-body">
                <h3 className="card-title fw-bold text-dark mb-2">10%</h3>
                <p className="card-text mb-1 text-muted">Above 50K</p>
                <small className="text-secondary">Inclusive of Platform Fees</small>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-muted mt-4 mb-0">
          No GST currently applied
        </p>
      </div>
    </div>
  );
}
