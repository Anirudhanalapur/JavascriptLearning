function MyLazyComponent() {
    return (
      <div>
        <h2>This is a lazily loaded component!</h2>
        <p>It was loaded only when needed.</p>
      </div>
    );
  }
  
  export default MyLazyComponent;