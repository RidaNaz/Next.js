export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
                         {/*Only the root layout can contain `<html>` and `<body>` tags.*/}
        {children}
      </section>
    )
  }