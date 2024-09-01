import { H1, H2 } from "@/components/typography";

type ContentLayoutProps = {
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  title?: string;
};

export const ContentLayout = ({
  children,
  headerChildren,
  title,
}: ContentLayoutProps) => {
  return (
    <>
      <div className="py-6">
        <header className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 border-red-500">
          {title && <H1>{title}</H1>}
          {headerChildren}
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8 border-blue-500">
          {children}
        </main>
      </div>
    </>
  );
};
