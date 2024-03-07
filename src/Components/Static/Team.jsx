import TechCard from '../Cards/TechCard';

const Team = () => {
	return (
    <div className="bg-white rounded-lg p-4 lg:w-[70%]">
      <h1 className="font-bold text-3xl mb-2">Team</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Exercitationem, eligendi delectus cumque harum soluta perferendis
        assumenda voluptas provident, perspiciatis laudantium ipsa accusantium
      </p>
      <TechCard
        name="Kiara Advani"
        src="https://img.freepik.com/premium-photo/indoors-portrait-beautiful-stylish-woman-with-trendy-glasses-curly-hairstyle-fashion-beige-knitted-vintage-sweater-sits-cafe_338491-19838.jpg?w=826"
      />
      <TechCard
        name="Sidharth Malhotra"
        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1709828919~exp=1709832519~hmac=4a0952d38dcb57f1e75de1ba98595828addf33c5e756530f4b8c5ced0cb73da5&w=1800"
      />
      <TechCard
        name="Salman Khan"
        src="https://img.freepik.com/free-photo/front-view-handsome-man-with-glasses_23-2148946194.jpg?t=st=1709829054~exp=1709832654~hmac=384cd219a92926d59333a30f5c904250f541266e4c09a5e1b28ae8cc44c43131&w=1800"/>
    </div>
  );
};

export default Team;
