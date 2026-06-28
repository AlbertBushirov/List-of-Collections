type PropsHeaderPage = {
  title: string;
};

export function HeaderList({ title }: PropsHeaderPage) {
  return (
    <>
      <h1>{title}</h1>
      <hr />
    </>
  );
}
