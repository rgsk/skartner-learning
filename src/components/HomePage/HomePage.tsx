interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center py-[200px]">
      <h1 className="text-5xl">Skartner</h1>
      <div className="h-[20px]"></div>
      <h2 className="text-3xl">Your Partner in Skills Development</h2>
    </div>
  );
};
export default HomePage;
