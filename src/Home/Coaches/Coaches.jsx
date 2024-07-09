import SectionTitle from "../../Components/SectionTitle";

const Coaches = () => {
  return (
    <div className="mt-36 responsive-padding">
      <SectionTitle
        heading={"Our coaches"}
        subHeading={
          "Expert coaches with diverse skillsand supportive coaches leading the way."
        }
      />

      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
        <div className="auth-icons  text-primary-text">
          <img
            className="w-full rounded-2xl"
            src="https://imagizer.imageshack.com/img922/406/jSiDwB.jpg"
            alt=""
          />
          <div className="text-center py-5">
            <h3 className="font-bold text-slate-900">Satlen Joe</h3>
            <p>Fitness Coaches</p>
          </div>
        </div>
        <div className="auth-icons  text-primary-text">
          <img
            className="w-full rounded-2xl"
            src="https://imagizer.imageshack.com/img922/1456/wm1Odt.jpg"
            alt=""
          />
          <div className="text-center py-5">
            <h3 className="font-bold text-slate-900">Henry Joe</h3>
            <p>Fitness Coaches</p>
          </div>
        </div>
        <div className="auth-icons  text-primary-text">
          <img
            className="w-full rounded-2xl"
            src="https://imagizer.imageshack.com/img922/9180/x8lE4z.jpg"
            alt=""
          />
          <div className="text-center py-5">
            <h3 className="font-bold text-slate-900">Merry Joe</h3>
            <p>Fitness Coaches</p>
          </div>
        </div>
        <div className="auth-icons  text-primary-text">
          <img
            className="w-full rounded-2xl"
            src="https://imagizer.imageshack.com/img923/3286/jn0RRI.jpg"
            alt=""
          />
          <div className="text-center py-5">
            <h3 className="font-bold text-slate-900">Robert Joe</h3>
            <p>Fitness Coaches</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaches;
