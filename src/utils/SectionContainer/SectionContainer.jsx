const SectionContainer = ({ children, classes }) => {
  return (
    <div className={`min-h-screen max-w-7xl mx-auto px-4 py-10 ${classes}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
