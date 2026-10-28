// Shows the loading message or the error message for pages that need the menu.
export default function Status({ loading, error }) {
  if (loading) {
    return (
      <p className="status" role="status">
        Loading today's menu...
      </p>
    );
  }
  if (error) {
    return (
      <p className="status error" role="alert">
        {error}
      </p>
    );
  }
  return null;
}
