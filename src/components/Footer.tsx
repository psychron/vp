const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Virgin Palm. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
