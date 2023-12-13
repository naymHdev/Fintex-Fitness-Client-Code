import Calculate from "./Calculate";

const Bmi = () => {
  return (
    <div className="grid items-center mt-20 py-24 bg-cover grid-cols-1 md:grid-cols-2 gap-10 bg-[url('https://imagizer.imageshack.com/img923/5028/86FGMl.jpg')]">
      <div className="md:px-8">
        <Calculate />
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Bmi;
