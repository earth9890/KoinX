import React from 'react';
import AboutCards from './AboutCards';

const About = () => {
	return (
    <div className="lg:w-[70%] bg-white rounded-lg p-4 mb-4">
      <h1 className="font-bold text-3xl mb-2">About BitCoin</h1>
      <h2 className="font-bold">What is Bitcoin ?</h2>
      <p className="mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        recusandae esse ad vitae aliquam suscipit perspiciatis provident sint
        modi tempore consequuntur architecto asperiores, expedita laboriosam
        molestiae voluptates odit eaque rem.
      </p>
      <hr />
      <p className="mt-4 font-bold">Lorem ipsum dolor sit amet.</p>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, neque
        maiores nobis veniam magni quaerat temporibus exercitationem suscipit
        earum maxime nulla officiis ducimus quam sapiente voluptatum magnam
        consectetur? Assumenda, id?
      </p>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, neque
        maiores nobis veniam magni quaerat temporibus exercitationem suscipit
        earum maxime nulla officiis ducimus quam sapiente voluptatum magnam
        consectetur? Assumenda, id?
      </p>
      <p className="my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, neque
        maiores nobis veniam magni quaerat temporibus exercitationem suscipit
        earum maxime nulla officiis ducimus quam sapiente voluptatum magnam
        consectetur? Assumenda, id?
      </p>

      <h1 className="font-bold text-xl mb-2">Already Holding Bitcoin ?</h1>
      <div className="lg:flex gap-4">
        <AboutCards
          heading="Calculate your tax liablity"
          src="https://img.freepik.com/free-vector/tax-concept-illustration_114360-5874.jpg?t=st=1709829197~exp=1709832797~hmac=fda9686f0aa75f8ac75391c164669c6913cf3eb51aca528e5b0cb8388b99ba56&w=1380"
          bg1="rgb(0,255,201)"
          bg2="linear-gradient(35deg, rgba(0,255,201,0.9781162464985994) 1%, rgba(0,202,255,1) 99%)"
        />
        <AboutCards
          heading="Calculate your profit"
          src="https://img.freepik.com/free-photo/graph-growth-development-improvement-profit-success-concept_53876-120075.jpg?t=st=1709829394~exp=1709832994~hmac=323b4285c7ab8c25119a870270ae54e9b1d654ed31454f3f7ba6c92adc078352&w=1800"
          bg1="rgb(255,141,0)"
          bg2="linear-gradient(45deg, rgba(255,141,0,0.9360994397759104) 2%, rgba(255,231,0,0.7456232492997199) 100%)"
        />
      </div>
      <hr />
      <p className="mt-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        architecto laudantium velit aliquid distinctio provident. Facilis
        tempore, deserunt officiis labore commodi exercitationem voluptatum,
        maxime laudantium inventore sapiente in ullam similique.
      </p>
    </div>
  );
};

export default About;
