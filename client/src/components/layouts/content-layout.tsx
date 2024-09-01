type ContentLayoutProps = {
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
};

export const ContentLayout = ({
  children,
  headerChildren,
}: ContentLayoutProps) => {
  // TODO: Implement Head fore seo
  return (
    <>
      <div className="py-6">
        <header className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {headerChildren}
        </header>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8">
          {children}
        </div>
      </div>
    </>
  );
};
