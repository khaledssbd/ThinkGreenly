import Image from "next/image";
import giffy from "../assets/loader.gif";

const loading = () => {
  return (
    <div className="grid place-items-center">
      <Image src={giffy} width={500} height={500} alt="giffy" />
    </div>
  );
};

export default loading;
