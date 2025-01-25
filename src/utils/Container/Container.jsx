const Container = ({ children, classes }) => {
  return <div className={`w-full min-h-screen ${classes}`}>{children}</div>;
};

export default Container;
