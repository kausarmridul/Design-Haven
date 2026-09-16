import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({ team }) => {
  return (
    <div className="bg-secondary rounded-2xl overflow-hidden shadow hover:-translate-y-2 transition-all duration-300 cursor-pointer fade-in">
      <div>
        <Image
          src={team.image}
          alt={team.name}
          width={500}
          loading="eager"
          height={500}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl text-gray-800 font-bold font-heading mb-4">
          {team.name}
        </h2>
        <p className="text-accent font-medium mb-4">{team.role}</p>
        <p className="text-gray-500 text-xs mb-4">{team.bio}</p>

        <div className="flex items-center space-x-4 text-gray-400">
          <FaLinkedin />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
