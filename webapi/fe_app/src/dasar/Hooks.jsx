// rafce
import React, { useEffect, useState } from "react";

const Hooks = () => {
  // constructor
  const [nilai, setnilai] = useState(0);

  // lifecycle component
  useEffect(
    () => {
      // didmount dan didupdate
      document.title = `Nilai ubah: ${nilai}`;
      console.log("didmount & diupdate");
      return () => {
        // willunmount
        console.log("willunmount");
        document.title = `Inixindo`;
      };
    },
    // willupdate
    [nilai]
  );

  return (
    <>
      <div>Hooks</div>
      <p>Nilai saat ini adalah : {nilai}</p>
      <button onClick={() => setnilai(nilai + 1)}>Update Nilai</button>
    </>
  );
};

export default Hooks;
