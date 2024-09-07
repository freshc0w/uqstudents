type CourseReviewLayoutProps = {
  children: React.ReactNode;
};

export const ReviewLayout = ({ children }: CourseReviewLayoutProps) => {
  return <div className="flex flex-col sm:flex-row">{children}</div>;
};
