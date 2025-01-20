interface DocumentLayoutProps {
  children: React.ReactNode;
}
const DocumentLayout = ({ children }: DocumentLayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div>{children}</div>
    </div>
  );
};

export default DocumentLayout;
